import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <Toaster />
      <Outlet />
    </main>
  )
}

export default Root