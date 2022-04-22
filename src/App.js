import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const productsName = [
    { name: 'Laptop', price: '50000', color: 'Black' },
    { name: 'Mobile', price: '20000', color: 'Gray' },
    { name: 'Watch', price: '10000', color: 'Red' },
    { name: 'NotePad', price: '35000', color: 'Yellow' },
    { name: 'NoteBook', price: '40000', color: 'Tomato' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {
          productsName.map(product => <Products name={product.name} price={product.price} color={product.color}></Products>
          )
        } */}
        {/* <Friend></Friend> */}
        <ExternalUsers></ExternalUsers>

      </header>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h1>External</h1>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div style={{ border: '3px solid red', margin: '20px' }}>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  )
}

function Products(props) {
  return (
    <div className='product'>
      <h1>Product Name: {props.name}</h1>
      <h3>Price Name: {props.price}</h3>
      <h6>Color: {props.color}</h6>
    </div>
  )
}
function Friend() {
  const [count, setCount] = useState(55)
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const decreaseCount = () => setCount(count - 1);


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
