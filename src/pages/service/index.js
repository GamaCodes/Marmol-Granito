import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
      <Card className="about-box">
        <CardActionArea>
          <CardMedia
            className="about-media"
            image="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Servicios"
          />
          <CardContent className={classes.contain}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Servicios
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className="about-box">
        <CardActionArea>
          <CardMedia
            className="about-media"
            image="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="sercivios"
          />
          <CardContent className={classes.contain}>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>C</span>ompra, venta,
              urbanización y lotificación de todo tipo de terrenos, inclusive
              bajo régimen de condominio, ya sea vertical y horizontal.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>L</span>a conservación y
              mantenimiento de toda clase de bienes inmuebles públicos y
              privados.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>S</span>upervisión de todo tipo
              de obra civil.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>S</span>ubcontratación para la
              ejecución de todo tipo de construcciones.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>P</span>roducción, fabricación,
              distribución, compra, venta, de todo tipo de materiales para la
              industria de la construcción, tales como tabique, cemento, grava,
              arena, cal, varilla, alambrón, alambre recocido, aceros, pisos,
              etc.
            </Typography>
            <div className="serviceSvg">
              <svg
                width="85"
                height="57"
                viewBox="0 0 85 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.3049 26.5921V36.1614H77.3252L84.3049 26.5921Z"
                  fill="#FF9500"
                />
                <path
                  d="M84.3049 12.6469V26.5921L77.3252 36.1614H67.1139L84.3049 12.6469Z"
                  fill="#EAEAEA"
                />
                <path
                  d="M84.3049 10.3868V12.6469L67.1139 36.1614H52.9528L71.7582 10.3868H73.4031H78.622H84.3049"
                  fill="#FF9500"
                />
                <path
                  d="M80.8731 55.1316V56.0933H70.9797V55.1316H73.4031H78.6219H80.8731Z"
                  fill="#5A5A5A"
                />
                <path
                  d="M78.6219 36.1613V55.1316H73.403V36.1613H77.3251H78.6219Z"
                  fill="#5A5A5A"
                />
                <path
                  d="M78.6219 2.188V10.3868H73.403V2.188C73.403 0.985827 74.585 2.16332e-05 76.0272 2.16332e-05C77.4693 2.16332e-05 78.6219 0.985827 78.6219 2.188Z"
                  fill="#5A5A5A"
                />
                <path
                  d="M71.7582 10.3868L52.9528 36.1614H42.7415L61.5763 10.3868H71.7582Z"
                  fill="#EAEAEA"
                />
                <path
                  d="M61.5763 10.3868L42.7415 36.1614H28.5804L47.387 10.3868H61.5763Z"
                  fill="#FF9500"
                />
                <path
                  d="M47.387 10.3868L28.5805 36.1614H18.3704L37.204 10.3868H47.387"
                  fill="#EAEAEA"
                />
                <path
                  d="M37.2038 10.3868L18.3702 36.1614H4.20795L23.0133 10.3868H37.2038"
                  fill="#FF9500"
                />
                <path
                  d="M23.0134 10.3868L4.20801 36.1614H1.3811V26.0391L12.8327 10.3868H23.0134"
                  fill="#EAEAEA"
                />
                <path
                  d="M14.6772 55.1316V56.0933H4.75549V55.1316H7.20715H12.4283H14.6772Z"
                  fill="#5A5A5A"
                />
                <path
                  d="M12.8327 10.3869L1.3811 26.0391V10.3869H12.8327Z"
                  fill="#FF9500"
                />
                <path
                  d="M12.4284 36.1613V55.1316H7.20721V36.1613H12.4284Z"
                  fill="#5A5A5A"
                />
                <path
                  d="M12.4284 2.188V10.3868H7.20721V2.188C7.20721 0.985827 8.36094 2.16332e-05 9.80309 2.16332e-05C11.2452 2.16332e-05 12.4284 0.985827 12.4284 2.188Z"
                  fill="#5A5A5A"
                />
                <path
                  d="M85 36.7144H1.3811V35.5122H83.5578V10.3555H85V36.7144Z"
                  fill="#E07A00"
                />
                <path
                  d="M2.11452 36.1517H0.672363V9.79286H84.2924V10.995H2.11452V36.1517Z"
                  fill="#F0F3F4"
                />
                <path
                  d="M74.6897 48.0509H10.7551V45.8028H74.6897V48.0509Z"
                  fill="#5A5A5A"
                />
              </svg>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className="about-box">
        <CardActionArea>
          <CardMedia
            className="about-media"
            image="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="sercivios"
          />
          <CardContent className={classes.contain}>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>C</span>ompraventa y renta de
              maquinaria tales como:
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>P</span>roducción, fabricación,
              distribución, compra, venta, de todo tipo de materiales para la
              industria de la construcción, tales como tabique, cemento, grava,
              arena, cal, varilla, alambrón, alambre recocido, aceros, pisos,
              etc.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>P</span>restación de servicios
              profesionales y asesoría técnica a personas físicas, morales,
              publicas, municipales, estatales, federales en materia de
              planeación urbana o regional, asentamientos humanos, economía
              urbana, montaje y desmontaje de maquinaria.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>P</span>restar y recibir toda
              clase de asesorías, capacitación y servicios técnicos,
              profesionales de consultoría, de procesos, ventas,
              comercialización, supervisión, asistencia técnica, asesoría en
              asuntos jurídicos, financieros, fiscales, contables y comerciales
              en forma directa o a través de terceros.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>P</span>restación de servicios
              de consultoría y asesoría técnica en el ramo de la arquitectura de
              costos y de ejecución de obra.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>S</span>ervicios de outsourcing
              personal que permita uniformidad de políticas en materia de
              recursos humanos que favorezcan el ahorro en los procesos de
              selección, de contratación, inducción, capacitación y control de
              personal que ocupen los contratantes.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>S</span>ervicios especializados
              en administración de patentes, marcas y de cualquier otra
              naturaleza, relacionados con el objeto social.
            </Typography>
            <div className="serviceSvg">
              <svg
                width="243"
                height="184"
                viewBox="0 0 243 184"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.902 52.06L43.7778 52.3516V52.3838L38.779 65.335L34.3392 76.894H42.4116H51.9745H63.3691H74.95H80.6008H85.1338H88.8285V52.06H76.3472H72.0625H66.6602H63.3691H43.902ZM28.6263 78.3186L41.6976 44.4836H94.0446V91.9497H36.5436H5.18503H1.0867V84.6647L28.6263 78.3186Z"
                  fill="#E57900"
                />
                <path
                  d="M43.902 52.06H63.3691V76.8939H51.9745L43.7778 52.3838V52.3515L43.902 52.06Z"
                  fill="#9AD8F3"
                />
                <path
                  d="M227.924 45.6168L242.92 77.1853L238.294 79.5489L224.633 52.06H199.856H194.702H167.66H162.537H133.941H128.787H98.0187L94.0446 37.1015H27.2603L19.9019 29.4278H114.226L126.49 45.6168H175.204H222.863H227.924Z"
                  fill="#FF9500"
                />
                <path
                  d="M224.633 52.0601L238.294 79.549L228.265 84.6647V84.6971L211.034 93.5039L199.856 52.0601H224.633Z"
                  fill="#E57900"
                />
                <path
                  d="M178.278 110.243L182.749 107.977V107.944L206.532 95.8027L211.034 93.5039L228.265 84.6971L207.805 117.302C205.818 116.913 203.768 116.686 201.688 116.686C184.394 116.686 170.143 130.609 168.684 148.255C168.591 149.226 168.56 150.23 168.56 151.234C168.56 152.335 168.622 153.435 168.715 154.504H157.848V129.508H147.23H143.939H122.95H119.69H108.761V154.504H103.607V134.332V91.9497V73.2354L114.505 114.42H115.592C115.623 119.018 118.728 122.741 122.547 122.741H150.614C154.433 122.741 157.538 119.018 157.569 114.42H170.112L178.278 110.243Z"
                  fill="#515151"
                />
                <path
                  d="M228.265 151.234C228.265 135.951 216.343 123.518 201.688 123.518C187.033 123.518 175.111 135.951 175.111 151.234C175.111 166.516 187.033 178.949 201.688 178.949C216.343 178.949 228.265 166.516 228.265 151.234ZM201.688 120.118C218.175 120.118 231.525 134.041 231.525 151.234C231.525 168.426 218.175 182.381 201.688 182.381C185.202 182.381 171.82 168.426 171.82 151.234C171.82 150.23 171.851 149.226 171.975 148.255C173.341 133.037 185.233 121.057 199.949 120.151C200.539 120.151 201.098 120.118 201.688 120.118Z"
                  fill="#161617"
                />
                <path
                  d="M188.182 23.3733C188.182 22.2724 187.344 21.3982 186.319 21.3982C185.264 21.3982 184.425 22.2724 184.425 23.3733C184.425 24.4417 185.264 25.3159 186.319 25.3159C187.344 25.3159 188.182 24.4417 188.182 23.3733ZM190.169 36.0977C190.169 34.4465 188.865 33.1189 187.282 33.1189C185.698 33.1189 184.425 34.4465 184.425 36.0977C184.425 37.749 185.698 39.0766 187.282 39.0766C188.865 39.0766 190.169 37.749 190.169 36.0977ZM205.445 29.2013C205.445 27.5824 204.172 26.2873 202.651 26.2873C201.098 26.2873 199.856 27.5824 199.856 29.2013C199.856 30.8202 201.098 32.1153 202.651 32.1153C204.172 32.1153 205.445 30.8202 205.445 29.2013ZM215.194 41.2458C215.194 40.0478 214.263 39.0766 213.114 39.0766C211.965 39.0766 211.034 40.0478 211.034 41.2458C211.034 42.4438 211.965 43.4152 213.114 43.4152C214.263 43.4152 215.194 42.4438 215.194 41.2458ZM222.863 45.6168H175.204V2.42468C202.03 2.42468 222.863 45.6168 222.863 45.6168Z"
                  fill="#E8AB48"
                />
                <path
                  d="M215.194 151.234C215.194 143.495 209.14 137.182 201.688 137.182C194.237 137.182 188.182 143.495 188.182 151.234C188.182 159.004 194.237 165.318 201.688 165.318C209.14 165.318 215.194 159.004 215.194 151.234ZM201.688 123.518C216.343 123.518 228.265 135.951 228.265 151.234C228.265 166.516 216.343 178.949 201.688 178.949C187.033 178.949 175.111 166.516 175.111 151.234C175.111 135.951 187.033 123.518 201.688 123.518Z"
                  fill="#41383D"
                />
                <path
                  d="M213.114 39.0765C214.263 39.0765 215.194 40.0477 215.194 41.2457C215.194 42.4437 214.263 43.4151 213.114 43.4151C211.965 43.4151 211.034 42.4437 211.034 41.2457C211.034 40.0477 211.965 39.0765 213.114 39.0765Z"
                  fill="#FFD58F"
                />
                <path
                  d="M201.688 137.182C209.14 137.182 215.194 143.495 215.194 151.234C215.194 159.004 209.14 165.318 201.688 165.318C194.237 165.318 188.182 159.004 188.182 151.234C188.182 143.495 194.237 137.182 201.688 137.182Z"
                  fill="#E57900"
                />
                <path
                  d="M199.856 52.06L211.034 93.5039L206.532 95.8027L194.702 52.06H199.856Z"
                  fill="#FF9500"
                />
                <path
                  d="M194.702 52.06L206.532 95.8027L182.749 107.944L167.659 52.06H194.702Z"
                  fill="#E57900"
                />
                <path
                  d="M202.651 26.2872C204.172 26.2872 205.445 27.5823 205.445 29.2012C205.445 30.8201 204.172 32.1152 202.651 32.1152C201.098 32.1152 199.856 30.8201 199.856 29.2012C199.856 27.5823 201.098 26.2872 202.651 26.2872Z"
                  fill="#FFD58F"
                />
                <path
                  d="M201.688 116.686L199.949 120.151C185.233 121.057 173.341 133.037 171.975 148.255H171.913H168.684C170.143 130.609 184.394 116.686 201.688 116.686Z"
                  fill="#161617"
                />
                <path
                  d="M187.282 33.1189C188.865 33.1189 190.169 34.4464 190.169 36.0977C190.169 37.749 188.865 39.0765 187.282 39.0765C185.698 39.0765 184.425 37.749 184.425 36.0977C184.425 34.4464 185.698 33.1189 187.282 33.1189Z"
                  fill="#FFD58F"
                />
                <path
                  d="M186.319 21.3982C187.344 21.3982 188.182 22.2724 188.182 23.3732C188.182 24.4417 187.344 25.3159 186.319 25.3159C185.264 25.3159 184.425 24.4417 184.425 23.3732C184.425 22.2724 185.264 21.3982 186.319 21.3982Z"
                  fill="#FFD58F"
                />
                <path
                  d="M167.66 52.06L182.749 107.944V107.977L178.278 110.243L162.537 52.06H167.66Z"
                  fill="#FF9500"
                />
                <path
                  d="M154.309 114.42H150.894L133.941 52.06H162.537L178.278 110.243L170.112 114.42H157.569H154.309Z"
                  fill="#E57900"
                />
                <path
                  d="M138.63 41.0839C138.63 39.7564 137.574 38.6556 136.301 38.6556C134.997 38.6556 133.941 39.7564 133.941 41.0839C133.941 42.4438 134.997 43.5447 136.301 43.5447C137.574 43.5447 138.63 42.4438 138.63 41.0839ZM153.75 37.1661C153.75 36.3243 153.129 35.6769 152.322 35.6769C151.546 35.6769 150.894 36.3243 150.894 37.1661C150.894 37.9756 151.546 38.6556 152.322 38.6556C153.129 38.6556 153.75 37.9756 153.75 37.1661ZM168.715 21.3982C168.715 19.6174 167.349 18.1928 165.641 18.1928C163.934 18.1928 162.537 19.6174 162.537 21.3982C162.537 23.179 163.934 24.6036 165.641 24.6036C167.349 24.6036 168.715 23.179 168.715 21.3982ZM170.361 38.8823C170.361 37.1015 168.963 35.6769 167.256 35.6769C165.579 35.6769 164.182 37.1015 164.182 38.8823C164.182 40.6631 165.579 42.0877 167.256 42.0877C168.963 42.0877 170.361 40.6631 170.361 38.8823ZM175.204 2.42468V45.6168H126.49C126.49 45.6168 148.379 2.42468 175.204 2.42468Z"
                  fill="#FFD58F"
                />
                <path
                  d="M167.256 35.6769C168.963 35.6769 170.361 37.1015 170.361 38.8823C170.361 40.6631 168.963 42.0877 167.256 42.0877C165.579 42.0877 164.182 40.6631 164.182 38.8823C164.182 37.1015 165.579 35.6769 167.256 35.6769Z"
                  fill="#E8AB48"
                />
                <path
                  d="M165.641 18.1928C167.349 18.1928 168.715 19.6174 168.715 21.3982C168.715 23.179 167.349 24.6036 165.641 24.6036C163.934 24.6036 162.537 23.179 162.537 21.3982C162.537 19.6174 163.934 18.1928 165.641 18.1928Z"
                  fill="#E8AB48"
                />
                <path
                  d="M157.848 154.504V161.627H147.23V129.508H157.848V154.504Z"
                  fill="#E57900"
                />
                <path
                  d="M154.309 114.42H157.569C157.538 119.018 154.433 122.741 150.614 122.741H122.547C118.728 122.741 115.623 119.018 115.592 114.42H118.852C118.883 117.14 120.56 119.341 122.547 119.341H150.614C152.632 119.341 154.278 117.14 154.309 114.42Z"
                  fill="#E57900"
                />
                <path
                  d="M150.894 114.42H154.309C154.278 117.14 152.632 119.341 150.614 119.341H122.547C120.56 119.341 118.883 117.14 118.852 114.42H145.678H150.894Z"
                  fill="#515151"
                />
                <path
                  d="M152.322 35.6768C153.129 35.6768 153.75 36.3243 153.75 37.1661C153.75 37.9755 153.129 38.6555 152.322 38.6555C151.546 38.6555 150.894 37.9755 150.894 37.1661C150.894 36.3243 151.546 35.6768 152.322 35.6768Z"
                  fill="#E8AB48"
                />
                <path
                  d="M133.941 52.06L150.894 114.42H145.678L128.787 52.06H133.941Z"
                  fill="#FF9500"
                />
                <path
                  d="M147.23 129.508V161.627H143.939V129.508H147.23Z"
                  fill="#FBB020"
                />
                <path
                  d="M115.592 114.42H114.505L103.607 73.2353V73.2029L98.0187 52.06H128.787L145.677 114.42H118.852H115.592Z"
                  fill="#E57900"
                />
                <path
                  d="M143.939 129.508V161.627H122.95V129.508H143.939Z"
                  fill="#E57900"
                />
                <path
                  d="M136.301 38.6555C137.574 38.6555 138.63 39.7564 138.63 41.0839C138.63 42.4437 137.574 43.5446 136.301 43.5446C134.997 43.5446 133.941 42.4437 133.941 41.0839C133.941 39.7564 134.997 38.6555 136.301 38.6555Z"
                  fill="#E8AB48"
                />
                <path
                  d="M122.95 129.508V161.627H119.69V129.508H122.95Z"
                  fill="#FBB020"
                />
                <path
                  d="M119.69 129.508V161.627H108.761V129.508H119.69Z"
                  fill="#E57900"
                />
                <path
                  d="M103.607 134.332V154.504H97.1804C97.2736 153.435 97.3357 152.335 97.3357 151.234C97.3357 150.23 97.3046 149.226 97.2115 148.255C95.7522 130.609 81.5012 116.686 64.2074 116.686C46.9136 116.686 32.6626 130.609 31.2033 148.255C31.1102 149.226 31.0791 150.23 31.0791 151.234C31.0791 152.335 31.1412 153.435 31.2343 154.504H13.3507L37.6302 107.038H95.9695V123.518L103.607 134.332Z"
                  fill="#983421"
                />
                <path
                  d="M103.607 91.9497V134.332L95.9695 123.518V107.038H37.6302L13.3507 154.504V148.255V135.174L19.7466 123.227L36.5436 91.9497H94.0446H103.607Z"
                  fill="#FF9500"
                />
                <path
                  d="M103.607 73.2353V91.9497H94.0446V73.2029H103.607V73.2353Z"
                  fill="#515151"
                />
                <path
                  d="M97.2115 148.255H93.9204C92.4611 132.454 79.7315 120.118 64.2074 120.118C48.6834 120.118 35.9226 132.454 34.4944 148.255H31.2033C32.6626 130.609 46.9137 116.686 64.2074 116.686C81.5012 116.686 95.7522 130.609 97.2115 148.255Z"
                  fill="#161617"
                />
                <path
                  d="M90.7845 151.234C90.7845 135.951 78.8621 123.518 64.2074 123.518C49.5527 123.518 37.6303 135.951 37.6303 151.234C37.6303 166.516 49.5527 178.949 64.2074 178.949C78.8621 178.949 90.7845 166.516 90.7845 151.234ZM93.9204 148.255C94.0135 149.226 94.0446 150.23 94.0446 151.234C94.0446 168.426 80.6939 182.381 64.2074 182.381C47.7209 182.381 34.3392 168.426 34.3392 151.234C34.3392 150.23 34.3702 149.226 34.4944 148.255C35.9226 132.454 48.6834 120.118 64.2074 120.118C79.7314 120.118 92.4611 132.454 93.9204 148.255Z"
                  fill="#161617"
                />
                <path
                  d="M88.8285 52.06V76.8939H85.1338L76.3472 52.06H88.8285Z"
                  fill="#9AD8F3"
                />
                <path
                  d="M76.3472 52.06L85.1338 76.8939H80.6008L72.0626 52.0924V52.06H76.3472Z"
                  fill="#C6E8F8"
                />
                <path
                  d="M77.6822 151.234C77.6822 143.495 71.6279 137.182 64.2074 137.182C56.7559 137.182 50.7015 143.495 50.7015 151.234C50.7015 159.004 56.7559 165.318 64.2074 165.318C71.6279 165.318 77.6822 159.004 77.6822 151.234ZM64.2074 123.518C78.8621 123.518 90.7845 135.951 90.7845 151.234C90.7845 166.516 78.8621 178.949 64.2074 178.949C49.5527 178.949 37.6302 166.516 37.6302 151.234C37.6302 135.951 49.5527 123.518 64.2074 123.518Z"
                  fill="#41383D"
                />
                <path
                  d="M72.0626 52.0924L80.6008 76.8939H74.95L66.6602 52.06H72.0626V52.0924Z"
                  fill="#9AD8F3"
                />
                <path
                  d="M66.6602 52.06L74.95 76.8939H63.3691V52.06H66.6602Z"
                  fill="#C6E8F8"
                />
                <path
                  d="M64.2074 137.182C71.6279 137.182 77.6822 143.495 77.6822 151.234C77.6822 159.004 71.6279 165.318 64.2074 165.318C56.7559 165.318 50.7015 159.004 50.7015 151.234C50.7015 143.495 56.7559 137.182 64.2074 137.182Z"
                  fill="#E57900"
                />
                <path
                  d="M43.7778 52.3838L51.9745 76.8939H42.4117L38.7791 65.3349L43.7778 52.3838Z"
                  fill="#C6E8F8"
                />
                <path
                  d="M38.7791 65.3349L42.4117 76.8939H34.3392L38.7791 65.3349Z"
                  fill="#9AD8F3"
                />
                <path
                  d="M36.5436 91.9497L19.7466 123.227H5.18506V91.9497H36.5436Z"
                  fill="#FBB020"
                />
                <path
                  d="M19.7466 123.227L13.3507 135.174V148.255H0V123.227H5.18501H19.7466Z"
                  fill="#E57900"
                />
                <path
                  d="M13.3507 148.255V154.504H5.18506V148.255H13.3507Z"
                  fill="#515151"
                />
                <path
                  d="M175.102 0.796059C180.88 0.932045 186.503 3.05591 191.293 6.08973C196.127 9.13649 200.341 13.022 204.138 17.2279C207.935 21.4467 211.313 26.0249 214.402 30.7812C217.479 35.5505 220.301 40.4913 222.736 45.6297C220.072 40.6176 217.038 35.8353 213.772 31.2506C210.49 26.6788 206.941 22.3144 203.033 18.3643C199.124 14.4206 194.851 10.859 190.138 8.20077C185.431 5.54255 180.284 3.89787 175.027 4.03385L175.102 0.796059Z"
                  fill="#D89D3F"
                />
                <path
                  d="M126.366 45.6297C128.924 40.4881 131.858 35.5504 135.04 30.7844C138.238 26.0313 141.716 21.4628 145.6 17.2505C149.487 13.0478 153.775 9.17213 158.671 6.12214C163.536 3.08184 169.153 0.938522 175.064 0.796059V4.03385C169.83 3.90434 164.567 5.5718 159.814 8.2365C155.038 10.9012 150.689 14.4627 146.696 18.3998C142.7 22.3467 139.052 26.7015 135.668 31.2636C132.296 35.8418 129.151 40.6208 126.366 45.6297Z"
                  fill="#FCE0A4"
                />
                <path
                  d="M64.0242 76.9036H62.4718V52.0793H64.0242V76.9036Z"
                  fill="#7DBDD3"
                />
                <path
                  d="M64.0677 121.737C48.4629 121.737 35.7674 134.977 35.7674 151.246C35.7674 167.523 48.4629 180.762 64.0677 180.762C79.6724 180.762 92.368 167.523 92.368 151.246C92.368 134.977 79.6724 121.737 64.0677 121.737ZM64.0677 184C46.7491 184 32.6626 169.307 32.6626 151.246C32.6626 133.189 46.7491 118.499 64.0677 118.499C81.3863 118.499 95.4728 133.189 95.4728 151.246C95.4728 169.307 81.3863 184 64.0677 184Z"
                  fill="black"
                />
                <path
                  d="M64.0677 125.15C50.2668 125.15 39.0398 136.858 39.0398 151.247C39.0398 165.642 50.2668 177.35 64.0677 177.35C77.8685 177.35 89.0955 165.642 89.0955 151.247C89.0955 136.858 77.8685 125.15 64.0677 125.15ZM64.0677 180.588C48.5561 180.588 35.935 167.426 35.935 151.247C35.935 135.071 48.5561 121.912 64.0677 121.912C79.5824 121.912 92.2003 135.071 92.2003 151.247C92.2003 167.426 79.5824 180.588 64.0677 180.588Z"
                  fill="#595457"
                />
                <path
                  d="M64.0676 138.794C57.4823 138.794 52.1266 144.383 52.1266 151.247C52.1266 158.117 57.4823 163.703 64.0676 163.703C70.6529 163.703 76.0118 158.117 76.0118 151.247C76.0118 144.383 70.6529 138.794 64.0676 138.794ZM64.0676 166.94C55.7716 166.94 49.0218 159.901 49.0218 151.247C49.0218 142.595 55.7716 135.556 64.0676 135.556C72.3637 135.556 79.1166 142.595 79.1166 151.247C79.1166 159.901 72.3637 166.94 64.0676 166.94Z"
                  fill="#FF9500"
                />
                <path
                  d="M201.552 121.737C185.947 121.737 173.251 134.977 173.251 151.246C173.251 167.523 185.947 180.762 201.552 180.762C217.159 180.762 229.855 167.523 229.855 151.246C229.855 134.977 217.159 121.737 201.552 121.737ZM201.552 184C184.236 184 170.146 169.307 170.146 151.246C170.146 133.189 184.236 118.499 201.552 118.499C218.87 118.499 232.96 133.189 232.96 151.246C232.96 169.307 218.87 184 201.552 184Z"
                  fill="black"
                />
                <path
                  d="M201.552 125.15C187.751 125.15 176.524 136.858 176.524 151.247C176.524 165.642 187.751 177.35 201.552 177.35C215.352 177.35 226.579 165.642 226.579 151.247C226.579 136.858 215.352 125.15 201.552 125.15ZM201.552 180.588C186.04 180.588 173.419 167.426 173.419 151.247C173.419 135.071 186.04 121.912 201.552 121.912C217.063 121.912 229.684 135.071 229.684 151.247C229.684 167.426 217.063 180.588 201.552 180.588Z"
                  fill="#595457"
                />
                <path
                  d="M201.552 138.794C194.969 138.794 189.614 144.383 189.614 151.247C189.614 158.117 194.969 163.703 201.552 163.703C208.137 163.703 213.493 158.117 213.493 151.247C213.493 144.383 208.137 138.794 201.552 138.794ZM201.552 166.94C193.255 166.94 186.509 159.901 186.509 151.247C186.509 142.595 193.255 135.556 201.552 135.556C209.851 135.556 216.597 142.595 216.597 151.247C216.597 159.901 209.851 166.94 201.552 166.94Z"
                  fill="#FF9500"
                />
                <path
                  d="M237.487 79.9149L224.04 52.8889H97.8821V51.27H224.983L238.862 79.1701L237.487 79.9149Z"
                  fill="#983421"
                />
                <path
                  d="M35.3606 76.0942H87.9157V52.8889H44.2839L35.3606 76.0942ZM89.4681 77.7131H33.0662L43.2344 51.27H89.4681V77.7131Z"
                  fill="#983421"
                />
              </svg>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      <section className="about-whor">
        <div>
          <CardContent className={classes.contain}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              Otros Servicios
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>A</span>
              condicionamiento y mejoramiento de suelos tanto para edificaciones
              como para urbanización, mercadotecnia, supervisión de obra,
              investigación de campo, residencia de obra, museografía, diseño
              editorial, gráfico e industrial, investigación histórica,
              artística, botánica y paisajista de jardines, estudios
              socioeconómicos, arquitectura, legal, contable, ingeniería,
              investigación y consultoría de administración de obras y
              desarrollo urbano.
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              align="justify"
              className={classes.text}
            >
              <span className={classes.capital}>T</span>enemos una amplia
              experiencia en la conducción y gestión de grandes obras, con el
              conocimiento experto en las diferentes especialidades y áreas de
              desarrollo, desde la identificación de oportunidades y la
              ingeniería de soluciones, hasta la construcción de obra civil y la
              operación de servicios públicos concesionados. Contribuimos al
              desarrollo de nuestros empleados, al respecto del medioambiente y
              la seguridad y salud en el trabajo.
            </Typography>
          </CardContent>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Quienes somos"
            className="about-whor-img"
          />
        </div>
      </section>
    </div>
  );
}
