import React from 'react'
"use server"
interface SerImage{
  
    albumId: number,
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;

}

const UserPage = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/photos',
   {cache:'no-store' } );
    const serimage: SerImage[] = await res.json();


   return (
    <div className='text-primary'>
    
    <p>{new Date().toLocaleTimeString()}</p>
    <table className="table text-primary table-bordered bg-blend-darken">
      <thead className="text-primary">
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      {serimage.map(serimage =><tr key={serimage.id}><td>{serimage.title}</td>
      <td>{serimage.url}</td></tr>)}

      </tbody>
    </table>
    </div>
  )
}

export default UserPage