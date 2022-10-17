import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import useDarkMode from './useDarkMode';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Categories from './pages/Categories';
import BlogDetailView from './pages/BlogDetailView';
import CreatPost from './pages/CreatPost';

function App() {
  useDarkMode();
  return (
    <div className="App overflow-x-hidden dark:bg-[#0f172a] dark:text-white transition duration-500">
      <div className='fixed z-10 w-full top-0 '>
        <Header />
      </div>
     <Routes>
      <Route path="/" element = { <HomePage/> } />
      <Route path="/cat/:id" element = { <Categories/> } />
      <Route path="/blog/:id" element = { <BlogDetailView/> } />
      <Route path="/create-post" element = { <CreatPost/> } />
      
      <Route path="*" element = { <NotFound/> } />

     </Routes>
    </div>
  );
}

export default App;
