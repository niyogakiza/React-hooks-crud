import React, { useState } from 'react'
import UserTable from './UserTable';
import usersData from '../data/usersData'

const UserInput = () => {
  const initialBookState = {
    title: '',
    available: false
  }
  const [book, setBook] = useState(initialBookState)
  const [users, setUsers] = useState(usersData)
  const updateBook = book => {
    setBook({ title: book.title, available: book.available })
  }
  return (
    <div className='container'>
    <h1>Users</h1>

    <div className='flex-row'>
    <div className='flex-large'>
       <h2>Add user</h2>
    </div>
    <div className='flex-large'>
       <h2>View users</h2>
       <UserTable users={users} />
    </div>
    </div>
    </div>
  )
}

export default UserInput