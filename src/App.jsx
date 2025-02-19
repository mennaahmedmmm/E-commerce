
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Products from './Components/Products/Products.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import UserContextProvider from './context/UserContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CartContextProvider from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import CheckOut from './Components/CheckOut/CheckOut';
import AllOrders from './Components/AllOrders/AllOrders';
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from './../node_modules/@tanstack/query-core/src/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

let routers = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { index: true, element: <Register /> },
    { path: 'login', element: <Login /> },
    { path: 'home', element: <ProtectedRoute><Home /></ProtectedRoute> },
    { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
    { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
    { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
    { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
    { path: 'checkout', element: <ProtectedRoute><CheckOut /></ProtectedRoute> },
    { path: 'allorders', element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
    { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },

    { path: '*', element: <NotFound /> }
  ]
}])
const query =new QueryClient()
function App() {

  return <>
  <QueryClientProvider client={query}>

  <CartContextProvider>
  <UserContextProvider>
      <RouterProvider router={routers}></RouterProvider>
      <ReactQueryDevtools/>
      <Toaster/>

    </UserContextProvider>
  </CartContextProvider>

  </QueryClientProvider>
  
    
  </>






}

export default App
