import './CitiesCards.css'
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
// import { useEffect } from 'react';
import { useEffect, useRef, useState } from 'react';

function CitiesCards(props) {
  const homePageRef = useRef(null)

  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImagesId] = useState([])
  
  const imageOnClick = (imageId) => () => {
    props.handleShow()
    props.setSelectedImage(imageId - 1)
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

  const getImageCardKeyString = (imageId) => {
    return "cities-card-key-".concat(imageId)
  }

  const jaisalmerImages = props.images.filter(image => image.city === "jaisalmer")
  const naggarImages = props.images.filter(image => image.city === "naggar")
  const newDelhiImages = props.images.filter(image => image.city === "new-delhi")
  const bhopalImages = props.images.filter(image => image.city === "bhopal")
  const gangtokImages = props.images.filter(image => image.city === "gangtok")
  const kochiImages = props.images.filter(image => image.city === "kochi")

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

  // const showPagesLinks = [props.showTeleportPage, props.showRockPaperScissorPage, props.showHomePage, props.showAlienationPage]

  return (
      <Stack direction="horizontal" gap={3}>
          <Card ref={homePageRef} style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>Jaisalmer</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
Jaisalmer, popularly named “The Golden city”, is a city in the
Indian state of Rajasthan. The town stands on a
ridge of yellowish sandstone and is crowned by the ancient
Jaisalmer Fort. This fort contains a royal palace and
several ornate Jain temples. Many of the houses and temples
of both the fort and of the town below are built of
finely sculptured yellow sandstone which is abundantly
available in this region and is used as a primary building
material for the construction of all kinds of structures. Like
much of the architecture of the region, Jaisalmer is built in
an amalgamation of local and Mughal styles. The traditional
havelis, large houses with their multiple courtyards and
shaded balconies; the ornate chhatris, literally umbrella shaped
structures or cupolas; the delicate carved screens
which effectively provided shade and increased surface area
for cooling; the orientation and planning of the streets and
drainage system - all served both aesthetic and functional
purpose.<br/>
<br/>
The photographs in this section of the document consist of
buildings that are major tourist attraction as well as of the
residences built across on both sides of the narrow streets of
Jaisalmer city. The photographs document several textures
and peculiarities of the architecture of Jaisalmer. The
photographs were also taken of the interiors of the buildings,
landscape and streetscape of the city.
              </Card.Text>
            </Card.Body>
          </Card>
          {jaisalmerImages.map((image, index) => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(index)} className='transparent-card' style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onClick={imageOnClick(image.id)} onLoad={imageOnLoad(image.id)} />
                    { image.title !== undefined && image.title !== null && image.title !== "" ? <Card.Title className='image-card-title'>{image.title}</Card.Title> : null }
                  </Card>
              )
          })}
          <Card style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>Naggar</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
While traveling in the northern part of the country a visit
to the town of Naggar in Himachal Pradesh was made for
architectural study with respect to the project. Situated on the
left bank of river Beas at an altitude of 1,800 meters, Naggar
is an ancient town in Kullu district of Himachal Pradesh,
India. It was once capital of the Kullu kingdom. Vernacular
architectural practice of Himachal Pradesh called the Kath
kuni is derived from two words 'kashth or kath' for wood in
Sanskrit and 'kona' for corner. With many typical ancient
structures having survived tectonic tremors, the resilience
of the kath kuni structures lie in the flexibility of dry masonry
and alternate layers of wood beams without any cementing
material. The stone plinth rises above the ground level
giving strength to the superstructure and also preventing it
from snow and groundwater. This mountain architecture,
that seems to grow organically from the terrain and blends
in its surroundings seamlessly, does not compromise with
aesthetics either. Topped with pent-and-gable slate shingles
roof, these structures with projecting balconies have intricately
carved wood cresting. The locals carve columns and beams
with elaborate patterns for the decoration. The mix of texture of
stone with wood creates interesting patterns on the walls.
              </Card.Text>
            </Card.Body>
          </Card>
          {naggarImages.map((image, index) => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onClick={imageOnClick(image.id)} onLoad={imageOnLoad(image.id)}/>
                    { image.title !== undefined && image.title !== null && image.title !== "" ? <Card.Title className='image-card-title'>{image.title}</Card.Title> : null }
                  </Card>
              )
          })}
          <Card style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>New Delhi</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
