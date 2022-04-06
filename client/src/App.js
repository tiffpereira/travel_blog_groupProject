import { Route, Routes } from 'react-router-dom'
import Posts from './components/Posts'
import Comments from './components/Comments'
import Home from './components/Home'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<Comments />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
