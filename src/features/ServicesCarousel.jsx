import Carousel from '../components/Carousel.jsx';
import Card from '../components/Card.jsx';

function ServicesCarousel() {
  return (
    <Carousel gap='narrow'>
      <Card>
        <Card.Front></Card.Front>
        <Card.Back></Card.Back>
      </Card>
      <Card>
        <Card.Front></Card.Front>
        <Card.Back></Card.Back>
      </Card>
      <Card>
        <Card.Front></Card.Front>
        <Card.Back></Card.Back>
      </Card>
      <Card>
        <Card.Front></Card.Front>
        <Card.Back></Card.Back>
      </Card>
      <Card>
        <Card.Front></Card.Front>
        <Card.Back></Card.Back>
      </Card>
    </Carousel>
  )
}

export default ServicesCarousel;