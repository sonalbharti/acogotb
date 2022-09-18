import './RockPaperScissorImageCards.css'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
// import { useEffect } from 'react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function RockPaperScissorImageCards(props) {
  const homePageRef = useRef(null)
  const navigate = useNavigate()
  
  const imageOnClick = (imageId) => () => {
    props.handleShow()
    props.setSelectedImage(imageId - 1)
  }

  const getImageCardKeyString = (imageId) => {
    return "rock-paper-scissor-image-card-key-".concat(imageId)
  }

  const nextSeriesLink = "/the-series/home"

  const onNextClick = () => {
    navigate(nextSeriesLink);
    props.setShouldReset(true)
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
  })

  return (
      <Stack direction="horizontal" gap={3}>
          <Card ref={homePageRef} style={{ minWidth: '25rem', width: '25rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>Rock-Paper-Scissors</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
A set of 24 collages made, either, digitally or employing the techniques of paper cutting and scanning, depicting vernacular architecture of different regions while focusing on their peculiar features.
              </Card.Text>
            </Card.Body>
          </Card>
          {props.images.map(image => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: 'fit-content', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onClick={imageOnClick(image.id)}/>
                    <Card.Title className='image-card-title'>{image.title}</Card.Title>
                  </Card>
              )
          })}
          <Card key="home-card" className='transparent-card' style={{ minWidth: '5rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
              <Card.Body>
                <div onClick={onNextClick}><b>&gt;</b>&gt;</div>
              </Card.Body>
          </Card>
    </Stack>
  )
}

export default RockPaperScissorImageCards;