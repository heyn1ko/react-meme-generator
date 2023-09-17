import './index.css';
import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';
import MemeGenerator from './MemeGenerator';

// import React from from 'react';

export default function App() {
  return (
    <div>
      <MemeGenerator />
    </div>
  );
}
