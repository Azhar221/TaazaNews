import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Category from './Components/Category';
function App() {

  const apiKey = '0c705bf61a04443494f2dfc3cf1bca55'
  // const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <>
      <NavBar />
      <Category />
      <Home apiKey={apiKey}/>
      <Footer />
    </>
  );
}

export default App;
