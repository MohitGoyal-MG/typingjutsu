import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutUsPage from './pages/AboutUsPage';
import Level1Page from "./pages/Level1Page"
import Level2Page from "./pages/Level2Page"
import Level3Page from "./pages/Level3Page"

// import Level2Page from "./pages/Level2Page"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/about",
    element: <AboutUsPage></AboutUsPage>,
  },
  {
    path: "/level1",
    element: <Level1Page></Level1Page>,
  },
  {
    path: "/level2",
    element: <Level2Page></Level2Page>,
  },
  {
    path: "/level3",
    element: <Level3Page></Level3Page>,
  },
]);
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
