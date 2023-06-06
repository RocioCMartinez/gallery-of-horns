import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
    <>
    <h2>Name: {this.props.title}</h2>
    <img src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
    <p>Description: {this.props.description}</p>
    </>
    )
  }
}

export default HornedBeast;