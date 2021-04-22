import Button from 'react-bootstrap/Button';

const ButtonComp = ({ text, func }) => {
    return (
        <Button variant="primary" onClick={func}>{text}</Button>
    )
}

export default ButtonComp;