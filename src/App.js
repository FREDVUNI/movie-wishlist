import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import WatchList from './components/WatchList'
import WishList from './components/WishList'
import Add from './components/Add'
import Watched from './components/Watched'
import Header from './components/Header'
import {MovieProvider} from './context/GlobalContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <MovieProvider>  
    <Router>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path="/" element={<WatchList/>}/>
        <Route path="/watched" element={<Watched/>}/>
        <Route path="/wish-list" element={<WishList/>}/>  
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </Router>
    </MovieProvider>
  );
}

export default App;
