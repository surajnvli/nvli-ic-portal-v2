import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../ic-short-ogo_1_0_0_1.png' 

class OffcanvasExample extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

      super(props);

      this.state = {
          items: [],
          isLoaded: false
      }

  }



componentDidMount() {

  fetch('https://indianculture.gov.in/rest/all-categories')
      .then(res => res.json())
      
      .then(json => {
          console.log('response',json);
          this.setState({
              items: json,
              isLoaded: true, 
          })
      }).catch((err) => {
          console.log(err);
      });

}

render() {

  const { isLoaded, items } = this.state;

  if (!isLoaded)
      return <div>Loading...</div>;
 

return (


  <>
    
    {[false].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="mb-3"> 
          <Container fluid>
            <Navbar.Brand href="#"><Link to='/'>
                <img src={logo} alt='IC portal' width="100" height="50"/>
      </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo} alt='IC portal' width="100" height="50"/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <li>
            <Link to='/about'>Home</Link>
          </li>
          <li>
            <Link to='/archive'>archive</Link>
          </li>
                {items.map(item => ( 
             <Nav.Link key={item.title} href={item.title}>{item.title}</Nav.Link>     
           
              ))}            
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
     ))}
     </>
 
   );
       }
 
 }
 
 
 export default OffcanvasExample;