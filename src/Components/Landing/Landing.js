import Container from 'react-bootstrap/Container';
import Heading from '../Fillers/Headings/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import './Landing.scss';

const Landing = () => {
  return (
    <>
      <Container fluid className="jumbotron-about" >
        <Heading classname="heading top-header" text='C5' />
        <FontAwesomeIcon icon={faWarehouse} />
        <Heading classname="heading bottom-header" text='Concrete' />
      </Container>
    </>

  )
}

export default Landing;