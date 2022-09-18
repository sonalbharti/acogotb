import './AboutCards.css'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { useEffect, useRef } from 'react';

function AboutCards(props) {
  const homePageRef = useRef(null)

  const getImageCardKeyString = (imageId) => {
    return "about-image-card-key-".concat(imageId)
  }

  useEffect(() => {
    if (homePageRef !== null && homePageRef.current != null && props.shouldReset) {
      homePageRef.current.scrollIntoView()
      props.setShouldReset(false)
    }
  })

    return(
        <Stack direction="horizontal" className='justify-content-center' gap={3}>
          <Card ref={homePageRef} style={{ minWidth: '30rem', width: '30rem', height: '30rem', minHeight: '30rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>About</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue pulvinar tortor et rutrum. 
Sed ut dui magna. Sed eu cursus massa, id ornare libero. Nunc id mauris arcu. Nam efficitur ut 
lorem vel rhoncus. Proin elementum metus ac velit tristique aliquet. Morbi pretium auctor magna, 
pharetra sagittis urna congue vel. Duis semper interdum est. Integer quis tellus ut turpis mollis 
consequat. Proin malesuada mattis enim et pretium. Donec efficitur dapibus nibh, ac molestie 
neque scelerisque ac. In id tellus placerat, tincidunt sem a, fringilla lectus. Ut iaculis orci 
sit amet mi varius ornare. Aliquam egestas lacus eu erat gravida lobortis. Ut in nisi vestibulum, 
dapibus purus id, maximus metus. Nunc dapibus metus vitae est volutpat hendrerit.
              </Card.Text>
            </Card.Body>
          </Card>
          {props.images.map(image => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: '30rem', width: '30rem', height: '30rem', minHeight: '30rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img className='circular' variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} />
                    <Card.Title className='image-card-title'>{image.title}</Card.Title>
                  </Card>
              )
          })}
    </Stack>
    )
}

export default AboutCards;