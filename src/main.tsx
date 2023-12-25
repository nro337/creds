import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './error-page.tsx';
import Users from './routes/Users.tsx';
// import Pocketbase from 'pocketbase';
import { getUsers } from './queries/getUsers.ts';
import Login from './components/Login.tsx';
import Logout from './components/Logout.tsx';

export async function userLoader() {
  const users = await getUsers();
  return { users };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'test',
        element: <div>test</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: 'users',
        element: <Users />,
        errorElement: <ErrorPage />,
        loader: userLoader,
      },
      {
        path: 'login',
        element: <Login />,
        errorElement: <ErrorPage />,
        // action: async ({params, request}) => {
        //   const formData = await request.formData();
        //   return postMessage({username: formData.get('username'), password: formData.get('password')})
        // },
      },
      {
        path: 'logout',
        element: <Logout />,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    path: "/error",
    element: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
