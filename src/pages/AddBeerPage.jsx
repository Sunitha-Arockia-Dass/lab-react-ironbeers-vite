import axios from "axios";

function AddBeerPage() {
  function addBeer(e) {
    e.preventDefault();
    const newBeer = {
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      first_brewed: e.target.first_brewed.value,
      brewers_tips: e.target.brewers_tips.value,
      attenuation_level: e.target.attenuation_level.value,
      contributed_by: e.target.contributed_by.value,
    };
    console.log(newBeer);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div className="add-beer">
      <form onSubmit={addBeer}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name" id="name" required />
        <br />

        <label htmlFor="tagline">Tagline:</label>
        <br />
        <input type="text" name="tagline" id="tagline" required />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <textarea name="description" id="description" required></textarea>
        <br />

        <label htmlFor="first_brewed">First Brewed:</label>
        <br />
        <input type="text" name="first_brewed" id="first_brewed" required />
        <br />

        <label htmlFor="brewers_tips">Brewers Tips:</label>
        <br />
        <input type="text" name="brewers_tips" id="brewers_tips" required />
        <br />

        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <br />
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          required
        />
        <br />

        <label htmlFor="contributed_by">Contributed By:</label>
        <br />
        <input type="text" name="contributed_by" id="contributed_by" required />
        <br />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
