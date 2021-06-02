import Form from 'react-bootstrap/Form';
import ButtonComp from '../../Button/ButtonComp';
import './ContactForm.scss';

const ContactForm = () => {
    return (
        <Form className="contact-form">
            <Form.Group>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group >
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group >
                <Form.Control as="textarea" rows={3} placeholder="What can we help you with?"/>
            </Form.Group>
            <ButtonComp text='Send' classname="submit-message-btn" />
        </Form>
    )
}

export default ContactForm;