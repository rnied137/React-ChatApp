import React, { useContext } from 'react'
import { Chat } from './Components/Chat';
import { RecentChats } from './Components/RecentChats';
import { Sidebar } from './Components/Sidebar'
import UserContext from './Providers/UserContextProvider'

export const Test = () => {

    const userContext = useContext(UserContext);

    const tryIt=()=>{
        userContext.setCurrentUser('magda');
    }
    return (
        <div>
             <button style={{width:"300px",height:"200px"}} onClick={()=>tryIt()}></button>
            <p>{userContext.username}</p>
          <Sidebar/>
            {userContext.isAuth ?  <> <RecentChats/>
            <Chat/></> : <div>Not logged get the fuck out!</div>}
          
          
        </div>
    )
}