New Delhi is the capital of India and a part of the National Capital Territory of Delhi (NCT). 
The foundation stone of New Delhi was laid by George V during the Delhi Durbar of 1911. It was 
designed by British architects Edwin Lutyens and Herbert Baker. From 1912 to 1931 British architects 
Sir Edwin Landseer Lutyens and Sir Herbert Baker were responsible for the construction of New Delhi 
as Britain's new imperial capital of India. The challenge they faced was to produce an architecture 
that successfully combined local traditions with a statement of colonial power. New Delhi's urban 
plan, with its emphasis on wide, straight roadways radiating like the spokes of a wheel from major 
imperial landmarks, was a direct expression of British control. Delhi neoclassical architecture 
reflects upon the amalgamation of local building traditions with western ideas with usage of 
indo-islamic motifs in modern buildings built of Red or Yellow sandstone. Today, New Delhi is 
the largest commercial city in northern India, thus attracting a large working population, 
witnessing booming infrastructure.
              </Card.Text>
            </Card.Body>
          </Card>
          {newDelhiImages.map((image, index) => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onClick={imageOnClick(image.id)} onLoad={imageOnLoad(image.id)}/>
                    { image.title !== undefined && image.title !== null && image.title !== "" ? <Card.Title className='image-card-title'>{image.title}</Card.Title> : null }
                  </Card>
              )
          })}
          <Card style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>Bhopal</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
Bhopal is the capital city of the Indian State of Madhya
Pradesh and is also known as the 'City of Lakes'. Flourishing
around 1707, the city was the capital of the former Bhopal
State, a princely state of the British ruled by the Nawabs of
Bhopal hence the urbanscape of the city is garnished with
several Heritage buildings and monuments. Bhopal has a
humid subtropical climate, with cool, dry winters, a hot
summer and a humid monsoon season. Bhopal's climate and
history has had impact on the layout of the city and
architecture. The architecture and urban design employed
through the ages in Bhopal, shows deep respect for
nature and sustainable planning practices. From ancient tribal
kingdoms to Hindu kings to Muslim dynasties, the
city has been witness to changing times, destruction and
resurgence, all of which have left their imprint behind in
the form of built heritage.
              </Card.Text>
            </Card.Body>
          </Card>
          {bhopalImages.map((image, index) => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onClick={imageOnClick(image.id)} onLoad={imageOnLoad(image.id)}/>
                    { image.title !== undefined && image.title !== null && image.title !== "" ? <Card.Title className='image-card-title'>{image.title}</Card.Title> : null }
                  </Card>
              )
          })}
          <Card style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>Gangtok</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
