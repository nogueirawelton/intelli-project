"use client";

import { Link } from "@/intl/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ReactNode } from "react";

interface DropDownMenu {
  children: ReactNode;
  items: Array<{
    name: string;
    href: string;
  }>;
}

export function DropDownMenu({ children, items }: DropDownMenu) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>{children}</NavigationMenu.Trigger>

          <NavigationMenu.Content>
            {items.map(({ name, href }) => (
              <NavigationMenu.Link
                asChild
                key={href}
              >
                <Link
                  href={href}
                  className="flex items-center gap-2 px-6 py-3 w-full transition-colors duration-500 hover:bg-zinc-100 cursor-pointer text-zinc-700"
                >
                  {name}
                </Link>
              </NavigationMenu.Link>
            ))}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Viewport className="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up absolute max-w-[270px] w-full top-28 bg-white shadow-md" />
    </NavigationMenu.Root>
  );
}
