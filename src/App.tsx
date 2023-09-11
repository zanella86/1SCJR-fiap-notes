import { AuthProvider } from "./Context/AuthContext";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./routes";

function App() {
  //console.log(import.meta.env.MODE);
  return (
    <>
      Os naturalistas são naturalmente naturais por natureza.
      <GlobalStyles />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
