import React from 'react';
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import {Provider} from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
