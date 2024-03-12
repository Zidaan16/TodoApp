import { BoxContainer } from "../components/Container"
import { Col2, Row2 } from "../components/Grid"
import { RoundedButton } from "../components/Button"
import { deleteHandler } from "../todoHandler/Handler"
import Message from "../components/Message"
import { useEffect, useState } from "react"

const Home = () => {
    const [todoJson, setTodoJson] = useState(null)
    const [msg, setMsg] = useState(false)
    const [color, setColor] = useState('')
    const [showMsg, setShowMsg] = useState(false)

    const load = async () => {
        const response = await fetch('api/all')
        const jsonData = await response.json()

        if (response.ok) {
            setTodoJson(jsonData.model)
        }
    }

    useEffect(() => {
        load()
    }, [])

    const deleteRequest = async (event) => {
        const id = event.currentTarget.getAttribute('id')
        const res = await deleteHandler(id)
        setShowMsg(true)
        if (res) {
            setColor('green')
            setMsg('Success delete item '+id)
        } else {
            setColor('red')
            setMsg('Failed delete item '+id)
        }
        load()
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

    return (
        <>
            <h1 style={{
                margin: "0rem 0 3rem 0",
                color: "rgb(88, 88, 88)"
            }}
            >My todo list </h1>
            {showMsg ? <Message color={color} text={msg}/> : null}
            {todoJson && todoJson.map((item) => (
                <BoxContainer>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <i className={`fa-solid fa-${item.icon} icon`}></i>
                        <div style={{
                            width: "100%"
                        }}>
                            <Col2>
                                <Row2>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </Row2>

                                <div style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                    <RoundedButton background="rgb(196, 196, 196)" size="16px" color="rgb(88,88,88)" hover="danger">
                                        <i className="fa-solid fa-check"></i>
                                    </RoundedButton>
                                    <RoundedButton background="rgb(196, 196, 196)" size="16px" color="rgb(88,88,88)" hover="danger" margin="0 0.7rem">
                                        <i className="fa-solid fa-trash" id={item._id} onClick={deleteRequest}></i>
                                    </RoundedButton>
                                    <i className="fa-solid fa-circle" style={item.status ? status.yes : status.no}></i>
                                </div>
                            </Col2>
                            </div>
                        </div>
                </BoxContainer>
            ))}
            
        </>
    )
}

export default Home