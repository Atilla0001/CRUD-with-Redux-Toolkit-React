import { useState } from "react"
import { addUser } from "./UserReducer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
        navigate("/")
    }


    return (
        <div className="d-flex w-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5 mt-5">
                <form onSubmit={handleSubmit}>
                    <h1>Add New User</h1>
                    <div>
                        <label htmlFor="name"></label>
                        <input type="text" name="name" className="form-control" placeholder="enter name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="text" name="email" className="form-control" placeholder="enter email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-info mt-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create
