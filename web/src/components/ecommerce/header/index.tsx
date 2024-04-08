import Image from "next/image";
import { NavLink } from "./nav-link";
import { useTranslations } from "next-intl";
import { Boxes, Home, Phone, Search, Store, UserCircle } from "lucide-react";
import { CartWidget } from "./cart-widget";
import { DropDownMenu } from "./dropdown-menu";
import { MobileMenu } from "./mobile-menu";
import { LocaleSwitch } from "@/intl/switch";
import { Link } from "@/intl/navigation";
import { CollapsibleMenu } from "./collapsible-menu";

export function Header() {
  const t = useTranslations("globals");

  const items = [
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
  ];

  return (
    <header className="fixed top-0 w-full bg-zinc-800 px-4 md:px-8">
      <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[1fr_2fr_1fr] items-center lg:h-28 lg:grid-cols-3">
        {/* MOBILE */}
        <MobileMenu>
          <Link
            href=""
            className="flex h-16 items-center gap-4 px-4 font-medium text-zinc-200"
          >
            <UserCircle className="h-7 w-7" />
            {t("header-menu.account")}
          </Link>

          <NavLink
            href="/"
            className="flex h-16 items-center gap-4 px-4 font-medium text-zinc-200"
          >
            <Home className="h-7 w-7" />
            {t("header-menu.home")}
          </NavLink>

          <CollapsibleMenu items={items}>
            <Boxes className="h-7 w-7" />
            {t("header-menu.collections")}
          </CollapsibleMenu>

          <NavLink
            href="/about"
            className="flex h-16 items-center gap-4 px-4 font-medium text-zinc-200"
          >
            <Store className="h-7 w-7" />
            {t("header-menu.about")}
          </NavLink>

          <NavLink
            href="/contact"
            className="flex h-16 items-center gap-4 px-4 font-medium text-zinc-200"
          >
            <Phone className="h-7 w-7" />
            {t("header-menu.contact")}
          </NavLink>
        </MobileMenu>

        {/* DESKTOP */}
        <nav className="hidden items-center gap-4 lg:flex">
          <NavLink href="/" className="uppercase">
            {t("header-menu.home")}
          </NavLink>

          <DropDownMenu items={items}>
            {t("header-menu.collections")}
          </DropDownMenu>

          <NavLink href="/about" className="uppercase">
            {t("header-menu.about")}
          </NavLink>

          <NavLink href="/contact" className="uppercase">
            {t("header-menu.contact")}
          </NavLink>
        </nav>

        <Link href="/" className="mx-auto" aria-label="Home">
          <Image
            src="/img/logo.png"
            alt="IntelliProject"
            width={170}
            height={30}
            className="h-auto w-[130px] lg:w-[170px]"
          />
        </Link>

        <nav className="flex items-center justify-end gap-12">
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="" aria-label="Search products">
              <Search className="h-7 w-7 text-zinc-200" />
            </Link>

            <Link aria-label="My account" href="" className="hidden lg:block">
              <UserCircle className="h-7 w-7 text-zinc-200" />
            </Link>

            <CartWidget amount={3} />
          </div>
          <LocaleSwitch />
        </nav>
      </div>
    </header>
  );
}
