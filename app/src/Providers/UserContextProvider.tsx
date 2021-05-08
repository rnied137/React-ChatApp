import { createContext, useState} from 'react';


 const UserContext = createContext<ContextFunction>({
    isAuth: false,
    username:'Feliciana',
    userimage:'https://cdn.galleries.smcloud.net/t/galleries/gf-emK6-Xbp2-JSAF_m-jak-milosc-odcinek-1406-joasia-barbara-kurdej-szatan-664x442-nocrop.jpg',
    setCurrentUser: ()=>{}
});


interface IuserContext  {
isAuth:boolean,
username:string,
userimage:string,
};


interface ContextFunction extends IuserContext{
    setCurrentUser: (user:string)=>void;
}

interface IProps {
    children: React.ReactNode | null;
};

export const UserContextProvider = (props:IProps) => {

    const [ userContext, setUserContext ] = useState<IuserContext>({
        isAuth:false,
        username:'',
        userimage:'',
    
    });

    const setCurrentUserHandler=(user:string)=> {
        setUserContext({...userContext,isAuth:true,username:user})
        console.log('aaaa')
        console.log(userContext.isAuth)
        console.log(userContext.username)
        console.log(userContext.isAuth)
    }

    const context = {
        isAuth: userContext.isAuth,
        username: userContext.username,
        userimage: userContext.userimage,
        setCurrentUser:setCurrentUserHandler,

    }
    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;