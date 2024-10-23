import { useEffect, useState } from "react";
import CartUsers from "../CartUsers/CartUsers";
import "./ListUsers.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/")
      .then((dato) => {
        setUsers(dato.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(users);

  return (
    <div id="users">
      {users.map((user) => (
        <Link to={`/personaje/${user.id}`} key={user.id} className="card-link">
          <div className="card" key={user.id}>
            <CartUsers
              name={user.name}
              image={user.image}
              showDetails={false}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListUser;
