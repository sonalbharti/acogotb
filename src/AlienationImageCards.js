import './AlienationImageCards.css'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
// import { useEffect } from 'react';
import { useEffect, useRef, useState } from 'react';

function AlienationImageCards(props) {
  const homePageRef = useRef(null)

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImagesId] = useState([])
  
  const imageOnClick = (imageId) => () => {
    props.handleShow()
    props.setSelectedImage(imageId - 1)
  }

  const imageOnLoad = (imageId) => () => {
    loadedImagesId.push(imageId)

    // Set Loading Spinner Progress
    props.setLoadingSpinnerTotal(props.images.length)
    props.setLoadingSpinnerProgress(loadedImagesId.length)

    // Check if all images are loaded
    if (loadedImagesId.length === props.images.length) {
      setImagesLoaded(true)
    }
  }

  const getImageCardKeyString = (imageId) => {
    return "alienation-image-card-key-".concat(imageId)
  }

  // useEffect(() => {
  //   // alert(props.titleRefsIndex)
  //   if (props.titleRefs !== null && props.titleRefsIndex !== null && props.titleRefs.at(props.titleRefsIndex) != null && props.titleRefs.at(props.titleRefsIndex).current != null) {
  //     props.titleRefs.at(props.titleRefsIndex).current.scrollIntoView()
  //   } else if (props.titleRefsIndex === null) {
  //     props.homePageRef.current.scrollIntoView()
  //   }
  // })

  useEffect(() => {
    props.setCarouselImages(props.images)
    
    if (homePageRef !== null && homePageRef.current != null && props.shouldReset) {
      homePageRef.current.scrollIntoView()
      props.setShouldReset(false)
    }

    // Check if all images are loaded
    if (imagesLoaded) {
      props.setShowLoading(false)
    }
  })

  return (
      <Stack direction="horizontal" gap={3}>
          <Card ref={homePageRef} style={{ minWidth: '25rem', width: '25rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>Alienation</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
In this final set of 4 images, an artificially simulated three-dimensional structure takes over the vernacular architecture of a city.
              </Card.Text>
            </Card.Body>
          </Card>
          {props.images.map(image => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: 'fit-content', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onClick={imageOnClick(image.id)} onLoad={imageOnLoad(image.id)} />
                    <Card.Title className='image-card-title'>{image.title}</Card.Title>
                  </Card>
              )
          })}
          <Card key="padding-card" className='transparent-card' style={{ minWidth: '5rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
      </Card>
    </Stack>
  )
}

export default AlienationImageCards;