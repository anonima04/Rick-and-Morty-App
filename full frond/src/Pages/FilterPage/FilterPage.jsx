import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartUsers from "../../Components/CartUsers/CartUsers";
import "./FilterPage.css";

const FilterPage = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const species = query.get("species");
  console.log(species);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredUsers = users.filter((user) => {
    if (species) return user.species.toLowerCase() === species.toLowerCase();
    return true;
  });
  console.log('filtro users ', filteredUsers);

  return (
    <div id="users">
      {filteredUsers.map((user) => (
        <div className="card" key={user.id}>
          <CartUsers
            name={user.name}
            status={user.status}
            species={user.species}
            gender={user.gender}
            origin={user.origin.name}
            location={user.location.name}
            image={user.image}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterPage;
