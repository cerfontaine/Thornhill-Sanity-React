import{ BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Careers from "./components/Careers";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Services from "./components/Services";
import SingleCareers from "./components/SingleCareers";
import SingleServices from "./components/SingleServices";
import NavBar from "./components/NavBar";


function App() {
  return(
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path='/'/>
          <Route element={<About />} path='/about' />
          <Route element={<SingleServices />} path='/services/:slug' />
          <Route element={<Services />} path='/services' />
          <Route element={<SingleCareers />} path='/careers/:slug' />
          <Route element={<Careers />} path='/careers' />
          <Route element={<Login />} path='/login' />
          <Route element={<Profile />} path='/profile/:slug' />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
