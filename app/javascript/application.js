import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloMessage from './App';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<HelloMessage name="World" />);
});
