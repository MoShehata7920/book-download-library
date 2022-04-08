
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import landingPage from "./screens/landingPage/landingPage" ;
import { BrowserRouter, Route} from "react-router-dom" ;
import myNotes from './screens/myNotes/myNotes';


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
    <Route path='/' component = {landingPage} exact />
    
    <Route path='/mynotes' component = {myNotes}   />
    </main>
    <Footer />
  </BrowserRouter>
)

export default App;
