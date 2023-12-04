import React from 'react'
import Navbar from '../components/Navbar';
interface User{
    id: number;
    name: string;
    email: string;

}

const UserPage = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users',
   {cache:'no-store' } );
    const users: User[] = await res.json();


   return (
    
    <div className='text-primary'>
      <Navbar />
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className="table text-primary table-bordered bg-blend-darken">
      <thead className="text-primary">
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      {users.map(user =><tr key={user.id}><td>{user.name}</td>
      <td>{user.email}</td></tr>)}

      </tbody>
    </table>
    </div>
  )
}

export default UserPage