import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import SinglePostPage from './Pages/SinglePostPage.jsx';
import Register from './Pages/Register.jsx';
import Write from './Pages/Write.jsx';
import About from './Pages/About.jsx';
import PostListPage from './Pages/PostListPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }

// Error boundary component
function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
        <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Home
        </a>
      </div>
    </div>
  );
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "write",
        element: <Write />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "postlistpage",
        element: <PostListPage />,
      },
      {
        path: "post/:slug",
        element: <SinglePostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
      <ToastContainer position='bottom-right' />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
)
