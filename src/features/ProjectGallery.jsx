import Preview from '../components/Preview';
import Gallery from '../components/Gallery';

function ProjectGallery() {
  return (
    <Gallery>
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
        <Preview.Video placeholder={'vaccuum'}></Preview.Video>
        <Preview.Content background='#3a3457'>
          Vacumming doesn't have to be a chore. 
        </Preview.Content>
      </Preview>
    </Gallery>
  )
}

export default ProjectGallery;