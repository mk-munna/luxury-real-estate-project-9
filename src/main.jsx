import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root/Root.jsx'
import ErrorPage from './ErrorPage/ErrorPage.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DataContextProvider from './Provider/DataContextProvider.jsx'
import EstateDetails from './Pages/EstateDetails/EstateDetails.jsx'
import AuthContextProvider from './Provider/AuthContextProvider.jsx'
import PrivateRoute from './PrivateRoutes/PrivateRoute.jsx'
import { HelmetProvider } from 'react-helmet-async'
import UserProfile from './Pages/UserProfile/UserProfile.jsx'
import UpdateProfile from './Pages/UserProfile/UpdateProfile.jsx'
// import { AuthContext } from './Provider/AuthContextProvider.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },
      {
        path: '/all-product',
        element: <SignUp></SignUp>
      },
      {
        path: '/estate/:id',
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: '/update-profile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)