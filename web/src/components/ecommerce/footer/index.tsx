import { useTranslations } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="px-4 md:px-8 border-t border-zinc-200">
      <div className="lg:h-32 py-8 lg:py-0 flex flex-col lg:flex-row max-w-screen-2xl mx-auto lg:items-center gap-4 justify-center lg:justify-between">
        <div className="flex flex-col md:flex-row lg:items-center gap-4 lg:gap-16">
          <strong className="text-zinc-800">© 2024 IntelliProject</strong>

          <nav className="flex gap-8 text-zinc-600">
            <Link
              href="/faq"
              className="hover:underline underline-offset-2"
            >
              FAQs
            </Link>
            <Link
              href="/about"
              className="hover:underline underline-offset-2"
            >
              {t("navigation.about")}
            </Link>
            <Link
              href="/contact"
              className="hover:underline underline-offset-2"
            >
              {t("navigation.contact")}
            </Link>
          </nav>
        </div>

        <span className="text-sm text-zinc-600">
          {`${t("development")} `}
          <Link
            href="https://github.com/Renan-Gust"
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            Renan Gustavo
          </Link>{" "}
          &{" "}
          <Link
            href="https://github.com/nogueirawelton"
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            Welton Nogueira
          </Link>
        </span>
      </div>
    </footer>
  );
}
