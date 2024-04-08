"use client";

import { Link } from "@/intl/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ReactNode } from "react";

interface DropDownMenuProps {
  children: ReactNode;
  items: Array<{
    name: string;
    href: string;
  }>;
}

export function DropDownMenu({ children, items }: DropDownMenuProps) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex items-center font-bold uppercase text-zinc-200 transition-colors duration-500 hover:text-white data-[current=true]:text-white lg:h-28">
            {children}
          </NavigationMenu.Trigger>

          <NavigationMenu.Content>
            {items.map(({ name, href }) => (
              <NavigationMenu.Link asChild key={href}>
                <Link
                  href={href}
                  className="flex w-full cursor-pointer items-center gap-2 px-6 py-3 text-zinc-700 transition-colors duration-500 hover:bg-zinc-100"
                >
                  {name}
                </Link>
              </NavigationMenu.Link>
            ))}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Viewport className="absolute top-28 w-full max-w-[270px] bg-white shadow-md data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down" />
    </NavigationMenu.Root>
  );
}
