import Carousel from 'react-bootstrap/Carousel';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function HomeImagesCarousel(props) {
    
    const getImageCarouselItemKeyString = (imageId) => {
    return "image-carousel-item-key-".concat(imageId)
    }

    return (
        <Carousel activeIndex={props.selectedImage} onSelect={props.handleCarouselImageSelect} className='images-viewer height-100' slide={false} interval={null}>
            {props.images.map(image => {
              return (
                <Carousel.Item key={getImageCarouselItemKeyString(image.id)} className='height-100'>
                  <Container className='w-100 height-100'>
                    <Row className='height-100'>
                      <Col className='height-100'></Col>
                      <Col className='height-100'>
                        <center className='height-100'>
                          { image.caption !== undefined && image.caption !== null && image.caption !== "" ? 
                            
                            <OverlayTrigger key={'right-end'} placement={'right-end'}
                            overlay={
                                <Tooltip className='image-caption-tooltip' id={`image-caption-tooltip-right`}>
                                  {image.caption}
                                </Tooltip>
                              } >
                              <img
                                className="d-block crisp-edges-rendering"
                                src={image.src}
                                alt={image.caption}
                                style={{ height: '100%' }}
                              />
                            </OverlayTrigger>
                            : 
                            <img
                                className="d-block crisp-edges-rendering"
                                src={image.src}
                                alt=""
                                style={{ height: '100%' }}
                              />
                          }
                        </center>
                      </Col>
                      <Col className='height-100'>
                      </Col>
                  </Row>
                  </Container>
                </Carousel.Item>
              )
            })}
        </Carousel>
    )
}

export default HomeImagesCarousel;