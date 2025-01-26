import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <main className="h-screen w-screen">
      <Toaster />
      <Outlet />
    </main>
  )
}

export default Root