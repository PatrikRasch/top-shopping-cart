// import "./App.css";
import RouteSwitch from "./components/RouteSwitch";
import "./app.css";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <RouteSwitch />
    </CartProvider>
  );
}

export default App;
