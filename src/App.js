import './App.css';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const navItems = [
  { text: 'HOME', path: '/home' },
  { text: 'ABOUT', path: '/about' },
  { text: 'MENU', path: '/menu' },
  { text: 'RESERVATION', path: '/reservation' },
  { text: 'ORDER', path: '/order' },
  { text: 'LOG IN', path: '/login' },
];

function App() {
  return (
    <>
      <Header>
        <Nav navItems={navItems} />
      </Header>
      <Main />
      <Footer navItems={navItems} />
    </>
  );
}

export default App;
