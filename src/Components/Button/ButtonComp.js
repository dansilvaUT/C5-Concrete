import Button from 'react-bootstrap/Button';

const ButtonComp = ({ classname, text, func }) => {
    return (
        <Button className={classname} variant="primary" onClick={func}>{text}</Button>
    )
}

export default ButtonComp;