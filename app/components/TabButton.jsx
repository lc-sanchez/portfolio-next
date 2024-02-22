import React from 'react'

export const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b-2 border-indigo-600' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-mono font-semibold ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}
