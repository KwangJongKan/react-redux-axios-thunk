import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/features/UserSlice';
import { updateUser } from '../../store/features/UserSlice';

const UserEdit = () => {
  const { id } = useParams();

  const serverUser = useSelector((state)=>{
      return state.user.data
  });

//   const [user, setUser] = useState({
//     "id": id,
//     "name": "",
//     "phone": "",
//     "email": ""
//   })

  const [user, setUser] = useState(serverUser)

  const dispatch = useDispatch();
  useEffect(() => {
    // call axios 
    // axios.get('http://localhost:8000/users/' + id )
    //      .then( res => {
    //          return res;
    //      })
    //      .then( resp => {
    //          console.log("++ userEdit>> resp.data:: ", resp.data) 
    //          setUser( resp.data )
    //      })
    //      .catch( error => {
    //         console.log("++ error:: ", error.message )
    //      })
    dispatch(getUser({id}));

  },[id])

  const navigate = useNavigate();

  const handleSave = () => {
     //call axios.put
    //  axios.put("http://localhost:8000/users/" + id,
    //             user
    //        )
    //       .then(res => {
    //             alert("Saved Succeful!!")
    //             navigate("/user");

    //       })
    //       .catch( err => {

    //       })

    dispatch(updateUser(user));

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

export default UserEdit
