import { Suspense } from "react";
import { Indent } from "@/components/Layout/Indent";
import Modal from "@/components/Layout/Modal";
import List from "@/components/Layout/List";
import { getComputers } from "@/services";
import { Loading } from "@/components/Common/Loading";

export default function Home() {
  const computersPromise = getComputers();

  return (
    <main className="font-[family-name:var(--font-roboto)]">
      <div className="w-dvw h-dvh flex items-center justify-center bg-gray-950">
        <Modal />
        <Indent>
          <Suspense fallback={<Loading />}>
            <List computers={computersPromise} />
          </Suspense>
        </Indent>
      </div>
    </main>
  );
}
