import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");

  const handleClick = (e) => {
    setOpen(true);
    setData("");
    setData1("");
    setData2("");
    setData3("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setData(value);
  };

  const handleChange1 = ({ target }) => {
    const { value } = target;
    setData1(value);
  };

  const handleChange2 = ({ target }) => {
    const { value } = target;
    setData2(value);
  };

  const handleChange3 = ({ target }) => {
    const { value } = target;
    setData3(value);
  };

  return (
    <>
      <div className="cont-mapa" id="contacto">
        <Card sx={{ width: "90vw" }}>
          <CardContent className="card-mapa">
            <div className="div-mapa">
              <p>Por favor, déjanos tus datos en el formulario.</p>
              <form className="input-mapa">
                <TextField
                  id="outlined-basic"
                  name="Nombre"
                  label="Nombre"
                  variant="outlined"
                  onChange={handleChange}
                  value={data}
                />
                <TextField
                  id="outlined-basic"
                  name="Correo"
                  label="Correo"
                  variant="outlined"
                  onChange={handleChange1}
                  value={data1}
                />
                <TextField
                  id="outlined-basic"
                  name="Teléfono"
                  label="Teléfono"
                  variant="outlined"
                  onChange={handleChange2}
                  value={data2}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  rows={3}
                  name="Mensaje"
                  label="Mensaje"
                  variant="outlined"
                  onChange={handleChange3}
                  value={data3}
                />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  <a className="bttn-cooon" href="#contacto">
                    Enviar
                  </a>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Hemos recibido tu mensaje y te contactaremos lo antes posible.
        </Alert>
      </Snackbar>
    </>
  );
}
