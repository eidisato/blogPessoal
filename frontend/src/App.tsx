import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import {Grid} from "@material-ui/core";

function App() {
  return(
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
);
}
export default App;