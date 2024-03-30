"use client";

import { Link, usePathname } from "@/intl/navigation";
import { ComponentProps } from "react";

export function NavLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      data-current={pathname == props.href}
      className="uppercase data-[current=true]:text-white text-zinc-200 font-bold hover:text-white transition-colors duration-500"
    />
  );
}
