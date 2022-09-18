import './AboutCards.css'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { useEffect, useRef, useState } from 'react';

function AboutCards(props) {
  const homePageRef = useRef(null)

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImagesId] = useState([])

  const getImageCardKeyString = (imageId) => {
    return "about-image-card-key-".concat(imageId)
  }

  const imageOnLoad = (index) => () => {
    loadedImagesId.push(index)

    // Set Loading Spinner Progress
    props.setLoadingSpinnerTotal(props.images.length)
    props.setLoadingSpinnerProgress(loadedImagesId.length)

    // Check if all images are loaded
    if (loadedImagesId.length === props.images.length) {
      setImagesLoaded(true)
    }
  }

  useEffect(() => {
    if (homePageRef !== null && homePageRef.current != null && props.shouldReset) {
      homePageRef.current.scrollIntoView()
      props.setShouldReset(false)
    }

    // Check if all images are loaded
    if (imagesLoaded) {
      props.setShowLoading(false)
    }
  })

    return(
        <Stack direction="horizontal" className='justify-content-center' gap={3}>
          <Card ref={homePageRef} style={{ minWidth: '30rem', width: '30rem', height: '30rem', minHeight: '30rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>About</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
Hello! I am Sonal Bharti. I am currently a postgraduate student of Photography Design (M.Des) at National Institute of Design, 
Gandhinagar. I have done my undergraduate in architecture from National Institute of Technology, Bhopal. I have been passionate 
about photography ever since I was a kid and picked up my father’s camera. My photographs are a reflection of my physical 
environment and mental state. They are based on the themes of identity, belongingness, effinity, sustainability and  memories. 
I aspire to maintain a simple and minimalistic approach with all my work - be it in motion pictures, animations or photographs.<br/>
<br/>
I love to travel!  I have lived in several cities of India such as Mumbai, Delhi, Bhopal, Hyderabad etc. I find inspiration 
for my photographs  in traveling and from all the experiences that I attain thereafter. This work too came about as a result 
of experiences and observations from my travels and stays in different environments. This body of work was sponsored by NID 
Ford Foundation Grant, without which this project would not have been possible. 
              </Card.Text>
            </Card.Body>
          </Card>
          {props.images.map(image => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: '30rem', width: '30rem', height: '30rem', minHeight: '30rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img className='circular' variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onLoad={imageOnLoad(image.id)} />
                    <Card.Title className='image-card-title'>{image.title}</Card.Title>
                  </Card>
              )
          })}
    </Stack>
    )
}

export default AboutCards;