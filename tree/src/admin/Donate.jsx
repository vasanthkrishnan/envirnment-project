import React, { useState, useEffect } from 'react'
import AdminNav from './AdminNav'
import { getDonateData } from '../service/api'



export const Donate = () => {
 

  const [donateData, setDonateData] = useState([])
  const fetchDonateData = async () => {
    try {
      const { data } = await getDonateData()
      console.log(data)
      setDonateData(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchDonateData()
  }, [])

  console.log(setDonateData)

  const totalTrees = donateData.reduce((acc, item) => {
    const count = Number(item.noOfTrees) || 0; 
    return acc + count;
  }, 0);

  const totalRupees = donateData.reduce((acc, item) => {
    const rupees = Number(item.rupees) || 0;
    return acc + rupees;
  }, 0);
  
  return (
    <>
    <AdminNav />
      <div className='h-full w-full flex justify-center items-center bg-[#f8f8f8]'>
      <div className='h-full w-full mt-[10%] flex justify-around items-start'>          
          <div className="p-5">
          <h2 className="text-lg font-bold mb-4">Donar Details</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Trees Count</th>
            <th className="border border-gray-300 px-4 py-2">Rupees</th>
          </tr>
        </thead>
        <tbody>
        {
          donateData.length > 0 ? (
        donateData?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.email}</td>
              <td className="border border-gray-300 px-4 py-2">{item.noOfTrees}</td>
              <td className="border border-gray-300 px-4 py-2">{item.rupees}</td>
            </tr>
          ))
        ):(
          <tr>
                    <td colSpan="3" className="text-center border border-gray-300 px-4 py-2">No Donation Data Available</td>
                  </tr>
        )}
        
        </tbody>
      </table>
    </div>
    <div className="p-5">
            <h2 className="text-lg font-bold mb-4">Total Contributions</h2>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Total Trees Count</th>
                  <th className="border border-gray-300 px-4 py-2">Total Rupees Received</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 font-bold">{totalTrees}</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">{totalRupees}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Donate
