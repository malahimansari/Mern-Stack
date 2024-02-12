import { useContext } from "react";
import ContactContext from "../context/contact/contactContext";

const NestedA = ({ name }) => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  console.log(contacts);
  return <h1>{name}</h1>;
};

export default NestedA;
