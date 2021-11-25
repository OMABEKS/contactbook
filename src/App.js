
import React, {useState} from 'react'
import {AddUserForm} from "./forms/AddUserForms";
import {EditUserForm} from "./forms/EditUserForm";
import {UserTables} from "./tables/UserTables";
import "./App.css"
const App = () => {

    const usersData = [
        { id: 1, name: 'Aхмед', phone: 87287428742 },
        { id: 2, name: 'Камила', phone: 8284724874 },
        { id: 3, name: 'Акжол' , phone: 48784784 },
        { id: 4, name: 'Тариель', phone: 3474833 },
        { id: 5, name: 'Эрбол', phone: 378374878 },
    ]

    const [users, setUsers] = useState(usersData)

    const [editing, setEditing] = useState(false)

    const initialFormState = { id: null, name: '', phone: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        user.id = users.length + 1
        setUsers([ ...users, user ])
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    const editRow = user => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, phone: user.phone })
    }



    return (
        <div className="container">
            <h1>REACT CONTACT BOOK</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Редактировать пользователя</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Добавить пользователя</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>Просмотор пользователей</h2>
                    <UserTables users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}

export default App;