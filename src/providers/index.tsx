"use client";
import { ComputerProvider } from "@/contexts/ComputerContext";
import { FormProvider } from "@/contexts/FormContext";
import React from "react";

export interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <ComputerProvider computers={null}>
      <FormProvider>{children}</FormProvider>
    </ComputerProvider>
  );
};
