import React from 'react'

const CardComponent = ({children}) => {
  return (
    <div className="rounded shadow shadow-md border borde-gray-100 w-full py-3 mx-auto">
        {children}
    </div>
  )
}

export default CardComponent