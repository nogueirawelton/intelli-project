import { useTranslations } from "next-intl";

import { Form } from "./form";

export function Newsletter() {
  const t = useTranslations("globals.newsletter");

  return (
    <section className="px-4 md:px-8 pt-16 pb-8 lg:pt-32 lg:pb-16 border-t border-zinc-200">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-zinc-800 text-center font-bold text-2xl lg:text-3xl uppercase">
          Newsletter
        </h2>

        <p className="text-zinc-700 text-center mt-4 font-medium">
          {t("description")}
        </p>

        <Form
          placeholder={t("form.placeholder")}
          submit={t("form.submit")}
        />
      </div>
    </section>
  );
}
