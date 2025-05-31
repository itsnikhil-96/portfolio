import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 font">
      <Header />
      <main className="flex-grow-1">
        <Main />
      </main>
      <Footer />
    </div>
  );
}


export default App;