import React from "react";
import { Link, Routes, Route } from 'react-router-dom';
import PrintJs from './pages/PrintJs'
import PdfFormat from './pages/PdfFormat'
import ReactToPrint from './pages/ReactToPrint'

const App = () => {
  return (
    <div>
      <h1>Print mavzusi</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/reacttoprint'>React To Print</Link>
        </li>
        <li>
          <Link to='/pdfformat'>Pdf Format</Link>
        </li>
        <li>
          <Link to='/printjs'>PrintJs</Link>
        </li>
      </ul>


      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/reacttoprint' element={<ReactToPrint />} />
        <Route path='/pdfformat' element={<PdfFormat />} />
        <Route path='/printjs' element={<PrintJs />} />
      </Routes>
    </div>
  );
};

export default App;
