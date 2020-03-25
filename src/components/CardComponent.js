import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup,ListGroupItem,Card,Button,Dropdown,Form } from 'react-bootstrap';


class CardComponent extends React.Component {
    constructor(props){
        super(props)
       
        this.handleClick=this.handleClick.bind(this)
        this.handleValue=this.handleValue.bind(this)
      }
    handleClick(e){
        console.log(e.target.className)
        console.log(e.target.name)
    }  
    handleValue(e){
        console.log(e.target.value)
        
    }  
  
    render() {
    return (
    <div>


<Card style={{ width: '40rem' }}>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<br></br>  <br></br>  <br></br>  

<Card style={{ width: '40rem' }}>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<br></br><br></br>
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<br></br>

<Card className="m-2 border border-primary font-weight-bold">
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>

<br></br>
{/* ------------------------------------extra----------------------------------------- */}
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu onClick={this.handleClick}>
    <Dropdown.Item name="name1" href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Form>
  <Form.Group controlId="formBasicRange">
    <Form.Label>Range</Form.Label>
    <Form.Control onChange={this.handleValue} type="range" />
  </Form.Group>
</Form>





    </div>
    
    ) 
  }
}

export default CardComponent