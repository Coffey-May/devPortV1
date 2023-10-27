import React from "react";
import { useSession,signIn,signOut } from "next-auth/react";

const Login = () => {
  const {data:session} = useSession();
    console.log(session);

if(session){
  return (
   <div  className="text-white">
    <p>Welcome,{session.user.email}</p>
    <button onClick={()=>signOut()}>Sign out</button>
   </div>
  );
    }else{
      return( 
         <div className="text-white">
        <p>You are not signed in.</p>
        <button onClick={()=> signIn()}>Sign in</button>
        </div>
    );
}
}; 

export default Login


