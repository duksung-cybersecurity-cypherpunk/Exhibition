import React from "react"

const Divider = ({option}) => {
    return (
        <hr style={{border: `${option.border.height}px solid ${option.border.color}`, margin: `${option.margin.top}px ${option.margin.right}px ${option.margin.bottom}px ${option.margin.left}px`}} />
    )
}

export default Divider