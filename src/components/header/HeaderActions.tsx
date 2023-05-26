import type { ChangeEvent } from "react";
import { useLang } from "@hooks/useLang";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaUser, FaShoppingBag } from "react-icons/fa";

interface Props {
  isScrolled?: boolean | undefined;
}

const LANGUAGES = [
  { value: "es", text: "ES", icon: "🇪🇸" },
  { value: "en", text: "EN", icon: "🇺🇸" },
];

const HeaderActions = ({ isScrolled }: Props): JSX.Element => {
  const [saveLang, setSaveLang] = useState<string>(
    localStorage.getItem("lang") ?? ""
  );
  const { t, toggleLang } = useLang();

  useEffect(() => {
    if (saveLang !== null) {
      setSaveLang(saveLang);
    } else {
      setSaveLang("es");
      localStorage.setItem("lang", "es");
    }
  }, []);

  const toggleSaveLang = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedLang = e.target.value;
    setSaveLang(selectedLang);
    localStorage.setItem("lang", selectedLang);
    toggleLang(localStorage.getItem("lang") ?? "");
  };

  return (
    <section
      className={`bg-turquoise grid place-content-center py-3 px-8 xl:place-content-end xl:rounded-l-full ${
        isScrolled ?? false ? "mb-2" : ""
      }`}
    >
      <div className="flex flex-col justify-start gap-8 md:flex-row">
        <article className="flex justify-content items-center gap-2">
          <AiOutlineWhatsApp size={18} className="text-white" />
          <p className="text-white">WhatsApp 984 748 106</p>
        </article>
        <Link
          to="/iniciar-sesion"
          className="flex justify-content items-center gap-2"
        >
          <FaUser size={18} className="text-white" />
          <span className="text-white">{t("components.header.log_in")}</span>
        </Link>
        <Link
          to="/mis-compras"
          className="flex justify-content items-center gap-2"
        >
          <FaShoppingBag size={18} className="text-white" />
          <p className="text-white">{t("components.header.my_purchases")}</p>
        </Link>
        <select
          value={saveLang}
          onChange={toggleSaveLang}
          className="bg-white text-black px-4 py-1 rounded-md cursor-pointer border-none"
        >
          {LANGUAGES.map((lang, index) => (
            <option key={index} value={lang.value}>
              {`${lang.icon} ${lang.text}`}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default HeaderActions;
