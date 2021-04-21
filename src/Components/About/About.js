import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { cArr } from './pictureLoad';
import logo from '../../assets/about-pic/about_1.jpeg';
const About = () => {
    console.log("dd", cArr)
    return (
        <Container>
            <h1>Who We Are</h1>
            <Container>
                <p>Bacon ipsum dolor amet fatback alcatra short ribs,
                shankle boudin pork bacon bresaola. Capicola bacon pork
                loin, turducken short loin pork chop corned beef frankfurter.
                Spare ribs turducken bacon alcatra frankfurter buffalo,
                meatball doner. Cupim salami alcatra tenderloin meatloaf
                turducken. Bacon short ribs tail flank boudin burgdoggen,
                pancetta ball tip corned beef. Kielbasa cow meatloaf,
                sirloin alcatra capicola burgdoggen turkey. Cow pig frankfurter
                       kielbasa turkey.</p>
                       <img src={logo}/>
                <Carousel>

                        {cArr.map(p => (
                            <Carousel.Item interval={1000}>
                                <img src={p.url} alt={p.alt}/>
                            </Carousel.Item>
                        ))}
                        {/* <img
                            className="d-block w-100"
                            src=""
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    
                </Carousel>
            </Container>
        </Container>
    )
}

export default About;