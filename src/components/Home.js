import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Card, Button} from 'react-bootstrap'
import { withAuth0 } from "@auth0/auth0-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitArr : [],
    }
  }
  
  componentDidMount () {
    const url = 'http://localhost:4000/getApi'
    axios.get (url) .then (Response => {
      this.setState ({
        fruitArr : Response.data
      })
    }).catch(err =>{
      console.log(err);
    })
  }

  addFav = (index) =>{
    const { user} = this.props.auth0;
    const data = {
      email: user.email,
      name:this.state.fruitArr[index].name,
      image:this.state.fruitArr[index].image,
      price:this.state.fruitArr[index].price,
    }
    axios.post('http://localhost:4000/addFav', data).then ((result) =>{
      console.log(result.status);
    })
  }

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        {this.state.fruitArr && this.state.fruitArr.map ((item, idx)=>{
          return (
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
     {item.price}
    </Card.Text>
    <Button variant="primary" onClick = {()=> this.addFav(idx)}> Add to favorits</Button>
  </Card.Body>
</Card>
          )
        })}

      </>
    )
  }
}

export default withAuth0(Home);
