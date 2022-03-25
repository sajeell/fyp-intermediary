import { Route, Routes } from 'react-router-dom'
import './App.css'

import Dashboard from './components/dashboard/Dashboard'
import Drawer from './components/dashboard/drawer/Drawer'
import Intermediary from './components/intermediary/Intermediary'
import Login from './components/login/Login'
import Orders from './components/orders/Orders'
import Products from './components/products/Products'

function App() {
  return (
    <div className='app-wrapper'>
      <Routes>
        <Route
          exact
          path='/dashboard'
          element={
            <>
              <main className='drawer'>
                <Drawer dashboard={true} />
              </main>
              <main className='right-content'>
                <Dashboard />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/products'
          element={
            <>
              <main className='drawer'>
                <Drawer products={true} />
              </main>
              <main className='right-content'>
                <Products />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/orders'
          element={
            <>
              <main className='drawer'>
                <Drawer orders={true} />
              </main>
              <main className='right-content'>
                <Orders />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/intermediary'
          element={
            <>
              <main className='drawer'>
                <Drawer intermediary={true} />
              </main>
              <main className='right-content'>
                <Intermediary />
              </main>
            </>
          }
        />

        <Route
          exact
          path='/'
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
