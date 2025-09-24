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
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CartContextProvider from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import CheckOut from './Components/CheckOut/CheckOut.jsx'
import AllOrders from './Components/AllOrders/AllOrders.jsx'
import CategoryDetails from './Components/categoryDetails/CategoryDetails.jsx'

// ✅ Correct QueryClient import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// ✅ Define routes properly (no <Route/> here!)
let routers = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
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
      { path: 'categoryDetails/:id', element: <ProtectedRoute><CategoryDetails /></ProtectedRoute> }, // ✅ fixed
      { path: '*', element: <NotFound /> }
    ]
  }
])

// ✅ Create query client
const query = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <CartContextProvider>
          <UserContextProvider>
            <RouterProvider router={routers} />
            <ReactQueryDevtools />
            <Toaster />
          </UserContextProvider>
        </CartContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
