import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
    <>
    <h2>Name: {this.props.title}</h2>
    <image src={this.props.image_url} alt="#" title="image of beast"/>
    <p>Description: {this.props.description}</p>
    </>
    )
  }
}

export default HornedBeast;