import './SiteNavigationBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
// import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';
import homeIcon from './home-icon.png'

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
                <Navbar.Brand className="navbar-home-icon" onClick={linkOnClick("home")} ><Image className="home-icon" src={homeIcon} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="me-auto w-100 right-padding">
                    {/* <Nav.Link onClick={linkOnClick("home")}><Image className="home-icon" src={homeIcon} /></Nav.Link> */}
                    <Nav.Link onClick={linkOnClick("the-series-teleport")}>teleport</Nav.Link>
                    <Nav.Link onClick={linkOnClick("the-series-rock-paper-scissors")}>rock-paper-scissors</Nav.Link>
                    <Nav.Link onClick={linkOnClick("the-series-home")}>home</Nav.Link>
                    <Nav.Link onClick={linkOnClick("the-series-alienation")}>alienation</Nav.Link>
                    {/* <NavDropdown className='navigation-dropdown' title="THE SERIES" id="basic-nav-dropdown">
                    <NavDropdown.Item className='navigation-dropdown-item' onClick={linkOnClick("the-series-teleport")} >TELEPORT</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' onClick={linkOnClick("the-series-rock-paper-scissors")} >ROCK-PAPER-SCISSORS</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' onClick={linkOnClick("the-series-home")} >HOME</NavDropdown.Item>
                    <NavDropdown.Item className='navigation-dropdown-item' onClick={linkOnClick("the-series-alienation")} >ALIENATION</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link className="push-right" onClick={linkOnClick("the-cities")} ><b>THE CITIES</b></Nav.Link>
                    <Nav.Link onClick={linkOnClick("about")} >ABOUT</Nav.Link>
                </Nav>
                {/* </Navbar.Collapse> */}
        </Navbar>
    )
}

export default SiteNavigationBar;