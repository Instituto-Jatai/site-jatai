/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import i18next from "i18next";
import en from "./en";
import es from "./es";

const Translate: React.FC = () => {
  const [languageSelect, setSelectedLanguage] = useState<string>();

  function updateTranslation() {
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute("data-i18n") || "";
      element.innerHTML = i18next.t(translationKey);
    });
  }

  function changeLanguage(language: string) {
    i18next.changeLanguage(language, (error, t) => {
      if (error) {
        console.log(error);
      } else {
        updateTranslation();
        setSelectedLanguage(language);
        localStorage.setItem("last_language", language);
      }
    });
  }

  useEffect(() => {
    i18next.init(
      {
        lng: "pt",
        resources: {
          pt: {
            translation: {},
          },
          en: {
            translation: en,
          },
          es: {
            translation: es,
          },
        },
      },
      () => {
        const lastLanguage = localStorage.getItem("last_language");
        changeLanguage(lastLanguage || "pt");
      }
    );
  }, []);

  return (
    <select
      id="language-select"
      value={languageSelect}
      onChange={(e) => changeLanguage(e.target.value)}
      className="ml-4 py-2 pl-3 pr-2 text-lg border border-gray-300 rounded-full focus:outline-none absolute top-5 right-12 lg:right-0"
    >
      <option className="pt" value="pt" data-icon="🇧🇷">
        🇧🇷
      </option>
      <option value="en" data-icon="🇺🇸">
        🇺🇸
      </option>
      <option value="es" data-icon="🇪🇸">
        🇪🇸
      </option>
    </select>
  );
};

export default Translate;
