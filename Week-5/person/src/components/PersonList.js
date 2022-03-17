import React from 'react'


export default function PersonList({PersonList}) {
 
 
  return (
    <>
    <div className='col-6 mt-5 ms-5'>
      <div className='bg-primary fs-2 text-center text-white p-1'>PERSON LIST</div>
    <table className="table mt-3">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">About</th>
    </tr>
  </thead>
  <tbody>
  {PersonList.map(person =>(
              <tr key={person.lastName}>
                  <td className='td'>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.email}</td>
                  <td>{person.password}</td>
                  <td>{person.about}</td>
              </tr>
      ))}
  </tbody>
</table>
    </div>
     
    </>
  )
}
