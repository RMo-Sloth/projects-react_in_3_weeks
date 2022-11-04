import { Orders } from './Orders';
import { Cart } from './Cart';
import { Order } from './Order';
import Register from './Register';
import Login from './Login';

export function App() {
  return (
    <>
      <header>
        <nav>
        </nav>
      </header>
      <main>
        <Orders />
        <Order />
        <Register />
        <Cart />
        <Login />
      </main>
      <footer></footer>
    </>
  );
}
