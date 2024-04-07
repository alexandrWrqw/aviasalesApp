// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  // <StrictMode>
  <App />,
  // </StrictMode>
);
