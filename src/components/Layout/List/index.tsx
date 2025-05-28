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
    loading,
    openModal,
    setComputerId,
    setComputerData,
    deleteComputer,
  } = useComputer();
  const data = use(computers);

  return (
    <div className="overflow-x-auto">
      <Table.Root className="min-w-[39.063rem] ">
        <Table.Header>
          <Table.Actions>
            <Table.Action onClick={openModal} size="md">
              Adicionar
            </Table.Action>
            <Table.Action variant="cancel" onClick={deleteComputer} size="md">
              {loading ? "Removendo..." : "Remover"}
            </Table.Action>
          </Table.Actions>
          {error && <p className="error-message">{error}</p>}
          <Table.Row className="table-header">
            <Table.Title label="Nome" className="w-1/4" />
            <Table.Title label="Bem Patrimonial" className="w-1/4" />
            <Table.Title label="Identificação" className="w-1/4" />
            <Table.Title label="Data Compra" className="w-1/4" />
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
              <td className="w-1/4">{computer.name}</td>
              <td className="w-1/4">{computer.property}</td>
              <td className="w-1/4">{computer.identifier}</td>
              <td className="w-1/4">
                {format(new Date(computer.purchaseData), "dd/MM/yyyy")}
              </td>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
