import { useState, useEffect } from "react";
import axios from "axios";
// import {useParams} from "react-router-dom"

function RandomBeersPage() {
  const [beer, setBeer] = useState([]);
  // const {beerId}=useParams()
  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((response) => {
      const randomIndex = Math.floor(Math.random() * response.data.length);
      console.log(response.data);
      setBeer(response.data[randomIndex]);
    });
  }, []);

  return (
    <div className="single-beer">
      <h1>RANDOM BEER</h1>
      <div>
        <img src={beer.image_url} alt="error" />
      </div>
      <div>
        <div className="name-level">
          <h2>{beer.name}</h2>
          <p>{beer.attenuation_level}</p>
        </div>
        <div className="name-level">
          <h3 className="light">{beer.tagline}</h3>
          <h2>{beer.first_brewed}</h2>
        </div>
        <p className="description">{beer.description}</p>
        <h2 className="light">Created By:{beer.contributed_by}</h2>
      </div>
    </div>
  );
}

export default RandomBeersPage;
