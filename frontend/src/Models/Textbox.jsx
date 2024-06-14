import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ type, placeholder, label, className, register, name, error }, ref) => {
    return (
      <div className='w-full flex flex-col gap-2'>
        {label && (
          <label htmlFor={name} className='text-slate-800 font-medium'>
            {label}
          </label>
        )}

        <div className='relative'>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "w-full max-w-lg bg-white px-4 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition duration-150 ease-in-out",
              { "border-red-500 focus:ring-red-300": error },
              className
            )}
          />
        </div>
        {error && (
          <span className='text-xs text-red-600 mt-1'>{error}</span>
        )}
      </div>
    );
  }
);

export default Textbox;
