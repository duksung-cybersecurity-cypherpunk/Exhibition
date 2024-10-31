import React from "react"

const GradientText = ({text}) => {
    return (
        <div style={{
            width: 'fit-content',
            background: "linear-gradient(to right, #ED8EB5, #7797CE 70%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textDecoration: "none"
        }}>
            {text}
        </div>
    )
}

export default GradientText