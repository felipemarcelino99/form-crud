import { forwardRef, InputHTMLAttributes } from "react";
import { useForm } from "@/contexts/FormContext";
import { cn } from "@/lib/utils";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, className, name, ...rest }, ref) => {
    const classes = cn("modal-input", className);
    const { values, setValue, errors } = useForm();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (name) setValue(name, e.target.value);
    };

    return (
      <label className={classes}>
        <fieldset>{label}</fieldset>
        <input
          {...rest}
          name={name}
          ref={ref}
          value={values[name] ?? ""}
          onChange={handleChange}
        />
        {errors[name] && (
          <span className="text-red-500 text-xs font-bold">{errors[name]}</span>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";
