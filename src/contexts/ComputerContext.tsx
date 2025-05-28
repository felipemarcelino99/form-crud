"use client";
import { revalidateComputersTag } from "@/app/actions/revalidate-computers";
import { Actions } from "@/enums";
import { deleteComputers } from "@/services";
import { Computer } from "@/types";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface IComputerContext {
  computer: Computer | null;
  isModalOpen: boolean;
  error: string;
  id: number | null;
  action: Actions;
  setComputerId: (id: number) => void;
  setComputer: (data: Computer | null) => void;
  closeModal: () => void;
  openModal: () => void;
  deleteComputer: () => void;
  setComputerData: (data: Computer) => void;
}

interface IComputerProvider {
  children: React.ReactNode;
  computers: Promise<Computer[]> | null;
}

const ComputerContext = createContext<IComputerContext>({} as IComputerContext);

const ComputerProvider: React.FC<IComputerProvider> = ({
  children,
  computers,
}) => {
  const [computer, setComputer] = useState<Computer | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [action, setAction] = useState<Actions>(Actions.CREATE);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setAction(Actions.CREATE);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const deleteComputer = useCallback(async () => {
    if (!id) {
      setError("Selecione um item para remover.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    await deleteComputers(id);
    await revalidateComputersTag();
    setId(null);
  }, [id]);

  const setComputerId = useCallback((id: number) => {
    if (id) {
      setId(id);
    }
  }, []);

  const setComputerData = useCallback((data: Computer) => {
    if (data) {
      setComputer(data);
      setAction(Actions.UPDATE);
      setIsModalOpen(true);
    }
  }, []);

  const contextValues = useMemo(
    () => ({
      computers,
      computer,
      isModalOpen,
      id,
      error,
      action,
      setComputerId,
      openModal,
      closeModal,
      setComputer,
      deleteComputer,
      setComputerData,
    }),
    [
      isModalOpen,
      computer,
      id,
      error,
      action,
      computers,
      setComputerId,
      openModal,
      closeModal,
      setComputer,
      deleteComputer,
      setComputerData,
    ]
  );

  return (
    <ComputerContext.Provider value={contextValues}>
      {children}
    </ComputerContext.Provider>
  );
};

const useComputer = (): IComputerContext => {
  const context = useContext(ComputerContext);

  if (!context) {
    throw new Error("useComputer must be used within a ComputerProvider");
  }

  return context;
};

export { ComputerProvider, useComputer };
