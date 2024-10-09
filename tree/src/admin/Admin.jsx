import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminNav from './AdminNav';
import Message from '../admin/Message';
import Donate from '../admin/Donate';
import { useEffect } from 'react';
import {Toaster, toast } from 'sonner'
import { Check } from 'lucide-react';

const Admin = () => {
  useEffect(() => {
    toast.success("Admin Login Successful !", {
      className: 'bg-green-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
      icon: <Check />,
      duration: 1000,
    })
  },[])
  return (

      <div>
        <Toaster position='top-right' richColors />
        <AdminNav />
        <Routes>
        <Route path="message" element={<Message />} />
        <Route path="donate" element={<Donate />} />
      </Routes>
      </div>

  );
}

export default Admin;
