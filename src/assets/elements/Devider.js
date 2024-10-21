import React from "react"

const DevidingLine = ({option}) => {
    return (
        <hr style={{border: `${option.border.height}px solid ${option.border.color}`, margin: `${option.margin.top}px ${option.margin.right}px ${option.margin.bottom}px ${option.margin.left}px`}} />
    )
}

export default DevidingLine