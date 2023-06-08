import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';



class Main extends React.Component{
  render(){
    return(
    <main>
      
      {this.props.data.map(beastObj => {
        return <HornedBeast title={beastObj.title} image_url={beastObj.image_url} description={beastObj.description} addRainbows={this.props.addRainbows} handleOpenModal={this.props.handleOpenModal}/>
      })}

     

   
    </main>
    )
  }
}

export default Main;