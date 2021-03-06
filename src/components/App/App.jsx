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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likeClick =(event)=> {
    event.preventDefault();
    let like = event.target.id
    console.log('Liking image:', like);

    axios.put(`/gallery/like/${like}`)
        .then((response) => {
          getGallery();
        }).catch((err) => {
          console.log(err);
        })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryList={galleryList}
        likeClick={likeClick}
        />
      </div>
    );
}

export default App;
