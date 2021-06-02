import Container from 'react-bootstrap/Container';
import Heading from '../Fillers/Headings/Heading';
import Image from 'react-bootstrap/Image';
import { workArr } from './workPhotos';
import './Work.scss';

const Work = () => {

    const displayImages = arr => {
        let photos = arr.map(p => (
            <Image className="work-image" src={p.url} thumbnail />
        ))
        return photos;
    }

    return (
        <Container className="component-container">
            <Heading classname="heading work-heading" text='See Our Work' />
            <Container className="work-image-container">
                {displayImages(workArr)}
            </Container>
        </Container>
    )
}

export default Work;