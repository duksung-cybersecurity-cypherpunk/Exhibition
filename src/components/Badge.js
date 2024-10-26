import React from "react"
import badgeList from "../assets/data/badge.json"

const Badge = ({stack, idx}) => {
    const upperStack = stack.toUpperCase()
    const badge = badgeList[`${upperStack}`]
    const url = `https://img.shields.io/badge/${badge.name}-131417?style=flat-square&logo=${badge.badge}&logoColor=FBE1E8`
    return <img className='badge' src={url} key={idx}/>
}

export default Badge