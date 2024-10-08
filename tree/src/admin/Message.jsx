import React, { useState, useEffect } from 'react'
import AdminNav from './AdminNav'
import { getContactData } from '../service/api'
import MessageCard from './components/MessageCard'

export const Message = () => {

  const [contactData, setContactData] = useState(null)
  const fetchContactData = async () => {
    try {
      const { data } = await getContactData()
      console.log(data)
      setContactData(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchContactData()
  }, [])
  
  return (
    <>
    <AdminNav />
      <div className='h-full w-full flex justify-center items-center bg-[#f8f8f8]'>
        <div className='h-full w-full mt-[10%] flex flex-row flex-wrap justify-center items-center'>
          {
              contactData?.map((data, index) => (
                <MessageCard message={data.message} subject={data.subject} key={index} email={data.email} name={data.name} fetchContactData={fetchContactData} />
              ))
          }
        </div>
      </div>
    </>
  )
}

export default Message
