import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import SignupForm from './pages/signupForm/SignupForm';
import LoginForm from './pages/loginForm/LoginForm';
import MovieDetails from './pages/movieDetails/MovieDetails';


function App() {
  return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signup" element={<SignupForm />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="moviedetails" element={<MovieDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;