import React from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteUser }  from '../../store/features/UserSlice'

const UserItem = ({item}) => {
 
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("++ handleDelete > id:: ", id )
    //call axios
    if( window.confirm("Do You wang Delete?")) {

        // axios.delete('http://localhost:8000/users/' + id)
        //     .then( res => {
        //         console.log("++ delete> res:: ", res)
        //         alert("Deleted Success");
                 
        //         window.location.reload();
        //     }) 
        //     .catch( err => {

        //     })

        dispatch(deleteUser({id}));
        
        window.location.reload();
            
    }//End If
  }

  const navigate = useNavigate();
  const handleEdit = (id) => {
        navigate("/user/edit/" + id);
  }

  return ( 
        <tr>
            <th scope="row"> {item.id} </th>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td className="d-flex">
                <a href="#"
                   onClick={() => handleEdit(item.id)}
                > Edit </a>
                <a href="#" className="ms-2"
                   onClick={() => handleDelete(item.id)}
                > Del </a>
            </td>
        </tr> 
  )
}

export default UserItem
