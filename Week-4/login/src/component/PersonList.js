

export default function PersonList({personList}) {

   const renderperson=personList.map((person,index)=>(
       <div key={index} >
            <p>Username : {person.userName}</p>
            <p>Email : {person.mail}</p>
            <p>Password : {person.password}</p>
       </div>
      
   ))
    

  return (
    <div className="mt-5">
     { renderperson}
    </div>
  )
}
/*




*/