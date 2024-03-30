import { Link } from "@/intl/navigation";
import Image from "next/image";
import { NavLink } from "./nav-link";
import { useTranslations } from "next-intl";
import { LocaleWidget } from "./locale-widget";
import { Menu, Search, User, UserCircle } from "lucide-react";
import { CartWidget } from "./cart-widget";

export function Header() {
  const t = useTranslations("header-menu");
  const l = useTranslations("locales");

  const locales = [
    {
      name: l("english"),
      code: "en",
    },
    {
      name: l("brazilian-portuguese"),
      code: "pt",
    },
  ];

  return (
    <header className="bg-zinc-800 px-4 md:px-8 fixed top-0 w-full">
      <div className="max-w-screen-2xl h-20 lg:h-28 mx-auto items-center flex justify-between lg:grid grid-cols-3">
        <nav className="hidden lg:flex items-center gap-4">
          <NavLink href="/">{t("home")}</NavLink>
          <NavLink href="/collections">{t("collections")}</NavLink>
          <NavLink href="/about">{t("about")}</NavLink>
          <NavLink href="/contact">{t("contact")}</NavLink>
        </nav>

        <Link
          href="/"
          className="block lg:mx-auto"
        >
          <Image
            src="/img/logo.png"
            alt="IntelliProject"
            width={170}
            height={30}
            className="w-[130px] lg:w-[170px] h-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-12 justify-end">
          <div className="flex items-center gap-6">
            <Link href="">
              <Search className="h-7 w-7 text-zinc-200" />
            </Link>

            <Link href="">
              <UserCircle className="h-7 w-7 text-zinc-200" />
            </Link>

            <CartWidget amount={3} />
          </div>

          <LocaleWidget locales={locales} />
        </nav>

        <button className="lg:hidden">
          <Menu className="w-8 h-8 text-zinc-200" />
        </button>
      </div>
    </header>
  );
}
