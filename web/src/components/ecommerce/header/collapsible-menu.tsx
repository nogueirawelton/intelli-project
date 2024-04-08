"use client";

import { Link } from "@/intl/navigation";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface CollapsibleMenuProps {
  children: ReactNode;
  items: Array<{
    name: string;
    href: string;
  }>;
}

export function CollapsibleMenu({ children, items }: CollapsibleMenuProps) {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger className="group flex h-16 items-center gap-4 px-4 font-medium text-zinc-200 hover:text-white data-[current=true]:text-white">
        {children}
        <ChevronDown className="h-5 w-5 text-zinc-200 transition-transform duration-500 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>
      <Collapsible.Content className="data-[state=open]:animate-grow-down flex flex-col overflow-hidden px-6">
        <div>
          {items.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="flex h-12 items-center gap-1 text-zinc-200"
            >
              {name}
            </Link>
          ))}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
