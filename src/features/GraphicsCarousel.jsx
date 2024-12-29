import MarqueeRow from '../components/MarqueeRow.jsx';
import Stage from '../components/Stage.jsx';

function GraphicsCarousel() {
  return (
    <Stage gap='narrow'>
      <Stage.Row>
        <MarqueeRow>
          <MarqueeRow.Item visual={'placeholder.png'} border={true}>1</MarqueeRow.Item>
          <MarqueeRow.Item visual={'visual-previews/brain.png'} border={true}>2</MarqueeRow.Item>
          <MarqueeRow.Item visual={'visual-previews/singh.png'} border={true}>3</MarqueeRow.Item>
          {/* <MarqueeRow.Item visual={'visual-previews/singh.png'} border={true}>3</MarqueeRow.Item>
          <MarqueeRow.Item visual={'visual-previews/grouper.png'} border={true}>5</MarqueeRow.Item>
          <MarqueeRow.Item visual={'placeholder.png'} border={true}>1</MarqueeRow.Item>
          <MarqueeRow.Item visual={'visual-previews/ahsoka.png'} border={true}>3</MarqueeRow.Item>
          <MarqueeRow.Item visual={'visual-previews/brain.png'} border={true}>2</MarqueeRow.Item>
          <MarqueeRow.Item visual={'visual-previews/singh.png'} border={true}>3</MarqueeRow.Item>
          <MarqueeRow.Item visual={'visual-previews/singh.png'} border={true}>3</MarqueeRow.Item>
          <MarqueeRow.Item visual={'visual-previews/grouper.png'} border={true}>5</MarqueeRow.Item>
          <MarqueeRow.Item visual={'placeholder.png'} border={true}>1</MarqueeRow.Item> */}
        </MarqueeRow> 
      </Stage.Row>
      {/* <MarqueeRow slider>
        <MarqueeRow.Item visual={'placeholder.png'} border>1</MarqueeRow.Item>
        <MarqueeRow.Item visual={'visual-previews/brain.png'} border>2</MarqueeRow.Item>
      </MarqueeRow> */}
      {/* <MarqueeRow>
        <MarqueeRow.Item visual={'visual-previews/crumbl.png'} border>4</MarqueeRow.Item>
        <MarqueeRow.Item visual={'visual-previews/grouper.png'} border>5</MarqueeRow.Item>
        <MarqueeRow.Item visual={'visual-previews/singh.png'} border>6</MarqueeRow.Item>
      </MarqueeRow> */}

      {/* <Marquee border='yes'>
        <Marquee.Visual visual={'visual-previews/grouper.png'}></Marquee.Visual>
      </Marquee>
      <Marquee border='yes'>
        <Marquee.Visual visual={'visual-previews/brain.png'}></Marquee.Visual>
      </Marquee>
      <Marquee border='yes'>
        <Marquee.Visual visual={'visual-previews/ahsoka.png'}></Marquee.Visual>
      </Marquee>
      <Marquee border='no'>
        <Marquee.Visual visual={'visual-previews/singh.png'}></Marquee.Visual>
      </Marquee>
      <Marquee border='no'>
        <Marquee.Visual visual={'visual-previews/crumbl.png'}></Marquee.Visual>
      </Marquee> */}
    </Stage>
  )
}

export default GraphicsCarousel;