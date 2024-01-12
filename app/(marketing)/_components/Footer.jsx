import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className=" flex w-full p-6 z-50 items-center bg-background">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant={"ghost"} size="sm">
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
