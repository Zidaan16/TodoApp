import { useState } from "react"
import { Link } from "react-router-dom"

const RoundedButton = (props) => {
    
    return (
        <Link to={props.href} className="rounded-button" style={{
            color: props.color,
            backgroundColor: props.background,
            fontSize: props.size,
            margin: props.margin
        }}>
            {props.children}
        </Link>
    )
}

export {RoundedButton}