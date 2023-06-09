import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      likes: 0
    }
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

 displayBeast = () => {
  this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)
 }

  render(){
    return(
    <article>
    <Card style={{ width: '18rem' }} >
      <Card.Body>
       <Card.Title onClick={this.handleLike}>Name: {this.props.title}</Card.Title>
       <Card.Text> 🦄 {this.state.likes} Favorites </Card.Text>
       <Card.Text>Pick your favorite beast by clicking its name! Click the image description that makes you happy to get celebration rainbows!</Card.Text>
       <Card.Img 
         onClick={this.displayBeast}
         src={this.props.image_url} 
         alt={this.props.description} 
         title={this.props.title}/>
       <Card.Text onClick={this.props.addRainbows}>Description: {this.props.description}</Card.Text>
      </Card.Body>
    </Card>
    </article>
    )
  }
}

export default HornedBeast;