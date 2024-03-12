import { useNavigate } from "react-router-dom"
import { BoxContainer } from "../components/Container"
import { useState } from "react"

const Update = () => {

    const redirect = useNavigate()

    const [icon, setIcon] = useState(null)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [status, setStatus] = useState(null)

    const submitForm = async (event) => {
        event.preventDefault()

        
        const json = {"icon": icon ,title, desc, "status": false}
        
        const res = await fetch('/update/'+id, {
            method: "PUT",
            body: JSON.stringify(json),
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (res.ok) {
            return redirect('/')
        } else {
            console.log('Failed adding new resource')
        }

    }
    return (
        <>
            <h1 style={{
                margin: "0rem 0 3rem 0",
                color: "rgb(88, 88, 88)"
            }}
            >Update todo </h1>
            <BoxContainer>
                <form onSubmit={submitForm} method="post">
                    <label > Type
                    </label> <br />
                    <select onChange={(event) => {
                        setIcon(event.target.value)
                    }}>
                        <option defaultValue>
                            Select type
                        </option>
                        <option value="work">Work</option>
                        <option value="workout">Workout</option>
                        <option value="sleep">Sleep</option>
                        <option value="homework">Homework</option>
                    </select> <br />

                    <label> Title
                    </label> <br />
                    <input type="text" name="title" onChange={(event) => {
                        setTitle(event.target.value)
                    }} value={title}></input> <br />

                    <label> Description
                    </label> <br />
                    <input type="text" name="desc" onChange={(event) => {
                        setDesc(event.target.value)
                    }} value={desc}></input> <br />

                    <button>Submit</button>

                </form>
            </BoxContainer>
        </>
    )
}

export default Update