import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Layouts/Footer/Footer';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Header from './Components/Layouts/Header/Header';
import Favorite from './Components/Layouts/Contents/Homepage/Favorite';
import Mostproduct from './Components/Layouts/Contents/Homepage/Mostproduct';
function App() {
  return (
    <>
    <Header/>
    <Favorite/>
    <Mostproduct/>
    <Footer/> 
    </>
  );
}

export default App;
