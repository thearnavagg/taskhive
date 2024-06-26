// import { Transition } from "@headlessui/react";
// import clsx from "clsx";
// import { Fragment } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
// import { Toaster } from "sonner";
// import { setOpenSidebar } from "./Controller/redux/slices/authSlice.js";
// import Navbar from "./Models/Navbar.jsx";
// import Sidebar from "./Models/Sidebar.jsx";
// import Dashboard from "./View/Dashboard.jsx";
// import Tasks from "./View/Tasks.jsx";
// import Users from "./View/Users.jsx";
// import Login from "./View/Login.jsx";

// function Layout() {
//   const { user } = useSelector((state) => state.auth);
//   const location = useLocation();
//   return user ? (
//     <div className="w-full h-screen flex flex-col md:flex-row">
//       <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
//         <Sidebar />
//       </div>

//       <MobileSidebar />

//       <div className="flex-1 overflow-y-auto">
//         <Navbar />

//         <div className="p-4 2xl:px-10">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Navigate to="Login" state={{ from: location }} replace />
//   );
// }

// const MobileSidebar = () => {
//   const { isSidebarOpen } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const closeSidebar = () => {
//     dispatch(setOpenSidebar(false));
//   };

//   return (
//     <Transition
//       show={isSidebarOpen}
//       as={Fragment}
//       enter="transition-opacity duration-700"
//       enterFrom="opacity-0"
//       enterTo="opacity-100"
//       leave="transition-opacity duration-700"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <div
//         className={clsx(
//           "fixed inset-0 z-50 flex",
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         )}
//       >
//         <div
//           className="bg-gray-800 opacity-50 w-full h-full"
//           onClick={closeSidebar}
//         ></div>
//         <div className="bg-white w-3/4 h-full fixed top-0 left-0">
//           <Sidebar closeSidebar={closeSidebar} />
//         </div>
//       </div>
//     </Transition>
//   );
// };

// function App() {
//   return (
//     <main className="w-full min-h-screen bg-[#f3f4f6]">
//       <Routes>
//         <Route element={<Layout />}>
//           <Route index path="/" element={<Navigate to="/dashboard" />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/team" element={<Users />} />
//         </Route>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Toaster richColors />
//     </main>
//   );
// }

// export default App;
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { setOpenSidebar } from "./Controller/redux/slices/authSlice.js";
import Navbar from "./Models/Navbar.jsx";
import Sidebar from "./Models/Sidebar.jsx";
import Dashboard from "./View/Dashboard.jsx";
import Tasks from "./View/Tasks.jsx";
import Users from "./View/Users.jsx";
import Login from "./View/Login.jsx";
import TaskDetails from "./View/TaskDetail.jsx";
import { IoClose } from "react-icons/io5";

function Layout() {
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      <MobileSidebar />

      <div className="flex-1 overflow-y-auto">
        <Navbar />

        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/log-in" state={{ from: location }} replace />
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition-opacity duration-700"
        enterFrom="opacity-x-10"
        enterTo="opacity-x-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-x-100"
        leaveTo="opacity-x-0"
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => closeSidebar()}
          >
            <div className="bg-white w-3/4 h-full">
              <div className="w-full flex justify-end px-5 mt-5">
                <button
                  onClick={() => closeSidebar()}
                  className="flex justify-end items-end"
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className="-mt-10">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6] ">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>

        <Route path="/log-in" element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;