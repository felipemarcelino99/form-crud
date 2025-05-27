import { Indent } from "@/components/Layout/Indent";
import Modal from "@/components/Layout/Modal";
import Table from "@/components/Layout/List";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-roboto)]">
      <div className="w-dvw h-dvh flex items-center justify-center bg-stone-200">
        <Indent>
          <Modal />
          <Table />
        </Indent>
      </div>
    </main>
  );
}
