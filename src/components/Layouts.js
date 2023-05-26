import React from 'react'

const Layouts = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block-0 z-0 p-32${className}`}>
        {children}
    </div>
  )
}

export default Layouts
