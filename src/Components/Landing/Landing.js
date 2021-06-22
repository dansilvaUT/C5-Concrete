import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Heading from '../Fillers/Headings/Heading';
import logo from '../../assets/c5_logo.jpeg'
import './Landing.scss';

const Landing = () => {
  return (
    <>
      <Container fluid className="jumbotron-about" >
        <Heading classname="heading top-header" text='C5 Concrete' />
        <Image className="logo-img" src={logo} roundedCircle />
      </Container>
    </>

  )
}

export default Landing;