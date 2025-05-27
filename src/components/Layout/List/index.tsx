"use client";
import { Table } from "@/components/Common/Table";
import { useComputer } from "@/contexts/ComputerContext";
import { Computer } from "@/types";
import { format } from "date-fns";
import { use } from "react";
interface ListProps {
  computers: Promise<Computer[]>;
}

export default function List({ computers }: ListProps) {
  const {
    error,
    id,
    openModal,
    setComputerId,
    setComputerData,
    deleteComputer,
  } = useComputer();
  const data = use(computers);

  return (
    <>
      {error && <p className="error-message">{error}</p>}
      <Table.Root>
        <Table.Header>
          <Table.Actions>
            <Table.Action onClick={openModal} size="md">
              Adicionar
            </Table.Action>
            <Table.Action variant="cancel" onClick={deleteComputer} size="md">
              Remover
            </Table.Action>
          </Table.Actions>
          <Table.Row className="table-header">
            <Table.Title label="Nome" />
            <Table.Title label="Bem Patrimonial" />
            <Table.Title label="Identificação" />
            <Table.Title label="Data Compra" />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data?.map((computer) => (
            <Table.Row
              key={computer.identifier}
              className={`table-row ${id == computer.id && "selected"}`}
              onClick={() => setComputerId(computer.id!)}
              onDoubleClick={() => setComputerData(computer)}
            >
              <td>{computer.name}</td>
              <td>{computer.property}</td>
              <td>{computer.identifier}</td>
              <td>{format(new Date(computer.purchaseData), "dd/MM/yyyy")}</td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
