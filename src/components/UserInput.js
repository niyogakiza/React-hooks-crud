import React, { useState } from 'react'
import UserTable from './UserTable';
import usersData from '../data/usersData'
import AddUserForm from './AddUserForm'

const UserInput = () => {
  const initialBookState = {
    title: '',
    available: false
  }

  const initialFormState = { id: null, name: '', username: '' }

  const [book, setBook] = useState(initialBookState)
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const updateBook = book => {
    setBook({ title: book.title, available: book.available })
  }

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }


  return (
    <div className='container'>
    <h1>Users</h1>

    <div className='flex-row'>
    <div className='flex-large'>
       <h2>Add user</h2>
       <AddUserForm addUser={addUser} updateUser={updateUser} />
    </div>
    <div className='flex-large'>
       <h2>View users</h2>
       <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
    </div>
    </div>
    </div>
  )
}

export default UserInput