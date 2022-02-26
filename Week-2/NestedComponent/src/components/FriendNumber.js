import React from 'react'

function FriendNumber(props) {
  return (
    <div className='bg-danger ms-4 me-5'style={{ height: '3rem' ,width:"1100px"}}>
                <p className='text-white fs-3 text-start ms-2'>Friend {props.number}</p>
   </div>
  )
}

export default FriendNumber