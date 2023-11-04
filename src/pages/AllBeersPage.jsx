import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage({ beers, setBeers }) {
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log(response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div className="all-beers">
      <h1>BEER LIST</h1>
      {beers.map((beer) => {
        return (
          <Link key={beer.id} to={`/beers/${beer._id}`}>
            <div className="all-beers-content">
              <div>
                <img src={beer.image_url} alt="error" />
              </div>
              <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <h4>Created By:{beer.contributed_by}</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
