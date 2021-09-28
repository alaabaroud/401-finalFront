import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import FavFruitsCards from './FavFruitsCards';
import UpdateModal from "./UpdateModal";
class FavFruit extends React.Component {

  constructor(props) {
    super(props);
  this.state = {
    favArray: [],
    showModal : false
  }
  }

  componentDidMount () {
    const {user} = this.props.auth0;
    const url = `http://localhost:4000/getFav?email=${user.email}`
    axios.get(url) .then(result => {
      this.setState({
        favArray: result.data
      })
    }).catch();
  }
  

  showupdateModal = (id, name, image, price) =>{
this.setState ({
  update: {
    id:id,
    name: name,
    image:image,
    price:price,
  },
  showModal: true
})
  
}

hideModal = ()=> {
  this.setState({
    showModal:false
  })
}

updateFav = (event) =>{
  event.preventDefault();
  const {user} = this.props.auth0;
  const updateData = {
    email: user.email,
    name: event.target.name.value,
    image: event.target.image.value,
    price: event.target.proce.value,
  }
  axios.put(`http://localhost:4000/updateFav/${this.state.update.id}`, updateData)
  .then ((result)=>{
    this.setState({
      favArray : result.data,
    })
  })
}

deleteFav = (id) =>{
  const {user} = this.props.auth0;
axios.delete(`http://localhost:4000/deleteFav/${id}?email=${user.email}`)
.then((result)=>{
  this.setState({
    favArray: result.data
  })
}).catch ((err) =>{
  this.setState({
    err:err
  })
})
}
  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
{this.state.favArray && this.state.favArray.map((item,idx)=>{
  return(
    <FavFruitsCards 
    id = {item.id}
    name= {item.name}
    image = {item.image} 
    price= {item.price}
    showupdateModal = {this.showupdateModal}
    deleteFav ={this.deleteFav}
    /> 
  )
})}
<>
{this.state.update && (
  <UpdateModal
  show= {this.state.showupdateModal}
  hideUpdate= {this.hideModal}
  update= {this.state.update}
  updateFav = {this.updateFav} />
)}
</>
      </>
    )
  }
}

export default withAuth0(FavFruit);
