import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { useDispatch } from 'react-redux'
import { registUser } from '../../store/features/UserSlice'

const UserRegist = () => { 
  const [user, setUser] = useState({
    "id": 0,
    "name": "",
    "phone": "",
    "email": ""
  })
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSave = () => {
    //use axios post
    // axios.post('http://localhost:8000/users', 
    //             user
    //           )
    //      .then(res => {
    //          alert("Saved Successful!!")
    //          navigate("/user");
    //      })
    //      .catch(error => {
    //         console.log("++ error:: ", error.message );
    //      })
      
    dispatch(registUser(user));
    navigate("/user");

  }

  const handleCancel = () => { 
    navigate("/user")
  }

  return (
    <div className="user">
          <div className="container userEdit">
              <div className="card col-8">
                  <div className="card-header text-center"> 
                      USER EDIT
                  </div>
                  {/*  */}
                  <div className="card-body"> 
                      <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" 
                                 value={user.name}
                                 onChange={(e) => setUser({...user, name: e.target.value})}
                          />
                      </div>
                      <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input type="text" className="form-control" 
                                 value={user.phone}
                                 onChange={(e) => setUser({...user, phone: e.target.value})}
                          />
                      </div>
                      <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input type="text" className="form-control" 
                                 value={user.email}
                                 onChange={(e) => setUser({...user, email: e.target.value})}
                          />
                      </div>
                  </div>
                  {/*  */}
                  <div className="card-footer d-flex justify-content-center"> 
                      <div className="btn btn-outline-primary btn-sm"
                           onClick = {handleSave}
                      > 
                           Save 
                      </div>
                      <div className="btn btn-outline-secondary btn-sm ms-2"
                           onClick = {handleCancel}
                      >
                            Cancel 
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default UserRegist
