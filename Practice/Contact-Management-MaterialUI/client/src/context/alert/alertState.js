import AlertContext from "./alertContext";

const alert = [{ errorMsg: "Error" }];

const AlertState = ({ children }) => {
  return (
    <AlertContext.Provider
      value={{
        alert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
