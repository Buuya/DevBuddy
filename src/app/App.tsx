import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { DevEasterEggs } from './components/DevEasterEggs';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DevEasterEggs />
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}