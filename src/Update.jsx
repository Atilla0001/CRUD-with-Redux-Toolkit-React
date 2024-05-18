import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "./UserReducer"






const Update = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.users)
  const existingUser = users.filter(f => f.id == id)
  const { name, email } = existingUser[0]
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }
  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5 mt-5">
        <form onSubmit={handleUpdate}>
          <h1>Update User</h1>
          <div>
            <label htmlFor="name"></label>
            <input type="text" name="name" className="form-control" placeholder="enter name"
              value={uname}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input type="text" name="email" className="form-control" placeholder="enter email"
              value={uemail}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-info mt-2">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update
