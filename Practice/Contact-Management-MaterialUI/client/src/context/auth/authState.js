import AuthContext from "./authContext";

const auth = 
  {
    email: "xyz@gmail.com",
    password: "123213",
    isAuthenticated: true
  };

const AuthState = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
