import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { cArr } from './pictureLoad';
import List from '../List/List';
import Heading from '../Fillers/Headings/Heading';
import './About.scss';

const About = () => {
    return (
        <Container className="component-container">
            <Heading classname="heading" text='Who We Are' />
            <Container>
                <Row>
                    <Col>
                        <p>Bacon ipsum dolor amet fatback alcatra short ribs,
                        shankle boudin pork bacon bresaola. Capicola bacon pork
                        loin, turducken short loin pork chop corned beef frankfurter.
                        Spare ribs turducken bacon alcatra frankfurter buffalo,
                        meatball doner. Cupim salami alcatra tenderloin meatloaf
                        turducken. Bacon short ribs tail flank boudin burgdoggen,
                        pancetta ball tip corned beef. Kielbasa cow meatloaf,
                        sirloin alcatra capicola burgdoggen turkey. Cow pig frankfurter
                       kielbasa turkey.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="list-services">
                        <List />
                    </Col>
                    <Col className="carousel-col">
                        <Carousel className="carousel-about" fade>
                            {cArr.map((p, i) => (
                                <Carousel.Item interval={1200} key={i}>
                                    <Image className="carousel-img" src={p.url} alt={p.alt} rounded />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About;