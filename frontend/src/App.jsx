import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from "sonner"
import Login from "./View/Login.jsx"
import Dashboard from "./View/Dashboard.jsx"
import Tasks from "./View/Tasks.jsx"
import Users from './View/Users.jsx'
function Layout(){
  const user= "";
  const location = useLocation();
  return user ?(
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        <Sidebar />
      </div>

      <MobileSidebar />

      <div className='flex-1 overflow-y-auto'>
        <Navbar />

        <div className='p-4 2xl:px-10'>
          <Outlet />
        </div>
      </div>
    </div>
  ):(<Navigate to='Login' state={{from:location}} replace/>)
}
function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/tasks' element={<Tasks />} /> {/* to add categories */}
        <Route path='/team' element={<Users/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Toaster richColors />
    </main>
  )
}

export default App
