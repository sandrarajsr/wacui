import IcomoonReact from "icomoon-react";
import iconSet from "./selection.json";

const Iconmoon = ({ ...props }) => {
  return <IcomoonReact iconSet={iconSet} {...props} />;
};

export default Iconmoon;