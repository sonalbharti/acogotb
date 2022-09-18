import './SiteNavigationBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';

function SiteNavigationBar(props) {
    const navigate = useNavigate()

    // const showSeriesOnHome = (titleRefIndex, props) => () => {
    //     props.showHomePage()
    //     props.setTitleRefsIndex(null)
    //     props.setTitleRefsIndex(titleRefIndex)
    //     props.setHomePageNeedsUpdate(!props.homePageNeedsUpdate)
    //     // props.goToRef(props.titleRefs[titleRefIndex])()
    // }

    const allLinks = {
        "home": "/",
        "the-series-teleport": "/the-series/teleport",
        "the-series-rock-paper-scissors": "/the-series/rock-paper-scissors",
        "the-series-home": "/the-series/home",
        "the-series-alienation": "/the-series/alienation",
        "the-cities": "/the-cities",
        "about": "/about"
    }

    const linkOnClick = (linkId) => () => {
        props.setShowLoading(true)
        navigate(allLinks[linkId])
        props.setShouldReset(true)
    }

    return (
        <Navbar className='navigation-bar' expand="lg" fixed="top">
            <Container>
                {/* <Navbar.Brand href="#home"><h1>A <i><b>Castle</b></i> of Glass on the Beach</h1></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={linkOnClick("home")}>HOME</Nav.Link>
                    <NavDropdown className='navigation-dropdown' title="THE SERIES" id="basic-nav-dropdown">
                    <NavDropdown.Item className='navigation-dropdown-item' onClick={linkOnClick("the-series-teleport")} >TELEPORT</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' onClick={linkOnClick("the-series-rock-paper-scissors")} >ROCK-PAPER-SCISSORS</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' onClick={linkOnClick("the-series-home")} >HOME</NavDropdown.Item>
                    {/* <NavDropdown.Item className='navigation-dropdown-item' href="#the-series/alienation" onClick={props.showAlienationPage} >ALIENATION</NavDropdown.Item> */}
                    <NavDropdown.Item className='navigation-dropdown-item' onClick={linkOnClick("the-series-alienation")} >ALIENATION</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item> */}
                    </NavDropdown>
                    {/* <NavDropdown className='navigation-dropdown' title="THE CITIES" id="basic-nav-dropdown">
                    <NavDropdown.Item className='navigation-dropdown-item' href="#the-cities/jaisalmer">JAISALMER</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' href="#the-cities/naggar">NAGGAR</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' href="#the-cities/new-delhi">NEW DELHI</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' href="#the-cities/bhopal">BHOPAL</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' href="#the-cities/gangtok">GANGTOK</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' href="#the-cities/kochi">KOCHI</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link onClick={linkOnClick("the-cities")} >THE CITIES</Nav.Link>
                    <Nav.Link onClick={linkOnClick("about")} >ABOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SiteNavigationBar;