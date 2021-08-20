import React from "react";
import { useHistory } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import HomeIcon from "@material-ui/icons/Home";

export default function LabelBottomNavigation() {
  let history = useHistory();
  const [value, setValue] = React.useState("recents");

  const go = (path) => history.push(path);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="footer-contain">
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Acerca de"
          value="favorites"
          icon={<LiveHelpIcon />}
          onClick={() => go("/acerca")}
        />
        <BottomNavigationAction
          label="Inicio"
          value="recents"
          icon={<HomeIcon />}
          onClick={() => {
            go("/");
            window.scrollTo(0, 0);
          }}
        />
        <BottomNavigationAction
          label="Servicios"
          value="nearby"
          icon={<BusinessCenterIcon />}
          onClick={() => go("/servicios")}
        />
      </BottomNavigation>
    </div>
  );
}
