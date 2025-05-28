"use client";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { computerSchema } from "@/lib/schemas/computer-schema";
import { createComputers, updateComputers } from "@/services";
import { useComputer } from "./ComputerContext";
import { format } from "date-fns";
import { revalidateComputersTag } from "@/app/actions/revalidate-computers";

interface IFormContext {
  loading: boolean;
  errors: Record<string, string>;
  values: Record<string, string>;
  setValue: (name: string, value: string) => void;
  submit: () => Promise<void>;
}

interface IFormProvider {
  children: ReactNode;
}

const FormContext = createContext<IFormContext | undefined>(undefined);

const FormProvider: React.FC<IFormProvider> = ({ children }) => {
  const { computer, setComputer, closeModal } = useComputer();
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (computer) {
      setValues({
        name: computer.name ?? "",
        property: computer.property ?? "",
        identifier: computer.identifier?.toString() ?? "",
        purchaseData: format(new Date(computer.purchaseData), "yyyy-MM-dd"),
      });
    } else {
      setValues({});
    }
  }, [computer]);

  const setValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submit = useCallback(async () => {
    setLoading(true);

    const result = computerSchema.safeParse(values);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as Record<string, string>);
      setLoading(false);
      return;
    }

    if (computer) {
      await updateComputers({
        ...result.data,
        id: computer.id,
      });
      setComputer(null);
    } else {
      await createComputers(result.data);
    }

    await revalidateComputersTag();
    setValues({});
    setErrors({});
    setLoading(false);
    closeModal();
  }, [
    setValues,
    setComputer,
    setErrors,
    setLoading,
    closeModal,
    computer,
    values,
  ]);

  const contextValues = useMemo(
    () => ({
      loading,
      values,
      errors,
      setValue,
      submit,
    }),
    [values, errors, loading, submit]
  );

  return (
    <FormContext.Provider value={contextValues}>
      {children}
    </FormContext.Provider>
  );
};

const useForm = (): IFormContext => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useForm must be used within a FormProvider");
  return context;
};

export { FormProvider, useForm };
