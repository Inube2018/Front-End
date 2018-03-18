import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Container, Row, Col } from 'reactstrap';


const items = [
    {
        id: 'slide1',
        src:'./../public/field.jpg' ,
        altText: 'Slide 1',
        caption: 'Descripción BREVE del sistema'
    },
    {
        id: 'slide2',
        src: './../public/mountains.jpg',
        altText: 'Slide 2',
        caption: 'Opinión 1'
    },
    {
        id: 'slide3',
        src: './../public/road.jpg',
        altText: 'Slide 3',
        caption: 'Opinión 2'
    }
]

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }



    render() {

        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
      );
    });

        return (
            <Container fluid>
                <Row>
                    <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </Row>
                <Row>
                    <Col md='4'> <img src='./../public/nube.svg' /> </Col>
                    <Col md='8'>
                        <p id='home-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a dapibus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum mauris sit amet sagittis ullamcorper. Pellentesque hendrerit congue nibh, tempor euismod tellus congue id. Praesent interdum, sem non elementum pharetra, elit massa dictum tortor, ac vulputate est nibh id turpis. Integer finibus aliquet eros vel tristique. Nunc sit amet pharetra ante. Morbi purus mi, pellentesque vel consectetur efficitur, efficitur ut odio. Etiam in mattis urna. Nullam volutpat vel dolor quis eleifend. Nullam vulputate venenatis erat, venenatis dictum velit aliquam eu. Sed iaculis congue nisl, sed bibendum justo consectetur non. Morbi auctor interdum lectus, id bibendum dui convallis at. Donec nulla diam, tincidunt non pulvinar vitae, sagittis at leo. Phasellus porttitor nec erat ut pharetra.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Home;
