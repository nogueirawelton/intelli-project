import { useTranslations } from "next-intl";

import { Form } from "./form";

export function Newsletter() {
  const t = useTranslations("globals.newsletter");

  return (
    <section className="border-t border-zinc-200 px-4 pb-8 pt-16 md:px-8 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="text-center text-2xl font-bold uppercase text-zinc-800 lg:text-3xl">
          Newsletter
        </h2>

        <p className="mt-4 text-center font-medium text-zinc-700">
          {t("description")}
        </p>

        <Form placeholder={t("form.placeholder")} submit={t("form.submit")} />
      </div>
    </section>
  );
}
