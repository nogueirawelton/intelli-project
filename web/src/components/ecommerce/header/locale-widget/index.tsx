"use client";

import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Locale } from "./locale";

interface LocaleWidgetProps {
  locales: Array<{
    name: string;
    code: string;
  }>;
}

export function LocaleWidget({ locales }: LocaleWidgetProps) {
  const { locale }: { locale: string } = useParams();

  return (
    <Popover.Root>
      <Popover.Trigger className="group flex h-28 items-center gap-2">
        <div className="h-10 w-10 rounded-full overflow-hidden">
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
          <div>
            {locales.map(({ name, code }) => (
              <Locale
                key={code}
                name={name}
                code={code}
              />
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
