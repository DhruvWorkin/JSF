import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Faculties from './faculty';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './navigation';
import FacTab from './facultyData';
import FacDetails from './details';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Nav/>} />
          <Route path="/list" element={<Faculties />} />
          <Route path="/table" element={<FacTab />} />
          <Route path="/details/:id" element={<FacDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