Gangtok is a city, the capital and the largest populated
place of the Indian state of Sikkim. Gangtok is in the
eastern Himalayan range, at an elevation of 1,650 with
a population of over 100,000. The people of Gangtok
are from different ethnicities such as Gorkhas, Bhutia
and Lepchas. Within the higher peaks of the Himalayas
and with a year-round mild temperate climate, Gangtok
is at the center of Sikkim's tourism industry. Gangtok
rose to prominence as a popular Buddhist pilgrimage
site after the construction of the Enchey Monastery
in 1840. Gangtok became a major stopover on the
trade route between Lhasa in Tibet and cities such as
Kolkata (then Calcutta) in British India, the reason why
Gangtok became more and more populated over
the years.<br/>
<br/>
Architectural typologies developed in the Sikkim are in
response to climate, and functionality. The materials
used are locally available like bamboo, cane, cane
leaves, mud, and lime. Nowadays, bricks., stone chips,
rock slabs, etc. are also being used. Sloping roofs are
a common architecture element in all the typologies
because of high rainfall in the region. However, the
concept of 'mass housing', which developed with the
patronizing disassociation of architects and planners
from the people and their perception of the majority of
the populace as an unsophisticated 'mass', persists
today6. So much so, that the vernacular architecture
of Sikkim finds it difficult to make a place in the ever
growing urbanization in the city of Gangtok where only
hints of the “vernacular” can be found in the monasteries
built on the ridges within the city and very few settlements
in the vicinity. Many structures have taken a form
inspired from the Buddhist Tibetan architectural style
but with the use of modern building materials such as
concrete instead of more vernacular material resulting
in a hauntingly rapid rate of vanishing away local and
rather traditional way.
              </Card.Text>
            </Card.Body>
          </Card>
          {gangtokImages.map((image, index) => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onClick={imageOnClick(image.id)} onLoad={imageOnLoad(image.id)}/>
                    { image.title !== undefined && image.title !== null && image.title !== "" ? <Card.Title className='image-card-title'>{image.title}</Card.Title> : null }
                  </Card>
              )
          })}
          <Card style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent'}}>
            {/* <Card.Img variant="top" style={{ width: '100%'}} src={image.src} onClick={props.handleShow}/> */}
            <Card.Body>
              <Card.Title className='text-left-align heading-font'><h2>Kochi</h2></Card.Title>
              <Card.Text className='paragraph-small text-left-align'>
Fort Kochi or Fort Cochin in English is a region in the city
of Kochi in Kerala, India. Fort Kochi takes its name from
Fort Manuel of Cochin, the first European fort on Indian soil,
annexed into the Portuguese East Indies. This is part of a
handful of water-bound islands and islets toward the southwest
of mainland Kochi. Fort Kochi owes its grace and old-world
ambience to the old buildings and worshiping centers there.
At different times in its history, three colonial powers had
occupied the area for centuries i.e the Portuguese, the Dutch
and the British. All of them left indelible marks on Fort Kochi’s
geography and culture and made significant contributions
to art and architecture which is interestingly a combination
of the Portuguese, Dutch and the local vernacular styles of
Architecture. It is the old buildings which most clearly reveal
this deep-rooted colonial influence. Though a few are in ruins,
many of them have been converted into restaurants, and
offices or are being used for homestays for tourists. The typical
features of the architecture include the Mangalorean tiled
slanted roofs and long wooden verandas. The facade of the
building is given priority in the design, and most homes have
symmetrical frontage with three divisions with connection and
lavishly ornate arched windows with stucco carvings.
Prominent places visited in Fort Cochin include The Bastion
Bungalow, St. Francis Church (believed to be one of the
oldest European churches in India), the Jew Town, Paradesi
Synagogue (built for the enterprising immigrant Jewish
community, which is believed to have made its way here in
AD 72.), and the Bazaar Road leading up to Mattancherry.
The architecturally rich and well-preserved streets of Fort
Cochin such as the Princess Street, Burgar Street, Bastion
Road etc. were extensively photographed during this visit.
The photographs also include that of the modern high-rise
buildings in the Ernakulam District creating an interesting
overlap of architectural styles in the region.
              </Card.Text>
            </Card.Body>
          </Card>
          {kochiImages.map((image, index) => {
              return(
                  <Card ref={image.ref} key={getImageCardKeyString(image.id)} className='transparent-card' style={{ minWidth: '30rem', width: '30rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', height: '100%'}} src={image.src_web} onClick={imageOnClick(image.id)} onLoad={imageOnLoad(image.id)}/>
                    { image.title !== undefined && image.title !== null && image.title !== "" ? <Card.Title className='image-card-title'>{image.title}</Card.Title> : null }
                  </Card>
              )
          })}
          <Card key="padding-card" className='transparent-card' style={{ minWidth: '5rem', height: '40rem', minHeight: '40rem', border: 'none', backgroundColor: 'transparent' }}>
          </Card>
    </Stack>
  )
}

export default CitiesCards;