// import logo from './logo.svg';
import "./App.css";
import Faculty from "./faculty";
import Map from "./mapmethod";
import Product from "./product";
import Student from "./student";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <h3>
                write file name after /<br></br>
                for example :<br></br>
                /map for Map method example<br></br>
                /fac for Faculty object example<br></br>
                /stud for Student object example<br></br>
                /prod for Product object example<br></br>
              </h3>
            }
          ></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/fac" element={<Faculty />}></Route>
          <Route path="/stud" element={<Student />}></Route>
          <Route path="/prod" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
