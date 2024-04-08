"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export function MobileMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return () => setOpen(false);
  }, [pathname]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="w-fit lg:hidden">
        {open ? (
          <X className="h-8 w-8 text-zinc-200" />
        ) : (
          <Menu className="h-8 w-8 text-zinc-200" />
        )}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="fixed left-0 top-20 z-50 h-[calc(100vh-20*4px)] w-full border-t border-zinc-200/20 bg-zinc-800 data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down lg:hidden">
          <nav className="py-8">{children}</nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
