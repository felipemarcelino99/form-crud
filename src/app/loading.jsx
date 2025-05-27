import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
}
