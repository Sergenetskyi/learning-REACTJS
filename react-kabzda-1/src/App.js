// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';

const App = () => {
  return (
    <div className="app-wrapper">
       <Header/>
       <Navbar/>
       <Content/>
       {/* <aside className="sidebar">Сайдбар</aside>     */}
       {/* <footer className="footer">Подвал</footer>              */}
    </div>
  );
};


export default App;

 