import Snippet from '../components/Snippet';
import GalleryS from '../components/Carousel';

function ValuesGallery() {
  return (
    <GalleryS>
      <Snippet>
        <Snippet.Heading>Human-Centric Design</Snippet.Heading>
        <Snippet.Description>
          Every design decision starts and ends with the user. It’s about what they need, 
          not what we like.
        </Snippet.Description>
        <Snippet.PrimaryAction>See examples</Snippet.PrimaryAction>
      </Snippet>
      <Snippet>
        <Snippet.Heading>User-Driven Testing</Snippet.Heading>
        <Snippet.Description>
          Think like a user, test like a toddler. Anticipate chaos, embrace unpredictability.
        </Snippet.Description>
        <Snippet.PrimaryAction>Learn more</Snippet.PrimaryAction>
      </Snippet>
       <Snippet>
        <Snippet.Heading>Adapative Learning</Snippet.Heading>
        <Snippet.Description>
          Develop systems that learn from user interactions and adapt to improve their experience.
        </Snippet.Description>
        <Snippet.PrimaryAction>Learn more</Snippet.PrimaryAction>
      </Snippet>
      <Snippet>
        <Snippet.Heading>Narrative Design</Snippet.Heading>
        <Snippet.Description>
          Design with a story in mind. Guide users through a narrative that makes their journey 
          intuitive and engaging.
        </Snippet.Description>
        <Snippet.PrimaryAction>Learn more</Snippet.PrimaryAction>
      </Snippet>
      <Snippet>
        <Snippet.Heading>Clear Navigation</Snippet.Heading>
        <Snippet.Description>
          Guide users with clear, intuitive markers to prevent wrong turns.
        </Snippet.Description>
        <Snippet.PrimaryAction>Learn more</Snippet.PrimaryAction>
      </Snippet>
      <Snippet>
        <Snippet.Heading>Cultural Sensitivity</Snippet.Heading>
        <Snippet.Description>
          Respect cultural differences in design elements, ensuring global 
          accessibility and appeal.
        </Snippet.Description>
        <Snippet.PrimaryAction>Learn more</Snippet.PrimaryAction>
      </Snippet>
      <Snippet>
        <Snippet.Heading>Serendipity in Design</Snippet.Heading>
        <Snippet.Description>
          Allow for moments of serendipity where users can discover unexpected features or content.
        </Snippet.Description>
        <Snippet.PrimaryAction>Learn more</Snippet.PrimaryAction>
      </Snippet>
      <Snippet>
        <Snippet.Heading>Consistency Across Ecosystems</Snippet.Heading>
        <Snippet.Description>
          Ensuring a cohesive experience across all devices and platforms, creating a unified 
          ecosystem.
        </Snippet.Description>
        <Snippet.PrimaryAction>Learn more</Snippet.PrimaryAction>
      </Snippet>
    </GalleryS>
  )
}

export default ValuesGallery;