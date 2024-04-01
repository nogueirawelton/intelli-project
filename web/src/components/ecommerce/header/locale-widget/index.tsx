"use client";

import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export function LocaleWidget({ children }: { children: ReactNode }) {
  const { locale }: { locale: string } = useParams();

  return (
    <Popover.Root>
      <Popover.Trigger className="group hidden lg:flex h-28 items-center gap-1">
        <div className="h-8 w-8 rounded-full overflow-hidden">
          <Image
            src={`/img/locales/${locale}.jpg`}
            height={128}
            width={128}
            alt={locale}
            className="object-cover object-center w-auto h-full"
          />
        </div>

        <ChevronDown className="text-zinc-200 group-data-[state=open]:rotate-180 transition-transform duration-500" />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="bg-white shadow-md data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
