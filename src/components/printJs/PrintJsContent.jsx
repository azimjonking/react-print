import React, { useRef } from 'react';
import printJS from 'print-js';

const PrintJsContent = () => {
  // Chop etiladigan HTML elementi uchun referens yaratamiz
  const printRef = useRef();

  // Chop etish funksiyasini yaratamiz
  const handlePrint = () => {
    printJS({
      printable: printRef.current.id,  // Chop qilinadigan element ID sini beramiz
      type: 'html',  // HTML element turini ko'rsatamiz
      targetStyles: ['*'],  // Elementdagi barcha CSS uslublarni qo'llash
    });
  };

  return (
    <div>
      <h1>Print-js misoli</h1>
      <button onClick={handlePrint}>Chop etish</button>

      <div id="printMe" ref={printRef} style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
        <h2>Bu chop qilinadigan tarkib</h2>
        <p>Bu yerda bir nechta matn mavjud.</p>
      </div>
    </div>
  );
};

export default PrintJsContent;
