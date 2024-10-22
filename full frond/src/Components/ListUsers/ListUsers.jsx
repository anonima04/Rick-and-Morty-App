import { useEffect, useState } from "react";
import CartUsers from "../CartUsers/CartUsers";
import "./ListUsers.css";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((dato) => {
        setUsers(dato.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(users);

  
  return (
    <div id='users'>
      {users.map((user) => (
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

export default ListUser;
