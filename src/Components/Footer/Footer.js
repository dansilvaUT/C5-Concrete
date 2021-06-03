import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; Daniel Silva | C5 | </p>
            <a class="link facebook-link" href="https://www.facebook.com/C5ConcreteCompany" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="facebook-icon" icon={faFacebook} />
            </a>
            <FontAwesomeIcon className="facebook-icon" icon={faPhoneAlt} />
            <span id="phone">:702-501-7773</span>
        </footer>
    )
}

export default Footer;