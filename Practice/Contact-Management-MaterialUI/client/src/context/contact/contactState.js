import ContactContext from "./contactContext";


const contacts = [
    {id: 0, name: 'Hasan', email: 'xyz@gmail.com', phone: '09012012321'},
    {id: 1, name: 'malahim', email: 'xaa@gmail.com', phone: '09012012321'},
    {id: 2, name: 'abbas', email: 'aaa@gmail.com', phone: '09012012321'}
]

const ContactState = ({ children }) => {
  return (
    <ContactContext.Provider
      value={{
        contacts
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
export default ContactState;
