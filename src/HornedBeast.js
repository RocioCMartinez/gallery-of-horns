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

  render(){
    return(
    <article>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Name: {this.props.title}</Card.Title>
    <Card.Text> 🦄 {this.state.likes} Favorites </Card.Text>
    <Card.Text>Pick your favorite beast by clicking its image!</Card.Text>
    <Card.Img onClick={this.handleLike} src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
    <Card.Text>Description: {this.props.description}</Card.Text>
    </Card.Body>
    </Card>
    </article>
    )
  }
}

export default HornedBeast;