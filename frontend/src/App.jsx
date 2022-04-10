import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Prices from './screens/Prices';
import Books from './screens/Books' ;
import Sciencebooks from './screens/Sciencebooks'
import Programmingbooks from './screens/Programmingbooks'
import Languagesbooks from './screens/Languagesbooks'
import ErrorPage from './screens/ErrorPage';
import { BrowserRouter as Router ,Routes , Route }  from 'react-router-dom' ;

function App() {

    return ( 
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Books />}  />
          <Route path='prices' element ={<Prices/>} />
          <Route path='sciencebooks' element ={<Sciencebooks/>} />
          <Route path='languagesbooks' element ={<Languagesbooks/>} />
          <Route path='programmingbooks' element ={<Programmingbooks/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />

      </Router>
    
    );
}

export default App;