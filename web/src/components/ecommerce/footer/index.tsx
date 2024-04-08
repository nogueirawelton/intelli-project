import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("globals.footer");

  return (
    <footer className="border-t border-zinc-200 px-4 md:px-8">
      <div className="mx-auto flex max-w-screen-2xl flex-col justify-center gap-4 py-8 lg:h-28 lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <div className="flex flex-col gap-4 md:flex-row lg:items-center lg:gap-16">
          <strong className="text-zinc-800">© 2024 IntelliProject</strong>

          <nav className="flex gap-8 text-zinc-600">
            <Link href="/faq" className="underline-offset-2 hover:underline">
              FAQs
            </Link>
            <Link href="/about" className="underline-offset-2 hover:underline">
              {t("navigation.about")}
            </Link>
            <Link
              href="/contact"
              className="underline-offset-2 hover:underline"
            >
              {t("navigation.contact")}
            </Link>
          </nav>
        </div>

        <span className="pr-20 text-sm text-zinc-600">
          {`${t("development")} `}
          <Link
            href="https://github.com/Renan-Gust"
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            Renan Gustavo
          </Link>{" "}
          &{" "}
          <Link
            href="https://github.com/nogueirawelton"
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            Welton Nogueira
          </Link>
        </span>
      </div>
    </footer>
  );
}
