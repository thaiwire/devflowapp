import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import React from "react";

const Home = async () => {
  const session = await auth();
  console.log("session", session);

  return (
    <div>
      <h1 className="h1-bold">Welcome to Home Page</h1>

      <form className="px-10 pt-[100px]" action = {async () => {
        "use server";
        await signOut({
          redirectTo: ROUTES.SIGN_IN,
        });
       }}>
        <Button type="submit">
          Logout
          </Button> 
      </form>
       
    </div>
  );
};

export default Home;
