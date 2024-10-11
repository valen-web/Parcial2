import { createRoot } from 'react-dom/client';
import './index.css';
import router from './navigation/navigation';
import { RouterProvider } from 'react-router-dom';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <RouterProvider router={router} />
  );
}
