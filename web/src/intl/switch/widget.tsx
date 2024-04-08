"use client";

import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export function Widget({ children }: { children: ReactNode }) {
  const { locale }: { locale: string } = useParams();

  return (
    <Popover.Root>
      <Popover.Trigger
        data-current-locale={locale}
        className="group hidden h-28 items-center gap-1 lg:flex"
      >
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={`/img/locales/${locale}.jpg`}
            height={128}
            width={128}
            alt={locale}
            className="h-full w-auto object-cover object-center"
          />
        </div>

        <ChevronDown className="text-zinc-200 transition-transform duration-500 group-data-[state=open]:rotate-180" />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="bg-white shadow-md data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
