import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouterConfig from "./config/RouterConfig";

function App() {
  return (
    <div>
      <Navbar />
      <RouterConfig />
      <div className="flex items-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
