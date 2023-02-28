//import './App.css';
import Main from './components/Navbar';
import Hero from './components/Hero';
import About from './components/AboutUs';
import Form from './components/Registration';
import Footer from './components/Footer'
import Menu from './components/Menu'

export default function App() {
  return (
    <div>
      <Main />
      <Hero />
      <About />
      <Form />
      <Menu />
      <Footer />
    </div>
  );
}

