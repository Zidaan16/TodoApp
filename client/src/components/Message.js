const Message = (props) => {
    if (props.color == "green") {
        const style = {
            backgroundColor: "#B0D9B1"
        }
        return <div className="container-msg" style={style}>
            {props.text}
        </div>
        
    } else if (props.color == "red") {
        const style = {
            backgroundColor: "#FF8080",
        }
        return <div className="container-msg" style={style}>
            {props.text}
        </div>
    } else {
        return null
    }
}

export default Message