//BUILD AS A CLASS COMPONENT

// #1: IMPORT
import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Main from './Main';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';

// #2: CREATE CLASS COMPONENT
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      rainbows: '',
      showModal: false,
      beastTitle: '',
      beastImg: '',
      beastDesription: ''
    }
  }


  handleOpenModal = (title, image_url, description) => {
  
    this.setState({
      showModal: true,
      beastTitle: title,
      beastImg: image_url,
      beastDesription: description
  
    })
   }
  
   handleCloseModal = () => {
    this.setState({
      showModal: false
    })
   }

  addRainbows = () => {
    this.setState({
      rainbows: this.state.rainbows + '🌈'
    })
  }

  render(){
    return(
      <>
      <Header rainbows={this.state.rainbows}/>
      <Main data={data} addRainbows={this.addRainbows}  handleOpenModal={this.handleOpenModal}/>
      <SelectedBeast  handleCloseModal={this.handleCloseModal} showModal={this.state.showModal} beastTitle={this.state.beastTitle} beastImg={this.state.beastImg} beastDescription={this.state.beastDesription} beastObj={data}>
      </SelectedBeast>

    
      <Footer/>
      </>
    )
  }
}

// #3: EXPORT THE CLASS
export default App;