import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import SignupForm from './pages/signupForm/SignupForm';
import LoginForm from './pages/loginForm/LoginForm';
// import {theme, ThemeProvider} from '@chakra-ui/react'


function App() {
  return (
    // <ThemeProvider theme={theme}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signup" element={<SignupForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    // </ThemeProvider>
  );
}

export default App;