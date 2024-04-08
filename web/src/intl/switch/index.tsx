import { useTranslations } from "next-intl";
import { Widget } from "./widget";
import { Locale } from "./locale-item";

export function LocaleSwitch() {
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
    <Widget>
      {locales.map(({ name, code }) => (
        <Locale key={code} name={name} code={code} />
      ))}
    </Widget>
  );
}
