import Container from 'react-bootstrap/Container';
import Heading from '../Fillers/Headings/Heading';
import ContactForm from './ContactForm/ContactForm';
import './Contact.scss';

const Contact = () => {
    return (
        <Container className="component-container">
            <Heading classname="heading contact-heading" text='Contact Us For Work' />
            <ContactForm />
        </Container>
    )
}

export default Contact;