
import './App.css';
import react from 'react'
import { BrowserRouter as Router, Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import Player from './Pages/Player';
import Trending from './Pages/Trending';
import Feed from './Pages/Feed';
import Favorites from './Pages/Favorites';
import Library from './Pages/Library';
function App() {

  return (
    <Router>
      <div className='main'>
        <div className='sidebar text-md text-white opacity-70 font-semibold'>

          <div className='logo'>
            <Link to='/'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 0l-15.996 3.585v13.04c-2.979-.589-6.004 1.671-6.004 4.154 0 2.137 1.671 3.221 3.485 3.221 2.155 0 4.512-1.528 4.515-4.638v-10.9l12-2.459v8.624c-2.975-.587-6 1.664-6 4.141 0 2.143 1.715 3.232 3.521 3.232 2.14 0 4.476-1.526 4.479-4.636v-17.364z" /></svg>
            </Link>
          </div>

          <div className='flex flex-col gap-6'>
            <Link to='/feed' className='flex flex-col items-center gap-1'>
              <i class="fa-solid fa-house"></i>
              <span>Feed</span>
            </Link>
            <Link to='/trending' className='flex flex-col items-center gap-1'>
              <i class="fa-solid fa-fire-flame-curved"></i>
              <span>Trending</span>
            </Link>
           <div className='play w-20 h-16 rounded-xl'>
           <Link to='/' className=' flex flex-col items-center mt-2 gap-1' >
              <i class="fa-solid fa-play"></i>
              <span>Player</span>
            </Link>
           </div>
            <Link to='/favorites' className='flex flex-col items-center gap-1'>
              <i class="fa-solid fa-heart"></i>
              <span>Favorites</span>
            </Link>
            <Link to='/library' className='flex flex-col items-center gap-1'>
              <i class="fa-solid fa-book-open"></i>
              <span>Library</span>
            </Link>
          </div>

          <div>
            <Link to='/settings' className='flex flex-col items-center gap-1'>
            <i class="fa-solid fa-gear"></i>
              <span>Settings</span>
            </Link>
          </div>

        </div>

       <div className='player p-8'>
       <Routes>
        <Route path='/' element={<Player/>}></Route>
        <Route path='/trending' element={<Trending/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/library' element={<Library/>}></Route>
       </Routes>
       </div>

      </div>

      

    </Router>
  );
}

export default App;
