import { useEffect, useState } from "react"
import axios from 'axios'
import UserCard from "./UserCard"
function UserList() {
    const [liste,setListe]=useState([])
    useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>setListe(res.data))
     .catch(err=>err)
        
    }, [])
    return(
        <div className="userList">
            <div className="list_title">
           <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" className="title_img"/>     
          <h1 className="h1">List Of Guests</h1>
          </div>
         <div className="userCard"> {liste.map(el=><UserCard  el={el} key={el.id} />)}</div>
        </div>
    )
}
export default UserList