import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { computerSchema } from "@/lib/schemas/computer-schema";
import { useComputer } from "@/contexts/ComputerContext";

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
  const { fetchData, closeModal } = useComputer();

  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const setValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async () => {
    setLoading(true);

    const result = computerSchema.safeParse(values);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors as Record<string, string>);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/computers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) throw new Error("Erro ao cadastrar");

      await fetchData();

      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      setValues({});
      setLoading(false);
    }
  };

  const contextValues = useMemo(
    () => ({
      loading,
      values,
      errors,
      setValue,
      submit,
    }),
    [values, errors, loading]
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
