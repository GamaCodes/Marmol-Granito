import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
  text: {
    padding: "1rem",
  },
  contain: {
    padding: "2rem",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="card-body" id="contacto">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Servicio al cliente"
          />
          <CardContent className={classes.contain}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Contáctanos
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="justify"
              className={classes.text}
            >
              Buscando un continuo crecimiento, leemos tus comentarios y
              sugerencias
            </Typography>
            <Typography variant="body2" color="textPrimary" align="center">
              obras@constructoramarmolygranito.com
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
