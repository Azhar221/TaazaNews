import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Category from "./Components/Category";
function App() {
  const apiKey = process.env.API_KEY || " ";

  return (
    <>
      <NavBar />
      <Category />
      <Home apiKey={apiKey} />
      <Footer />
    </>
  );
}

export default App;
