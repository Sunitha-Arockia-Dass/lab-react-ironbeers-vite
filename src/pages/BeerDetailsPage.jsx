import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
      });
  }, []);

  return (
    <div className="single-beer">
      <h1>BEER DETAIL</h1>

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

export default BeerDetailsPage;
