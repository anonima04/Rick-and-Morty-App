// import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PropTypes from "prop-types";
import './CartUsers.css'

const CartUsers = (props) => {
  return (
    <Card id="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <ul>
              <li>
                <a>
                  <strong>Estado: </strong>
                  {props.status}
                </a>
              </li>
              <li>
                <a>
                  <strong>Especie: </strong>
                  {props.species}
                </a>
              </li>
              <li>
                <a>
                  <strong>Género: </strong>
                  {props.gender}
                </a>
              </li>
              <li>
                <a>
                  <strong>Origen: </strong>
                  {props.origin}
                </a>
              </li>
              <li>
                <a>
                  <strong>Ubicación: </strong>
                  {props.location}
                </a>
              </li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CartUsers;

CartUsers.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};