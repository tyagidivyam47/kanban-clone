import react from 'react';
import Sidebar from './components/sideBar/sidebar.js';
import "./App.css";
import Header from './components/header/header.js';
import Footer from './components/footer/Footer.js';





function App() {
  return (
    <div>
      <div className='sidebar'>
        <Sidebar />
        <Header />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
