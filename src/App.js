import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes } from 'react-router-dom';

function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
      fetchBlogPosts();
    },[])
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>


    // <div className="w-full h-full flex flex-col gap-y-1 items-center">
    //    <Header/>
    //    <Blogs/>
    //    <Pagination/>
    // </div>
  );
}

export default App;
