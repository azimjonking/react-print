import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import MyDocument from './MyDocument';

const PrintComponent = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Chop etish</button>}
        content={() => componentRef.current}
      />
      <div style={{ display: 'block' }}>
        <MyDocument ref={componentRef} />
      </div>
    </div>
  );
};

export default PrintComponent;
