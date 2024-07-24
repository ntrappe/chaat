import Snippet from '../components/Snippet';
import GalleryS from '../components/GalleryS';

function ValuesGallery() {
  return (
    <GalleryS>
      <Snippet>
        <Snippet.Heading>Accessibility</Snippet.Heading>
        <Snippet.Description>
          While subtitles were created for those with hearing impairements, we all appreciate them 
          when we're trapped in a noisy environment trying to binge our favorite show. Accessibility 
          is for everyone, permanent disability or not.
        </Snippet.Description>
        <Snippet.PrimaryAction>See examples</Snippet.PrimaryAction>
      </Snippet>
      <Snippet>
        <Snippet.Heading>Invisibility</Snippet.Heading>
        <Snippet.Description>
          We notice bad design. It's abrasive, glaring, and uncomfortable. Good design, on the other 
          hand, should feel like an extension of ourselves. It should feel seamless, natural, and 
          invisible.
        </Snippet.Description>
        <Snippet.PrimaryAction>Learn more</Snippet.PrimaryAction>
      </Snippet>
    </GalleryS>
  )
}

export default ValuesGallery;