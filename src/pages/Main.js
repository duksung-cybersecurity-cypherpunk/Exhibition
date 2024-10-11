import React, {useState} from "react";
import "../styles/Main.css"

const Main = () => {
    const [text, setText] = useState("메인입니다. Main")
    return (
        <div className="MainText">{text}</div>
    )
}

export default Main