import { BoxContainer } from "./Container"
import { Col2, Row2 } from "./Grid"
import { RoundedButton } from "./Button"
import { useNavigate } from "react-router-dom"

const TodoBoxList = (props) => {

    const redirect = useNavigate()
    
    const deleteEvent = async () => {
        const data = await fetch("/api/delete/"+props.id, {
            method: "DELETE",
            body: {
                _id: props.id
            }
        })
        const response = await data.json()
    
        console.log(response)
    
        if (response.ok) {
            return redirect('/')
        } else {
            console.log("Failed deleting id "+props.id)
        }
    }

    const status = {
        yes: {
            color: "rgb(53, 243, 53)",
            fontSize: "20px"
        },
        no: {
            color: "rgb(248, 58, 58)",
            fontSize: "20px"
        }
    }

    const statusHandler = async () => {
        const val = {id: props.id, icon: props.icon, title: props.title, desc: props.desc, status: true}
        console.log(JSON.stringify(val))
        
        const res = await fetch('/api/update', {
            method: 'PUT',
            body: JSON.stringify(val),
            headers: {
                "Content-type": "application/json"
            }
        })

        if (res.ok) {
            console.log('Success updating todo')
        }

    }

    return (
        <BoxContainer>
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
                <i className={`fa-solid fa-${props.icon} icon`}></i>
                <div style={{
                    width: "100%"
                }}>
                    <Col2>
                        <Row2>
                            <h4>{props.title}</h4>
                            <p>{props.description}</p>
                        </Row2>
                        
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <RoundedButton background="rgb(196, 196, 196)" size="16px" color="rgb(88,88,88)" hover="danger">
                                <i className="fa-solid fa-check" onClick={props.handler}></i>
                            </RoundedButton>
                            <RoundedButton background="rgb(196, 196, 196)" size="16px" color="rgb(88,88,88)" hover="danger" margin="0 0.7rem">
                                <i className="fa-solid fa-trash" onClick={deleteEvent}></i>
                            </RoundedButton>
                            <i className="fa-solid fa-circle" style={props.status ? status.yes : status.no}></i>
                        </div>
                    </Col2>
                    </div>
                </div>
            </BoxContainer>
    )
}

export default TodoBoxList