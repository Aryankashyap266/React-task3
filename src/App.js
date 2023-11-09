import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Colourpick from "./Components/Colorpick";
function App() {
  return (
    <div class="background d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center h1 fw-bold">Color Picker</h1>
      <Colourpick />
    </div>
  );
}

export default App;
