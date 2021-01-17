import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

function App() {

  const [galleryList, setGalleryList] = useState([])





  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setGalleryList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };




    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryList={galleryList}
        
        />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
