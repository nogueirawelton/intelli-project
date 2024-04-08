import { Headphones } from "lucide-react";

export function IntelliChat() {
  return (
    <button className="fixed bottom-4 right-4 grid h-16 w-16 place-items-center rounded-full bg-zinc-800 lg:bottom-8 lg:right-8">
      <Headphones className="h-8 w-8 text-white" />
    </button>
  );
}
