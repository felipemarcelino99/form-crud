"use client";
import { FormModal } from "@/components/Common/FormModal";
import { useComputer } from "@/contexts/ComputerContext";
import { useForm } from "@/contexts/FormContext";
import { Actions } from "@/enums";

export default function Modal() {
  const { isModalOpen, closeModal } = useComputer();
  const { submit, loading } = useForm();

  return (
    <FormModal.Root isOpen={isModalOpen} onClose={closeModal}>
      <FormModal.Title label="Computador" action={Actions.CREATE} />
      <FormModal.Form>
        <FormModal.Input
          label="Nome"
          type="text"
          name="name"
          placeholder="Informe o nome do computador"
        />
        <FormModal.Input
          label="Bem patrimonial"
          type="text"
          name="property"
          placeholder="Informe o código do bem patrimonial"
        />
        <FormModal.Input
          label="Indentificador"
          type="number"
          name="identifier"
          placeholder="Informe o identificador"
        />
        <FormModal.Input
          label="Data compra"
          type="date"
          name="purchaseData"
          placeholder="Informe a data da compra"
        />
      </FormModal.Form>
      <FormModal.Actions>
        <FormModal.Action
          label={loading ? "Salvando..." : "Salvar"}
          onClick={submit}
          disabled={loading}
        />
        <FormModal.Action
          label="Cancelar"
          variant="cancel"
          onClick={closeModal}
        />
      </FormModal.Actions>
    </FormModal.Root>
  );
}
