import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicial from './components/main/Inicial'
import AboutMe from './components/main/AboutMe'
import Projects from './components/main/Projects'
import Abilities from './components/main/Abilities';
import Contact from './components/main/Contact';
import NavBar from './components/navBar/NavBar.jsx';
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App hol">
      <header><NavBar /></header>
      <section><Inicial /></section>
      <section><AboutMe /></section>
      <section><Projects /></section>
      <section><Abilities /></section>
      <section><Contact /> </section>
      <footer><Footer /> </footer>

    </div>
  );
}

export default App;
