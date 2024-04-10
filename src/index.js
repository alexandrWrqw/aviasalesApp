import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';

import App from './components/App/App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
