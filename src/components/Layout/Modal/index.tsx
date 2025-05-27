"use client";
import { FormModal } from "@/components/Common/FormModal";
import { useComputer } from "@/contexts/ComputerContext";
import { useForm } from "@/contexts/FormContext";

export default function Modal() {
  const { isModalOpen, closeModal, action } = useComputer();
  const { submit, loading } = useForm();

  return (
    <FormModal.Root isOpen={isModalOpen} onClose={closeModal}>
      <FormModal.Title label="Computador" action={action} />
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
        <FormModal.Action onClick={submit} disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </FormModal.Action>
        <FormModal.Action variant="cancel" onClick={closeModal}>
          Cancelar
        </FormModal.Action>
      </FormModal.Actions>
    </FormModal.Root>
  );
}
