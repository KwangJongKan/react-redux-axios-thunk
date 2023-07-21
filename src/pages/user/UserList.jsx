import React, { useEffect, useState } from 'react'
import './user.css'
import axios from 'axios'

import UserItem from '../../components/user/UserItem'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/features/UserSlice'

const UserList = () => {

    
  // const user = [
    // {
    //   "id": 1,
  	// 	"name": "Barrett Gilliam",
  	// 	"phone": "(969) 616-6478",
  	// 	"email": "pharetra.quisque@aol.edu"
  	// },
  	// {
    //   "id": 2,
  	// 	"name": "Amy Bishop",
  	// 	"phone": "1-932-334-6882",
  	// 	"email": "lectus.a@yahoo.couk"
  	// },
  	// {
    //   "id": 3,
  	// 	"name": "Dolan Davis",
  	// 	"phone": "(143) 988-9704",
  	// 	"email": "fringilla.donec@yahoo.couk"
  	// },
  	// {
    //   "id": 4,
  	// 	"name": "Steel Cohen",
  	// 	"phone": "1-146-149-4078",
  	// 	"email": "tellus.justo.sit@google.couk"
  	// },
  	// {
    //   "id": 5,
  	// 	"name": "Abigail Green",
  	// 	"phone": "1-847-139-7472",
  	// 	"email": "vivamus.non.lorem@aol.edu"
  	// }
  // ]

  // const [user, setUser ] = useState([]);
  const user = useSelector((state)=>{
      return state.user.datas
  })

  const dispatch = useDispatch();
  useEffect(()=>{
    //axios 
    // axios.get('http://localhost:8000/users',
    //           {
    //             params: {},
    //             headers:{}
    //           }
    //       )
    //       .then(res => {
    //         return res;
    //       })
    //       .then( resp => {
    //           console.log("++ resp:: ", resp.data)
    //           setUser(resp.data)

    //       })
    //       .catch(error =>{
    //           console.log(" ++ error.meaaget: ", error.message )
    //       })
 
    dispatch(getUsers());
    

  },[])
 

  return (
    <div className="user">
         <div className="userList d-flex justify-content-center mt-3">
            <div className="card col-10"> 
                  <div className="card-header text-center">
                       User List
                  </div>
                  <div className="card-body">
                          <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Email</th>
                              <th scope="col">Buttons</th>
                            </tr>
                          </thead>
                          <tbody>
                               {user.map(item => (
                                  <UserItem item={item} key={item.id}/>
                               ))}
                               
                          </tbody>
                        </table>
                  </div>
                  <div className="card-footer d-flex justify-content-end">
                       <Link to="/user/regist" className="btn btn-outline-info btn-sm"> 
                            Add User
                       </Link>
                  </div>
              </div>
          </div>  
    </div>
  )
}

export default UserList
