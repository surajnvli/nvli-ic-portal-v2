import Carousel from 'react-bootstrap/Carousel';

import React from 'react'
class CarouselFadeExample extends React.Component { 

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
  
    fetch('https://indianculture.nvli.in/rest/home-page-slider')
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
    <Carousel fade key={expand} bg="light" expand={expand} >
        {items.map(item => (     
             <Carousel.Item>
             <img  className="d-block w-100" src={`https://indianculture.nvli.in${item.field_background_slider_image}`}  alt={item.title}   width="100px" height="400px"      />
             <Carousel.Caption>
               <h3>{item.title}</h3> 
             </Carousel.Caption>
           </Carousel.Item>
              ))}   
    </Carousel>
   ))}
   </>

 );
     }

}


export default CarouselFadeExample;