import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

class FavFruitsCards extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
     {this.props.price}
    </Card.Text>
    <Button variant="primary" onClick = {()=> this.props.showupdateModal(this.props.id, this.props.name, this.props.image, this.props.price)}>update</Button>
    <Button variant="primary"  onClick = {()=> this.props.deleteFav(this.props.id)}> delete</Button>

  </Card.Body>
</Card>
            </div>
        );
    }
}

export default FavFruitsCards;