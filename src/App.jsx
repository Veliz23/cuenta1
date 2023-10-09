import Formulario from "./Component/Formulario";
import Header from "./Component/Header";
import SocialButton from "./Component/SocialButton";
import "./App.css";

function App() {


  return (
    <div className="Todo">
      <Header Title= 'Crea una cuenta'/>
      <SocialButton />
      <Formulario />
    </div>
  );
}

export default App;