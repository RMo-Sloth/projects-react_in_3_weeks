import Login from './Login';
import { Cart } from './Cart';
import { Menu } from './Menu';
import { Routes, Route, Link } from 'react-router-dom';
import { Order } from './Order';
import { Orders } from './Orders'
import Register from './Register';
import NotFound from './NotFound';

export function App() {
  return (
    <>
      <header id="pageHeader">
        <nav>
          <Link to="/">Dinner and a movie</Link>
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
          <Link to="/cart">Check out</Link>
          <Link to="/orders">Past orders</Link>
        </nav>
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path="/orders/:orderId" element={<Order />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
      <footer></footer>
    </>
  );
}
