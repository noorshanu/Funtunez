import React from 'react'

function Button({Text}) {
  return (
   <>
   <button className="relative inline-flex items-center justify-center ">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 button-62 rounded-md ">
{Text}
</span>
</button>
   </>
  )
}

export default Button