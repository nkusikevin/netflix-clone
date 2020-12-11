import React from 'react'
import './App.css';
import Row from './Row'
import requests from './request';
import Banner from "./Banner"
import Nav from './Nav'
function App() {
  return (
    <div className="App">
       <Nav/>
      <Banner/>
<Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
<Row title="TRANDING NOW" fetchUrl={requests.fetchTrending}/>
<Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
<Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
<Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies}/>
<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
<Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
