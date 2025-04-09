"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github") => {
    // Add your sign-in logic here
    try {
      await signIn(provider,{
        callbackUrl: ROUTES.HOME,
        redirect: false,
      })
    } catch (error) {
      console.log("Error signing in:", error);
      toast({
        title: "Error signing in",
        description: 
           error instanceof Error
           ? error.message
           : "An error occurred while signing in.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={24}
          height={24}
          className="invert-colors mr-2.5 object-contain "
        />
        <span>Login in with Github</span>
      </Button>
      <Button className={buttonClass}>
        <Image
          src="/icons/google.svg"
          alt="GitHub"
          width={24}
          height={24}
          className="invert-colors mr-2.5 object-contain "
        />
        <span>Login in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
