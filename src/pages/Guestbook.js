import React, {useEffect, useState} from 'react';
import '../styles/Guestbook.css';
import image1 from '../assets/images/message11_1.png';
import image2 from '../assets/images/message11_2.png';
import image3 from '../assets/images/message11_3.png';
import {collection, getDocs, addDoc, query, orderBy} from 'firebase/firestore/lite'
import {db} from "../firebase";
import Divider from "../components/Divider";
import {isMobile} from "react-device-detect";

const GuestBook = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        getComments()
            .then(docs => {
                setMessages(docs)
            })
    }, []);

    const dividerOption = {
        border: {
            height: 1,
            color: "#FEE1E8"
        },
        margin: {
            top: 45,
            right: 0,
            bottom: 0,
            left: 0
        }
    }

    const dividerOptionM = {
        border: {
            height: 1,
            color: "#FEE1E8"
        },
        margin: {
            top: 20,
            right: 0,
            bottom: 0,
            left: 0
        }
    }

    const getComments = async () => {
        const commentsCollection = collection(db, 'comments')
        const commentQuery = query(commentsCollection, orderBy('timestamp', 'desc'))
        const commentsSnapshot = await getDocs(commentQuery)

        if (commentsSnapshot.empty) {
            return null
        }

        return commentsSnapshot.docs.map(doc => {
            const images = [image1, image2, image3];
            const randomImage = images[Math.floor(Math.random() * images.length)];

            return {
                content: doc.data().content,
                imageSrc: randomImage
            }
        })
    }

    const addComment = async (comment) => {
        const commentCollection = collection(db, 'comments')
        await addDoc(commentCollection, {content: comment, timestamp: new Date()})
    }

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleFormSubmit = async () => {
        await addComment(newMessage.trim())
            .then(_ => {
                setNewMessage('');
            })
        await getComments()
            .then(docs => {
                setMessages(docs)
            })
    };
    return (
        <div className={ isMobile ? "guestBookAllM" : "guest-book-all"}>
            <div className="guest-book">
                <div className="guest-book-fixed">
                    <h2 className="guest-book-title">Guest Book</h2>
                    <p className="guest-book-description">{"졸업을 앞둔 사보인들에게\n축하의 메시지를 남겨주세요!"}</p>
                </div>
                <MessageForm
                    newMessage={newMessage}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                />
            </div>
            <Divider option={isMobile ? dividerOptionM : dividerOption} />
            <div className="message-cards-container">
                {messages.map((message, index) => (
                    <MessageCard key={index} message={message} />
                ))}
            </div>
        </div>
    );
};

const MessageForm = ({ newMessage, handleInputChange, handleFormSubmit }) => {
    return (
        <div className="message-form">
            <div className="textarea-wrapper">
                <textarea
                    value={newMessage}
                    onChange={handleInputChange}
                    placeholder="축하 메시지를 남겨보세요"
                    maxLength={140}
                />
                <p className="char-count">{newMessage.length}/140</p>
            </div>
            <div className="submitBtnContainer">
                <img
                    src={require("../assets/images/submit-button.png")}
                    alt="등록하기 버튼"
                    onClick={() => {
                        handleFormSubmit();
                    }}
                    className="submit-button"
                />
            </div>
        </div>
    );
};


const MessageCard = ({ message }) => {
    return (
        <div
            className="message-card" style={{ backgroundImage: `url(${message.imageSrc})` }}
        >
            <div className="message-content">
                {message.content}
            </div>
        </div>
    );
};

export default GuestBook;
