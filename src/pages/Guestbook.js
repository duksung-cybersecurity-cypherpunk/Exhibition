import React, { useState } from 'react';
import '../styles/Guestbook.css';
import image1 from '../assets/images/message11_1.png';
import image2 from '../assets/images/message11_2.png';
import image3 from '../assets/images/message11_3.png';

const GuestBook = () => {
    const [messages, setMessages] = useState([
        {
            content: '안녕하세요 사이버보안 2기 졸업생 여러분! 벌써 졸업이라니, 시간도 금방 지나간 것 같아요. 모두들 잘 해나가리라 믿어요!',
            imageSrc: image1,
        },
        {
            content: '도리미파솔라시도 도레미파솔시도레미...',
            imageSrc: image2,
        },
        {
            content: '졸업을 축하드립니다. 모든 분들께 큰 행운이 가득하길 바랍니다!',
            imageSrc: image3,
        },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleFormSubmit = () => {
        if (newMessage.trim()) {
            const images = [image1, image2, image3];
            const randomImage = images[Math.floor(Math.random() * images.length)];
            setMessages((prevMessages) => [
                ...prevMessages,
                {

                    content: newMessage,

                    imageSrc: randomImage,
                },
            ]);
            setNewMessage('');
        }
    };

    return (
        <div className="guest-book-all">
            <div className="guest-book">
                <div className="guest-book-fixed">
                    <h2 className="guest-book-title">Guest Book</h2>
                    <p className="guest-book-description">졸업을 앞둔 사보인들에게<br></br> 축하의 메시지를 남겨주세요!</p>
                </div>
                <MessageForm
                    newMessage={newMessage}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                />
            </div>
            <div class="horizontal-line"></div>

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
                    placeholder="글을 이렇게 쓰는겁니다 아시겠죠"
                    maxLength={140}
                />
                <p className="char-count">{newMessage.length}/140</p>
            </div>
            <img
                src={require("../assets/images/submit-button.png")}
                alt="등록하기 버튼"
                onClick={handleFormSubmit}
                className="submit-button"
            />
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
