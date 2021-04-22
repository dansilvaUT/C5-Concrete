import ListGroup from 'react-bootstrap/ListGroup';
import './List.scss';

const List = () => {
    return (
        <ListGroup className="list-group-holder" variant="flush">
            <ListGroup.Item>Concrete</ListGroup.Item>
            <ListGroup.Item>Residential</ListGroup.Item>
            <ListGroup.Item>Foundation</ListGroup.Item>
            <ListGroup.Item>Patios</ListGroup.Item>
        </ListGroup>
    )
}

export default List;