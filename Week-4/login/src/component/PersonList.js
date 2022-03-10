

export default function PersonList(props) {

  const {user,email,pass}=props

  return (
    
    <div className="mt-5">
     
      <div>
      <p>Username : {user}</p>
      <p>Email : {email}</p>
      <p>Password : {pass}</p>
      </div>
    </div>
  )
}
