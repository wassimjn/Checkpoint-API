import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { Button, Card, ListGroup } from "react-bootstrap"
import '../App.css'

function Details() {
    const {guestId} = useParams()
    const [guest,setGuest]= useState({})
    const navigate = useNavigate()
    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/users/${guestId}`)
        .then(res=>setGuest(res.data))
        .catch(err=>console.log(err))
      

    },[])
    return (
        <div className="userCard">
           
            <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
            <ListGroup.Item><strong>Name:</strong>  {guest.name}</ListGroup.Item>
            <ListGroup.Item><strong>Phone: </strong> {guest.phone}</ListGroup.Item>
            <ListGroup.Item><strong>Username: </strong> {guest.username}</ListGroup.Item>
           
            </ListGroup>
            <Button onClick={()=>navigate(-1)}>Go Back</Button>
           
            </Card>
        </div>
    )
}
export default Details