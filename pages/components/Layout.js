import React from "react";

export default function Layout({ children }) {
    return (
        <div className="flex items-center justify-center antialiased tracking-tighter font-sans bg-gray-100 min-h-screen">
            {children}
        </div>
    );
}
