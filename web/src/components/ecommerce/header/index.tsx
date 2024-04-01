import { Link } from "@/intl/navigation";
import Image from "next/image";
import { NavLink } from "./nav-link";
import { useTranslations } from "next-intl";
import { LocaleWidget } from "./locale-widget";
import { Menu, Search, UserCircle } from "lucide-react";
import { CartWidget } from "./cart-widget";
import { Locale } from "./locale-widget/locale";
import { DropDownMenu } from "./dropdown-menu";

export function Header() {
  const t = useTranslations("globals");

  const locales = [
    {
      name: t("locales.english"),
      code: "en",
    },
    {
      name: t("locales.brazilian-portuguese"),
      code: "pt",
    },
  ];

  return (
    <header className="bg-zinc-800 px-4 md:px-8 fixed top-0 w-full">
      <div className="max-w-screen-2xl h-20 lg:h-28 mx-auto items-center grid grid-cols-[1fr_2fr_1fr] lg:grid-cols-3">
        <button className="lg:hidden">
          <Menu className="w-8 h-8 text-zinc-200" />
        </button>

        <nav className="hidden lg:flex items-center gap-4">
          <NavLink href="/">{t("header-menu.home")}</NavLink>
          <DropDownMenu
            items={[
              {
                name: "Coleção 1",
                href: "/collections/colecao1",
              },
              {
                name: "Coleção 2",
                href: "/collections/colecao2",
              },
              {
                name: "Coleção 3",
                href: "/collections/colecao3",
              },
              {
                name: "Coleção 4",
                href: "/collections/colecao4",
              },
            ]}
          >
            <NavLink href="/collections">
              {t("header-menu.collections")}
            </NavLink>
          </DropDownMenu>
          <NavLink href="/about">{t("header-menu.about")}</NavLink>
          <NavLink href="/contact">{t("header-menu.contact")}</NavLink>
        </nav>

        <Link
          href="/"
          className="mx-auto"
        >
          <Image
            src="/img/logo.png"
            alt="IntelliProject"
            width={170}
            height={30}
            className="w-[130px] lg:w-[170px] h-auto"
          />
        </Link>

        <nav className="flex items-center gap-12 justify-end">
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="">
              <Search className="h-7 w-7 text-zinc-200" />
            </Link>

            <Link
              href=""
              className="hidden lg:block"
            >
              <UserCircle className="h-7 w-7 text-zinc-200" />
            </Link>

            <CartWidget amount={3} />
          </div>

          <LocaleWidget>
            {locales.map(({ name, code }) => (
              <Locale
                key={code}
                name={name}
                code={code}
              />
            ))}
          </LocaleWidget>
        </nav>
      </div>
    </header>
  );
}
