import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';



const Home=()=>{
  const [mydata,setMydata]=useState([])
  const ans=mydata.map((key)=>{
    return(
      <>
      <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Add to cart</Button>
</Card.Body>
</Card>
      
      </>
    )
  })
    return(
        <>
       
        <Carousel>
      <Carousel.Item>
      <a href='#'><img src="images/f1.jpg" height="850px" width="1500px"/></a>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='#'><img src="images/f2.jpg" height="650px" width="1500px"/></a>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='#'><img src="images/f3.jpg" height="850px" width="1500px"/></a>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1>Delicious items</h1>
    <div>
      {ans}
    </div>
        </>
    )
}
export default Home;