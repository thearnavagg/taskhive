
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../Models/Button";
import Textbox from "../Models/Textbox";

const Login = () => {
  const [user, setUser] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHandler = (data) => {
    const dummyUser = {
      name: "Dummy User",
      email: data.email
    };
    localStorage.setItem("userInfo", JSON.stringify(dummyUser));
    setUser(dummyUser);
    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-lg flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-8">
        {/* Left side */}
        <div className="flex-grow w-full lg:w-2/3 flex flex-col items-center justify-center p-5">
          <div className="w-full max-w-lg lg:max-w-2xl flex flex-col items-center gap-6 lg:gap-8">
            <span className="py-2 px-4 border rounded-full text-sm lg:text-lg border-gray-300 text-gray-700 shadow-sm">
              Manage all your tasks in one place 🤘
            </span>
            <p className="flex flex-col gap-2 lg:gap-5 text-4xl lg:text-6xl font-extrabold text-center text-blue-800">
              <span>TaskHive</span>
              <span>The One-Stop Task Manager</span>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full lg:w-1/2 flex flex-col gap-y-8 bg-white p-10 rounded-lg shadow-lg"
        >
          <p className="text-2xl font-bold text-center">Welcome back!</p>
          <div className="flex flex-col gap-y-5">
            <Textbox
              placeholder="youremail@email.com 📧"
              type="email"
              name="email"
              label="Email Address"
              className="w-full rounded-full"
              register={register("email", {
                required: "Email Address is Required!",
              })}
              error={errors.email ? errors.email.message : ""}
            />
            <Textbox
              placeholder="Your Password 🔑"
              type="password"
              name="password"
              label="Password"
              className="w-full rounded-full"
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password.message : ""}
            />
            <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
              Forget Password?
            </span>
            <Button
              type="submit"
              label="Submit"
              className="w-full h-10 bg-blue-700 text-white rounded-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Button from "../Models/Button";
// import Textbox from "../Models/Textbox";
// import { useLoginMutation } from "../Controller/redux/slices/authApiSlice";
// import { setCredentials } from "../Controller/redux/slices/authSlice";
// import Loading from "../Models/Loader";

// const Login = () => {
//   const { user } = useSelector((state) => state.auth);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [login, { isLoading }] = useLoginMutation();

//   const submitHandler = async (data) => {
//     try {
//       const result = await login(data).unwrap();
//       dispatch(setCredentials(result));
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.data?.message || error.message);
//     }
//   };

//   useEffect(() => {
//     user && navigate("/dashboard");
//   }, [user]);

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-screen-lg flex flex-col lg:flex-row items-center justify-center gap-8 p-4 lg:p-8">
//         {/* Left side */}
//         <div className="flex-grow w-full lg:w-2/3 flex flex-col items-center justify-center p-5">
//           <div className="w-full max-w-lg lg:max-w-2xl flex flex-col items-center gap-6 lg:gap-8">
//             <span className="py-2 px-4 border rounded-full text-sm lg:text-lg border-gray-300 text-gray-700 shadow-sm">
//               Manage all your tasks in one place 🤘
//             </span>
//             <p className="flex flex-col gap-2 lg:gap-5 text-4xl lg:text-6xl font-extrabold text-center text-blue-800">
//               <span>TaskHive</span>
//               <span>The One-Stop Task Manager</span>
//             </p>
//           </div>
//         </div>

//         <form
//           onSubmit={handleSubmit(submitHandler)}
//           className="w-full lg:w-1/2 flex flex-col gap-y-8 bg-white p-10 rounded-lg shadow-lg"
//         >
//           <p className="text-2xl font-bold text-center">Welcome back!</p>
//           <div className="flex flex-col gap-y-5">
//             <Textbox
//               placeholder="youremail@email.com 📧"
//               type="email"
//               name="email"
//               label="Email Address"
//               className="w-full rounded-full"
//               register={register("email", {
//                 required: "Email Address is Required!",
//               })}
//               error={errors.email ? errors.email.message : ""}
//             />
//             <Textbox
//               placeholder="Your Password 🔑"
//               type="password"
//               name="password"
//               label="Password"
//               className="w-full rounded-full"
//               register={register("password", {
//                 required: "Password is required!",
//               })}
//               error={errors.password ? errors.password.message : ""}
//             />
//             <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
//               Forget Password?
//             </span>
//             { isLoading ? <Loading/> : <Button
//               type="submit"
//               label="Submit"
//               className="w-full h-10 bg-blue-700 text-white rounded-full"
//             />}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
