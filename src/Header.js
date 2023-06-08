import React from 'react';

class Header extends React.Component{
  render(){
    return(
    <>
     <h1>Gallery of Horned Beasts {this.props.rainbows}</h1>
    </>
    )
  }
}

export default Header;