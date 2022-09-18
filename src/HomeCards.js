import './HomeCards.css'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
// import { useEffect } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeCards(props) {
  const homePageRef = useRef(null)
  const navigate = useNavigate()

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImagesId] = useState([])
  
  // const imageOnClick = (imageId) => () => {
  //   props.handleShow()
  //   props.setSelectedImage(imageId - 1)
  // }

  const imageOnClick = (index) => () => {
    props.setShowLoading(true)
    navigate(showPagesLinks[index])
    props.setShouldReset(true)
  }

  const imageOnLoad = (index) => () => {
    loadedImagesId.push(index)

    // Set Loading Spinner Progress
    props.setLoadingSpinnerTotal(props.homePageImages.length)
    props.setLoadingSpinnerProgress(loadedImagesId.length)

    // Check if all images are loaded
    if (loadedImagesId.length === props.homePageImages.length) {
      setImagesLoaded(true)
    }
  }

  const getImageCardKeyString = (imageId) => {
    return "home-page-card-key-".concat(imageId)
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
    // alert(props.currentState)
    if (homePageRef !== null && homePageRef.current != null && props.shouldReset) {
      homePageRef.current.scrollIntoView()
      props.setShouldReset(false)
    }

    // Check if all images are loaded
    if (imagesLoaded) {
      props.setShowLoading(false)
    }
  })

  const showPagesLinks = ["/the-series/teleport", "/the-series/rock-paper-scissors", "/the-series/home", "/the-series/alienation"]

  return (
      <Stack ref={props.nodeRef} className="card-stack-full-screen" direction="horizontal" gap={3}>
          <Card ref={homePageRef} style={{ minWidth: '40rem', width: '40rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h1>A Castle of <b>Glass</b> on the <b>Beach</b></h1></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
What is Architecture? Architecture is an art, a science and a practice of designing and constructing buildings, and it is
everywhere! Architecture is built for several different purposes such as homes, offices, schools, temples, shopping malls,
bridges, art galleries or museums. It emerges as a result of certain factors which include the climate, geography, resources,
culture, economy and most importantly 'need'. These factors also give birth to a certain vernacularism in the kind of built
environment, which differs with variable geographies. This vernacularism also shapes the identity of a region.<br/>
<br/>
Today, the world is growing at a rate faster than ever. Countries over the world are competing amongst themselves on the scales
of development. And this competition is taking place at the cost of depletion of resources, environment and identity. Architecture
today is driven not by human needs but by capitalist forces hoping to make endless amounts of money. And as a result
Vernacular architecture is losing its ground to cheap building practices in our modern cities, making them look homogenous.
Vernacular architecture is innately a result of the humanistic desire to be culturally grounded in one’s surroundings, one which is
pluralistic, multi-faceted and fluid like the societies of the world.<br/>
<br/>
This work intends to throw light on the vernacular architecture in terms of not just sustainability but also identity. It also brings
forth the reasons why it is critical now, more than ever, to remember the roots of the developmental tree to progress in synergy
with the environment and not against it.<br/>
              </Card.Text>
            </Card.Body>
          </Card>
          {props.homePageImages.map((homePageImage, index) => {
              return(
                  <Card ref={homePageImage.imageDetails.ref} key={getImageCardKeyString(index)} className='transparent-card' style={{ minWidth: 'fit-content', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={homePageImage.imageDetails.src_web} onClick={imageOnClick(index)} onLoad={imageOnLoad(index)} />
                    <Card.Title className='image-card-title'>{homePageImage.title}</Card.Title>
                  </Card>
              )
          })}
    </Stack>
  )
}

export default HomeCards;