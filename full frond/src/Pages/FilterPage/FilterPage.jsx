import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartUsers from "../../Components/CartUsers/CartUsers";
import "./FilterPage.css";
import { Link } from "react-router-dom";
import axios from "axios";

const FilterPage = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const species = query.get("species");
  console.log(species);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/")
      .then((data) => {
        console.log(data);
        setUsers(data.data.results);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredUsers = users.filter((user) => {
    if (species) return user.species.toLowerCase() === species.toLowerCase();
    return true;
  });
  console.log("filtro users ", filteredUsers);

  return (
    <div id="users">
      {filteredUsers.map((user) => (
        <Link to={`/personaje/${user.id}`} key={user.id} className="card-link">
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
        </Link>
      ))}
    </div>
  );
};

export default FilterPage;
