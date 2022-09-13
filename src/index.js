import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./components/Home.jsx"
import PageNotFound from './components/PageNotFound/PageNotFound';

// import NewHome from './components/NewHome/NewHome';

import {
  BrowserRouter as Router,
  Route,
  useParams,
  Routes,
} from "react-router-dom";



// import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:location" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    {/* <NewHome /> */}
  </React.StrictMode>
);