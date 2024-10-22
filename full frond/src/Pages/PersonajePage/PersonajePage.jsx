import { useState } from "react";
import Button from "@mui/material/Button";
import "./PersonajePage.css";
import CartUsers from "../../Components/CartUsers/CartUsers";

const fetchCharacterById = (id, setCharacter) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCharacter(data);
    })
    .catch((error) => console.error("Error fetching data: ", error));
};

const Personaje = () => {
  const [id, setId] = useState("");
  const [character, setCharacter] = useState(null);

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  const handleSearch = () => {
    fetchCharacterById(id, setCharacter);
  };

  return (
    <div id="body">
      <div className="titulos">
        <h1 id="h1">Busca por Id</h1>
        <h2 id="h2">Del 1 al 826</h2>
      </div>
      <div id="personaje-div">
        <div id="input-div">
          <label>Ingresa el Id:</label>
          <input
            type="number"
            id="numero"
            min="1"
            max="826"
            value={id}
            onChange={handleInputChange}
          />
          <Button
            id="buscar-button"
            onClick={handleSearch}
            sx={{ margin: 3, width: 130 }}
            variant="outlined"
          >
            Buscar
          </Button>
        </div>
        <div id="character-div">
          {character && (
            <CartUsers
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              location={character.location.name}
              image={character.image}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Personaje;
