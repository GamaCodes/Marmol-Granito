import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import HowToRegIcon from "@material-ui/icons/HowToReg";

const useStyles = makeStyles({
  text: {
    padding: "1rem",
  },
  capital: {
    color: "#8AAADD",
    fontSize: "2rem",
    lineHeight: "1.5rem",
  },
  value: {
    paddingBottom: "1rem",
  },
  center: {
    textAlign: "center",
  },
});

export default function Index() {
  const classes = useStyles();

  return (
    <div className="about-contain">
      <section className="about-whor">
        <div>
          <img
            src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Quienes somos"
            className="about-whor-img"
          />
        </div>
        <div>
          <CardContent className={classes.contain}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              ¿Quiénes somos?
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>E</span>mpresa mexicana
              desarrolladora y promotora de construcción en general y negocios
              inmobiliarios enfocada en el desarrollo de proyectos en sectores
              urbanos y rústicos, y en nichos de mercado con alto poder
              adquisitivo tanto en México, como en Estados Unidos.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>N</span>uestro accionar
              privilegia la calidad, la seguridad y la preservación del medio
              ambiente, en armonía con las comunidades donde se realizan
              nuestras actividades; desarrollando con nuestros colaboradores las
              mejores prácticas de trabajo y ampliando nuestros conocimientos en
              un grato ambiente laboral y logrando una rentabilidad adecuada
              para nuestros accionistas.
            </Typography>
          </CardContent>
        </div>
      </section>

      <Card className="about-box">
        <CardActionArea>
          <CardMedia
            className="about-media"
            image="https://images.pexels.com/photos/544971/pexels-photo-544971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Quienes somos"
          />
          <CardContent className={classes.contain}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Misión
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>N</span>os hemos comprometido a
              proporcionar soluciones integrales en la construcción de vivienda
              y obras civiles, ajustadas siempre a las más avanzadas tecnologías
              y normas de calidad, que permitan satisfacer ampliamente las
              necesidades y expectativas de nuestros clientes a un precio justo
              y excelente servicio.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>G</span>racias a nuestro equipo
              de colaboradores, apoyándonos en una administración ágil y
              confiable, y con un abanico de productos y servicios de
              construcción acorde con las necesidades del mercado, mantendremos
              nuestro liderazgo y nuestra contribución al desarrollo económico y
              social con un alto nivel de rentabilidad y productividad que
              permita la retribución adecuada de nuestros clientes internos y
              externos, así como de la sociedad en general.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>C</span>ontribuimos al
              desarrollo de nuestros empleados, al respecto del medioambiente y
              la seguridad y salud en el trabajo.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="about-box">
        <CardActionArea>
          <CardMedia
            className="about-media"
            image="https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Quienes somos"
          />
          <CardContent className={classes.contain}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Visión
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>P</span>osicionarnos como una
              empresa constructora líder en el desarrollo de proyectos de
              reconocimiento nacional e internacional, caracterizándonos por
              nuestro “sello constructivo” de gran calidad y por la confianza y
              garantía que otorgamos a nuestros clientes.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="about-box">
        <CardActionArea>
          <CardContent className={classes.contain}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Valores
            </Typography>
            <Typography gutterBottom variant="h6" component="h2" align="center">
              Íntegros
            </Typography>
            <div className={classes.center}>
              <HowToRegIcon style={{ fontSize: 40, color: "#7A8BA0" }} />
            </div>
            <Typography
              variant="body2"
              color="textPrimary"
              align="center"
              className={classes.value}
            >
              <span className={classes.capital}>L</span>a transparencia y
              honestidad rigen todas nuestras relaciones.
            </Typography>
            <Typography gutterBottom variant="h6" component="h2" align="center">
              Serviciales
            </Typography>
            <div className={classes.center}>
              <PeopleAltIcon style={{ fontSize: 40, color: "#7A8BA0" }} />
            </div>
            <Typography
              variant="body2"
              color="textPrimary"
              align="center"
              className={classes.value}
            >
              <span className={classes.capital}>C</span>omprometidos con la
              satisfacción a largo plazo de nuestros clientes.
            </Typography>
            <Typography gutterBottom variant="h6" component="h2" align="center">
              Innovadores
            </Typography>
            <div className={classes.center}>
              <EmojiObjectsIcon style={{ fontSize: 40, color: "#7A8BA0" }} />
            </div>
            <Typography
              variant="body2"
              color="textPrimary"
              align="center"
              className={classes.value}
            >
              <span className={classes.capital}>E</span>nfocados en la calidad y
              mejora continua de los espacios que creamos.
            </Typography>
            <Typography gutterBottom variant="h6" component="h2" align="center">
              Respetuosos
            </Typography>
            <div className={classes.center}>
              <AccessibilityNewIcon
                style={{ fontSize: 40, color: "#7A8BA0" }}
              />
            </div>
            <Typography
              variant="body2"
              color="textPrimary"
              align="center"
              className={classes.value}
            >
              <span className={classes.capital}>V</span>aloramos a las personas,
              las comunidades y el medio ambiente.
            </Typography>
            <Typography gutterBottom variant="h6" component="h2" align="center">
              Seguridad y salud
            </Typography>
            <div className={classes.center}>
              <VerifiedUserIcon style={{ fontSize: 40, color: "#7A8BA0" }} />
            </div>
            <Typography
              variant="body2"
              color="textPrimary"
              align="center"
              className={classes.value}
            >
              <span className={classes.capital}>P</span>romovemos una cultura
              preventiva para la mejora de las condiciones de seguridad
              implicando a todo el personal.
            </Typography>
            <Typography gutterBottom variant="h6" component="h2" align="center">
              Comunidad y Medio Ambiente:
            </Typography>
            <div className={classes.center}>
              <NaturePeopleIcon style={{ fontSize: 40, color: "#7A8BA0" }} />
            </div>
            <Typography
              variant="body2"
              color="textPrimary"
              align="center"
              className={classes.value}
            >
              <span className={classes.capital}>P</span>racticamos una actitud
              sostenible y comprometida con nuestro entorno, con el
              medioambiente y la Sociedad.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="about-box">
        <CardActionArea>
          <CardContent className={classes.contain}>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>N</span>os hemos caracterizado
              por la realización de obras emblemáticas de la nueva arquitectura
              mexicana, lo mismo en desarrollos residenciales, unifamiliares y
              rústicos, que en espacios corporativos y comerciales a gran
              escala.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>S</span>omos responsable de
              varias edificaciones de gran importancia en el país. Como
              constructora de viviendas, financiamiento de toda clase de obras
              públicas y privadas, así como la promoción, administración y
              participación en negocios inmobiliarios, comerciales e
              industriales.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>C</span>on el desarrollo
              progresivo del ramo de la construcción, las constructoras
              inmobiliarias en México tienen, pues, un papel importante y es muy
              conveniente a cualquier interesado en la economía del país o el
              sector inmobiliario saber cuáles son las de mayor relevancia.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>T</span>ambién construcción de
              todo tipo de obra pública federal, estatal o municipal, como
              carreteras, caminos, puentes, drenajes, escuelas, clínicas,
              hospitales, mantenimiento de inmuebles públicos; así como la
              subcontratación, por cuenta propia o de terceros, de toda clase de
              construcciones, edificaciones y urbanizaciones en zonas urbanas,
              semiurbanas y rurales.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
