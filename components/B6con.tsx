import React from 'react'

export default function B6con(props) {
    const {users} = props;
  return (
    <>
    <ul>
        {users.map(user => (
            <p key={user.id}>
                <p>Id: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Address: {user.address}</p>
                <p>Email: {user.email}</p>
            </p>
        ))}
    </ul>
    </>
  )
}
