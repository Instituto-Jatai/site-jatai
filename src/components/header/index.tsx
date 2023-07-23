/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import Translate from "../translate";

const Header: React.FC = () => {
  return (
    <>
      <header
        id="header"
        className="bg-white sticky top-0 left-0 right-0  overflow-hidden px-4 z-10"
      >
        <div
          id="menu-content"
          className="container transition-all h-20 py-5 m-auto w-full flex flex-row items-start justify-between relative"
        >
          <div className="flex w-full flex-col lg:flex-row">
            <a href="/">
              <img
                src="/images/header/logo-green.svg"
                alt="Logo"
                className="h-7 my-2 md:mr-10"
              />
            </a>

            <nav className="flex mt-5 flex-col w-full lg:items-center lg:flex-row lg:mt-0">
              <a
                id="home"
                href="/"
                data-i18n="Início"
                className="text-base border-b-[1px] py-4 border-b-black text-gray-800 hover:text-green-700 lg:mr-8 lg:border-b-0 lg:py-0"
              >
                Início
              </a>
              <a
                id="team"
                href="/team"
                data-i18n="Equipe"
                className="text-base border-b-[1px] py-4 border-b-black text-gray-800 hover:text-green-700 lg:mr-8 lg:border-b-0 lg:py-0"
              >
                Equipe
              </a>
              <a
                id="contact"
                href="/contact"
                data-i18n="Contato"
                className="text-base border-b-[1px] py-4 border-b-black text-gray-800 hover:text-green-700 lg:mr-8 lg:border-b-0 lg:py-0"
              >
                Contato
              </a>
              <a
                id="cases"
                href="/cases"
                data-i18n="Casos"
                className="text-base border-b-[1px] py-4 border-b-black text-gray-800 hover:text-green-700 lg:mr-8 lg:border-b-0 lg:py-0"
              >
                Casos
              </a>
              <a
                id="model-docs"
                href="/model-docs"
                data-i18n="Documentos modelo"
                className="text-base border-b-[1px] py-4 border-b-black text-gray-800 hover:text-green-700 lg:mr-8 lg:border-b-0 lg:py-0"
              >
                Documentos modelo
              </a>
              <div className="flex flex-row gap-2  text-base border-b-[1px] py-4 border-b-black lg:border-b-0 lg:py-0">
                <a
                  id="prediagnostic"
                  href="/prediagnostic"
                  data-i18n="Pré-diagnóstico"
                  className="text-base text-gray-800 hover:text-green-700"
                >
                  Pré-diagnóstico
                </a>
                <span
                  data-i18n="NOVO!"
                  className="bg-green-700 text-white px-2 py-1 text-xs font-semibol rounded-full font-semibold"
                >
                  NOVO!
                </span>
              </div>
            </nav>
          </div>

          <Translate />
          <div
            id="mobile-menu"
            className="h-10 w-10 absolute top-5 right-0 lg:hidden"
          >
            <button id="menu-open">
              <img alt="menu" src="/images/header/menu.svg" />
            </button>
            <button id="menu-close" className="hidden">
              <img alt="close menu " src="/images/header/close.svg" />
            </button>
          </div>
        </div>
      </header>

      <Script id="select-menu">
        {`
          const menuItems = [
            'team',
            'contact',
            'cases',
            'model-docs',
            'prediagnostic',
          ];

          const currentPath = window.location.pathname;

          if(currentPath === '/') {
            const menuItem = document.getElementById('home');
            menuItem.classList.remove('text-gray-800');
            menuItem.classList.add('text-green-700');
            menuItem.classList.add('font-semibold');
          } else {
            menuItems.forEach(item => {
              if(currentPath.endsWith(item)) {
                const menuItem = document.getElementById(item);
                menuItem.classList.remove('text-gray-800');
                menuItem.classList.add('text-green-700');
                menuItem.classList.add('font-semibold');
              }
            });
          }
        `}
      </Script>
      <Script id="mobile-menu">
        {`
          const header = document.getElementById("menu-content");
          const menuOpen = document.getElementById("menu-open");
          const menuClose = document.getElementById("menu-close");

          menuOpen.addEventListener("click", () => {
            header.classList.add("h-[100vh]");
            menuOpen.classList.add("hidden");
            menuClose.classList.remove("hidden");
          });
          
          menuClose.addEventListener("click", () => {
            header.classList.remove("h-[100vh]");
            menuClose.classList.add("hidden");
            menuOpen.classList.remove("hidden");
          });
        `}
      </Script>
    </>
  );
};

export default Header;
