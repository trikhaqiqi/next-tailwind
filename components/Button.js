import React from "react";

export default function Button({ children, className, ...props }) {
    return (
        <button {...props} className={`
        ${className
                ?
                className :
                'bg-emerald-500 focus:ring-emerald-200 hover:bg-emerald-600'
            } 
            border border-transparent px-6 py-2.5 text-sm font-medium transition duration-300 focus:outline-none focus:ring rounded-xl text-white `
        }>
            {children}
        </button>
    );
}
