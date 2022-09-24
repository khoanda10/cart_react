import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Cart from './components/Cart'
import Message from './components/Message'
import Products from './components/Products'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Header/>
      <main id="mainContainer">
        <div className="container">
          <Products/>
          <Message/>
          <Cart/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
