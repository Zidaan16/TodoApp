const BoxContainer = (props) => {
    return (
        <>
            <div className="container-box">
                {props.children}
            </div>
        </>
    )
}

export {BoxContainer}