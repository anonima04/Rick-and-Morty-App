import { useState, useEffect } from "react";
import "./PersonajePage.css";
import { useParams } from 'react-router-dom';
import CartUsers from "../../Components/CartUsers/CartUsers";
import axios from "axios"

const PersonajePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div id="body">
        <div id="character-div">
          {(
            <CartUsers
              name={user.name}
              status={user.status}
              species={user.species}
              gender={user.gender}
              origin={user.origin.name}
              location={user.location.name}
              image={user.image}
              showDetails={true}
            />
          )}
        </div>
      </div>
  );
};

export default PersonajePage;
