// common button to use the same CSS classes wherever this button is used
// to avoud re-writing CSS classes

import React from 'react'

function Button({children, type = 'button', bgColor = 'bg-blue-600', textColor='text-white', className='', ...props}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button
