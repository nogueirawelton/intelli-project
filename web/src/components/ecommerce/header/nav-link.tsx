"use client";

import { Link, usePathname } from "@/intl/navigation";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function NavLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      data-current={pathname == props.href}
      className={twMerge(
        "flex items-center font-bold text-zinc-200 transition-colors duration-500 hover:text-white data-[current=true]:text-white lg:h-28",
        props.className,
      )}
    />
  );
}
