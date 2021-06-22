import ListGroup from 'react-bootstrap/ListGroup';
import './List.scss';

const List = () => {
    return (
        <ListGroup className="list-group-holder" variant="flush">
            <span></span>
            <ListGroup.Item className="list-item">Concrete</ListGroup.Item>
            <ListGroup.Item className="list-item">Residential</ListGroup.Item>
            <ListGroup.Item className="list-item">Foundation</ListGroup.Item>
            <ListGroup.Item className="list-item">Patios</ListGroup.Item>
            <span></span>
        </ListGroup>
    )
}

export default List;