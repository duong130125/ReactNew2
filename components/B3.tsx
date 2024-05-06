import React, {useState} from 'react'
interface User {
    id: number;
    name: string;
    address: string;
  }
export default function B3() {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Nguyễn Đình Dương', address: 'Long Thành, Nghệ An' },
    ]);
  return (
    <>
    <ul>
        {users.map((uesr) => ( 
            <p key={uesr.id}>
                <h1>Họ và tên: {uesr.name}</h1>
            </p>
        ))}
    </ul>
    </>
  )
}
