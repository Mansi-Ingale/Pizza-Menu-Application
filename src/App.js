import "./App.css";
import "./index.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Menu } from "./component/Menu";



function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
