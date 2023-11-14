import './App.css';
import Nav from './components/nav/Nav';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PostFooter from './components/post-footer/PostFooter';

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
      <PostFooter />
    </>
  );
}

export default App;
