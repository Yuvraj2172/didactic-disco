"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl" >
        Your Ideas, Documents, Plans. Welcome to{" "}
        <span className="underline">didactic </span>{" "}
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium" >didactic is the connected workspace where <br />
      better, faster work happens...</h3>
      <Button>Enter didactic
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
