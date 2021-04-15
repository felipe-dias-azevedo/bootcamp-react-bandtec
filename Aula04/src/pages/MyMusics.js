import React from 'react';
import MusicCard from '../components/MusicCard';
import NavBar from '../components/NavBar';

function MyMusics() {
  return (
    <>
      <NavBar />
      <div className="container">  
          <div className="filter">    
              <button className="btn-green right">Adicionar</button>
          </div>            
      </div>
      <div className="container">
          <div className="music-boxes">
              <MusicCard
                name="Fake Plastic Trees"
                genre="Rock"
                year="1995"
              />
              <MusicCard
                name="Creep"
                genre="Rock"
                year="1993"
              />
          </div>
      </div>
    </>
  );
}

export default MyMusics;