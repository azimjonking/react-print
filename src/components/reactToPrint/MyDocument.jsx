import React, { forwardRef } from 'react';

const MyDocument = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Bu mening PDF hujjatim</h1>
      <p>Bu yerda matn bo'lishi mumkin.</p>
    </div>
  );
});

export default MyDocument;

