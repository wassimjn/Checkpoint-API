import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"

function UserCard({el}) {
    return (
        <div className="card">
            <Card style={{ width: '18rem' }} className="bg-light" >
            <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
                <Card.Text>
                  Email: {el.email}<br/>
                  Phone: {el.phone} 
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Street: {el.address.street}</ListGroupItem>
                <ListGroupItem>Suite: {el.address.suite}</ListGroupItem>
                <ListGroupItem>City: {el.address.city}</ListGroupItem>
                <ListGroupItem>ZipCode: {el.address.zipcode}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={el.website}>Web Site  </Card.Link><br/>
                <Link to={`/Details/${el.id}`}>More Details</Link>
            </Card.Body>
            </Card>
        </div>
    )
}
export default UserCard