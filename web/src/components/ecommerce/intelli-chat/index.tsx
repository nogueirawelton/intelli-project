import { Headphones } from "lucide-react";

export function IntelliChat() {
  return (
    <button className="h-16 w-16 grid fixed right-4 bottom-4 lg:right-8 lg:bottom-8  place-items-center rounded-full bg-zinc-800">
      <Headphones className="h-8 w-8 text-white" />
    </button>
  );
}
