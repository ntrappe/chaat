import Preview from '../components/Preview';
import Carousel from '../components/Carousel.jsx';

function ProjectCarousel() {
  return (
    <Carousel gap='narrow'>
      <Preview>
        <Preview.Video placeholder={'hiking'} media={'hiking'}></Preview.Video>
        <Preview.Content background='#502823'>
          Finding a hike has never been so easy.
        </Preview.Content>
      </Preview>
      <Preview>
        <Preview.Video placeholder={'building'} media={'building'}></Preview.Video>
        <Preview.Content>
          Explore the origins of the avant-garde. 
        </Preview.Content>
      </Preview>
      <Preview>
        <Preview.Video placeholder={'timer'} media={'timer'}></Preview.Video>
        <Preview.Content background='#285036'>
          Say goodbye to procrastination.
        </Preview.Content>
      </Preview>
      <Preview>
        <Preview.Video placeholder={'hiking'} media={'timer'}></Preview.Video>
        <Preview.Content background='#A85936'>
          This is a placeholder.
        </Preview.Content>
      </Preview>
    </Carousel>
  )
}

export default ProjectCarousel;