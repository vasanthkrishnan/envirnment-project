import React, { useState } from 'react'
import { User, Mail, Book, Send } from 'lucide-react'

export const MessageCard = ({message, subject, id, email, name, fetchContactData}) => {

  return (
    <>
        <div className='w-[300px] h-[300px] m-[1.5rem] bg-[#fff] rounded-lg shadow-lg flex flex-col'>
          <div className='h-[80%] w-full flex justify-center items-center'>
            <div className='h-full w-full text-[16px] p-6 break-words'>{message}</div>
          </div>
          <div className='h-[20%] w-full bg-[#efebeb] rounded-md border-gray-400 flex flex-row gap-8 justify-center items-center'>
          <User className={`h-10 w-10 ${name ? `hover:${name}` : ''}`} />
            <Mail className='h-10 w-10' />
            <Book className='h-10 w-10' />
            <Send className='h-10 w-10' />
          </div>
        </div>
    </>
  )
}

export default MessageCard
