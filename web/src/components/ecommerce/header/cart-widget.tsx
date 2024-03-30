import { Link } from "@/intl/navigation";
import { ShoppingBag } from "lucide-react";

export function CartWidget({ amount }: { amount: number }) {
  return (
    <Link
      href=""
      className="relative"
    >
      <ShoppingBag className="text-zinc-200 w-7 h-7" />
      <span className="absolute w-4 h-4 text-sm font-bold text-zinc-800 bg-zinc-200 rounded-full grid top-0 right-0 translate-x-1/2 -translate-y-1/2 place-items-center leading-none">
        {amount}
      </span>
    </Link>
  );
}
