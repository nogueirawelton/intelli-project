"use client";

import { usePathname, useRouter } from "@/intl/navigation";
import Image from "next/image";

interface LocaleProps {
  name: string;
  code: string;
}

export function Locale({ name, code }: LocaleProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange() {
    router.replace(pathname, { locale: code });
  }

  return (
    <button
      data-locale={code}
      className="h flex w-full items-center gap-2 px-6 py-3 text-sm transition-colors duration-500 hover:bg-zinc-100"
      onClick={handleLocaleChange}
    >
      <div className="h-7 w-7 overflow-hidden rounded-full">
        <Image
          src={`/img/locales/${code}.jpg`}
          height={128}
          width={128}
          alt={code}
          className="h-full w-auto object-cover object-center"
        />
      </div>

      {name}
    </button>
  );
}
