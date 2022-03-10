import CardsPerson from './CardsPerson';
import ChildrenCards from './ChildrenCards';
import Friends from "./Friends"
import ChildrenNumber from './ChildrenNumber';
import FriendNumber from './FriendNumber';

export default function MainConmponent(props){
   
    return (
        <div>
          
        {props.data.map(person=>{
    return    <div className='row mt-5'>
                <div className='col-3'>
                    <CardsPerson 
                            name={person.first_name}
                            lastname={person.last_name}
                            mail={person.email}
                            gender={person.gender}
                            adres={person.address}
                            picture={person.avatar}
                            salary={person.salary}
                    />
                </div>
                <div className='col-9'>
                <div className='row'>
                <ChildrenNumber number={person.children.length}/>
                {person.children.map(child=>{
                   
                return <ChildrenCards
                           
                            ad={child.firstName}
                            soyadi={child.lastName}
                            cinsiyet={child.gender}
                            picture={child.avatar}
                        />
                })}
                <div className='row mt-4'>
                <FriendNumber number={person.friends.length}/>
                {person.friends.map(friend=>{
                            return <Friends
                            fname={friend.firstName}
                            gender={friend.gender}
                            birthday={friend.birthday}
                            phone={friend.phone}
                            picture={friend.avatar}
                            />
                        })}  
                </div> 
                 </div>
                 </div>
            </div>
        })}
        </div>
      
    )
  
}