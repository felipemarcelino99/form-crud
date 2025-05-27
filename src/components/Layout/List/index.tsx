"use client";
import { Table } from "@/components/Common/Table";
import { useComputer } from "@/contexts/ComputerContext";
import { format } from "date-fns";
import { Loader } from "lucide-react";

export default function List() {
  const { data, loading, openModal } = useComputer();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Actions>
          <Table.Action label="Adicionar" onClick={openModal} size="md" />
          <Table.Action
            label="Remover"
            variant="cancel"
            onClick={() => {}}
            size="md"
          />
        </Table.Actions>
        <Table.Row className="table-header">
          <Table.Title label="Nome" />
          <Table.Title label="Bem Patrimonial" />
          <Table.Title label="Identificação" />
          <Table.Title label="Data Compra" />
        </Table.Row>
      </Table.Header>
      {loading ? (
        <tfoot>
          <tr>
            <th scope="row" colspan="4" className="">
              <Loader className="animate-spin" />
            </th>
          </tr>
        </tfoot>
      ) : (
        <Table.Body>
          {data?.map((computer) => (
            <Table.Row
              key={computer.identifier}
              className="table-row"
              onClick={() => console.log("click")}
              onDoubleClick={() => console.log("double click")}
            >
              <td>{computer.name}</td>
              <td>{computer.property}</td>
              <td>{computer.identifier}</td>
              <td>{format(new Date(computer.purchaseData), "dd/MM/yyyy")}</td>
            </Table.Row>
          ))}
        </Table.Body>
      )}
    </Table.Root>
  );
}
