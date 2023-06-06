//BUILD AS A CLASS COMPONENT

// #1: IMPORT
import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Main from './Main';

// #2: CREATE CLASS COMPONENT
class App extends React.Component{
  render(){
    return(
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}

// #3: EXPORT THE CLASS
export default App;