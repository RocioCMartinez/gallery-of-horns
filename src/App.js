//BUILD AS A CLASS COMPONENT

// #1: IMPORT
import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Main from './Main';
import data from './data/data.json';

// #2: CREATE CLASS COMPONENT
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      rainbows: ''
    }
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
      <Main data={data} addRainbows={this.addRainbows} />
      <Footer/>
      </>
    )
  }
}

// #3: EXPORT THE CLASS
export default App;