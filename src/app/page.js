"use client"

import Button from "@/components/shared/button/Button";

export default function Home() {

    const user = localStorage.getItem('user')
    

  return (
    <>
    <div className="flex justify-center min-h-screen flex-col gap-y-8 items-center"> 
      {user ?
      <>
       <h3>You Are Logged In</h3>
        <Button/> 
      </>: "You are not logged in"}
     
    </div>
    </>
  );
}
