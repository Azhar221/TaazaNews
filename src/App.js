import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Category from './Components/Category';
function App() {

  // const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <>
      <NavBar />
      <Category />
      <Home apiKey={process.env.API_KEY}/>
      <Footer />
    </>
  );
}

export default App;
