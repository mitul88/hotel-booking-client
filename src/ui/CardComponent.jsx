import React from 'react'

const CardComponent = ({children, hover}) => {
  return (
    <div className={`rounded shadow shadow-md border borde-gray-100 w-full py-3 mx-auto ${hover? 'hover:shadow-lg ease-out duration-300' : null}`}>
        {children}
    </div>
  )
}

export default CardComponent