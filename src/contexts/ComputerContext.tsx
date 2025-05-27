import { Computer } from "@/types";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IComputerContext {
  computer: Computer | null;
  id: number | null;
  isModalOpen: boolean;
  loading: boolean;
  data: Computer[] | null;
  setId: (id: number) => void;
  setComputer: (data: Computer) => void;
  closeModal: () => void;
  openModal: () => void;
  fetchData: () => Promise<void>;
}

interface IComputerProvider {
  children: React.ReactNode;
}

const ComputerContext = createContext<IComputerContext>({} as IComputerContext);

const ComputerProvider: React.FC<IComputerProvider> = ({ children }) => {
  const [computer, setComputer] = useState<Computer | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/computers`);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const contextValues = useMemo(
    () => ({
      computer,
      isModalOpen,
      data,
      id,
      loading,
      setId,
      openModal,
      closeModal,
      setComputer,
      fetchData,
    }),
    [isModalOpen, computer, id, setId, openModal, closeModal, setComputer]
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
