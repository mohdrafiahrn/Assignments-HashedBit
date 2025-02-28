import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx'

import Movies from './components/Movies.jsx'
import './App.css'
import MovieDetail from "./components/MovieDetail.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";
import TicketDetail from "./components/TicketDetail.jsx";

function App() {


  return (
    <>
      <Header />
      {/* <App /> */}
      {/* <Crousel/> */}
      <MovieProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/tickets-detail" element={<TicketDetail/>} />
          </Routes>
        </Router>
      </MovieProvider>
    </>
  )
}

export default App
