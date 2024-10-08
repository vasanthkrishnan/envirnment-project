import React, { useState } from 'react'
import { User, Mail, Book, Send, Trash } from 'lucide-react'
import { deleteContactData } from '../../service/api'
import { Toaster, toast } from 'sonner'

export const MessageCard = ({message, subject, id, email, name, fetchContactData}) => {

  const handleDelete = async (id) => {
    try {
      const response = await deleteContactData(id)
      if(response.status === 200) {
        toast.error("Deleted !", {
          className: 'bg-red-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <Check />,
          duration: 1000,
        })
      }
      fetchContactData()
    } catch (error) {
      toast.error(error.message, {
        className: 'bg-red-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <Check />,
        duration: 1000,
      })
    }
  }
  return (

    <>
    <Toaster position='top-right' richColors />
        <div className='relative w-[300px] h-[300px] m-[1.5rem] bg-[#fff] rounded-lg shadow-lg flex flex-col'>
    <div className='absolute top-2 right-2 cursor-pointer'>
        <Trash className='h-8 w-8 text-gray-500'  onClick={() => {handleDelete(id) }}/>
    </div>
    <div className='h-[80%] w-full flex justify-center items-center'>
        <div className='h-full w-full text-[16px] p-6 mt-[1.5rem] break-words'>{message}</div>
    </div>
    <div className='h-[20%] w-full bg-[#efebeb] rounded-md border-gray-400 flex flex-row gap-8 justify-center items-center'>
    <div className='relative group'>
    <User className='h-10 w-10 cursor-pointer' />
    <div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap'>
        {name}
    </div>
    </div>
    <div className='relative group'>
    <Mail className='h-10 w-10 cursor-pointer' />
    <div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap'>
        {email}
    </div>
    </div>
    <div className='relative group'>
    <Book className='h-10 w-10 cursor-pointer' />
    <div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap'>
        {subject}
    </div>
    </div>
    <a href={`mailto:${email}`} className='h-10 w-10 flex justify-center items-center cursor-pointer'>
        <Send className='h-10 w-10' />
    </a>
</div>
</div>

    </>
  )
}

export default MessageCard
