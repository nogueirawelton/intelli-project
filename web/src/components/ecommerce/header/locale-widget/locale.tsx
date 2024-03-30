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
      className="flex items-center gap-2 h text-sm px-6 py-3 w-full transition-colors duration-500 hover:bg-zinc-100"
      onClick={handleLocaleChange}
    >
      <div className="h-7 w-7 rounded-full overflow-hidden">
        <Image
          src={`/img/locales/${code}.jpg`}
          height={128}
          width={128}
          alt={code}
          className="object-cover object-center w-auto h-full"
        />
      </div>

      {name}
    </button>
  );
}
