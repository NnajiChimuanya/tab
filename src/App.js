import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Toggle from "./components/Toggle";
import Greeting from "./components/Greeting";
import LoginControl from "./LoginControl";
import ControlledForm from "./components/ControlledForm";
import ControlledTextarea from "./components/ControlledTextarea";
import ControlledSelect from "./components/ControlledSelect";
import UseState from "./components/UseState";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>

      <Form />

      <Toggle />

      <Greeting isLoggedIn={true} />

      <LoginControl />

      <ControlledForm />

      <ControlledTextarea />

      <ControlledSelect />

      <UseState />

     
    </>
    
  );
}

export default App;


