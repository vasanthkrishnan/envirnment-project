import axios from "axios"

const Api = "http://localhost:5555"

const addContactData = (contactData) => axios.post(`${Api}/contact/add`, contactData)
const addDonateData = (donateData) => axios.post(`${Api}/donate/add`, donateData)
const getContactData = () => axios.get(`${Api}/contact/all`)
const deleteContactData = (id) => axios.delete(`${Api}/contact/del/${id}`)

export { addContactData, addDonateData, getContactData, deleteContactData }