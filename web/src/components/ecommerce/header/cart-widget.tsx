import { Link } from "@/intl/navigation";
import { ShoppingBag } from "lucide-react";

export function CartWidget({ amount }: { amount: number }) {
  return (
    <Link href="" className="relative" aria-label="Cart">
      <ShoppingBag className="h-7 w-7 text-zinc-200" />
      <span className="absolute right-0 top-0 grid h-4 w-4 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-zinc-200 text-sm font-bold leading-none text-zinc-800">
        {amount}
      </span>
    </Link>
  );
}
