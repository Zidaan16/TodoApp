const Col2 = (props) => {
    return (
        <div className="col-2">
            {props.children}
        </div>
    )
}

const Row2 = (props) => {
    return (
        <div className="row-2">
            {props.children}
        </div>
    )
}

export {Col2, Row2}