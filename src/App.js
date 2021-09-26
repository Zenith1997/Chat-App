import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50;
  const link = "http://www.google.com"


  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <div className="content">
      <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
