import { Loader } from "lucide-react";
import React from "react";

export const Loading = () => {
  return (
    <div className="w-full max-w-full py-8 flex items-center justify-center">
      <Loader className="animate-spin" color="white" />
    </div>
  );
};
