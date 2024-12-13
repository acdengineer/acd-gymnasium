import React from "react";

const Buttton = (props) => {
  const {text,func}=props
  return (
      <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
        {text}
      </button>
    
  );
};

export default Buttton;