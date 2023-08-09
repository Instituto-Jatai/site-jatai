/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Jataí",
  description:
    "Construindo organizações públicas para o mundo digital e sustentável.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" type="image/x-icon" href="/jatai.ico"></link>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-[100vh] flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        <div id="modal" className="fixed inset-0 z-20 hidden">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-auto z-30 w-[90%] max-w-[862px] flex relative">
              <button
                id="modal-close-button"
                className="bg-gray-100 absolute top-3 right-3 p-2 rounded-full transition-all hover:bg-gray-300"
              >
                <img
                  className="w-4 h-4"
                  alt="close modal"
                  src="/images/home/close-modal.svg"
                />
              </button>
              <div className="w-full h-full max-w-[520px] p-10">
                <h1
                  className="text-3xl font-semibold"
                  data-i18n="Edital para apoio a contratação de sistema de gestão escolar"
                >
                  Edital para apoio a contratação de sistema de gestão escolar
                </h1>
                <p
                  className="my-8"
                  data-i18n="Este edital é focado para inscrições de secretarias de educação, consórcios públicos compostos por secretarias deeducação ou outras organizações sem fins lucrativos que apoiem secretarias de educação, interessadas em aprimorar políticas educacionais com uso de procedimentos de compras inovadoras. A atuação do Instituto Jataí nesta cooperação é total ou parcialmente financiada por apoio institucional recebido da Aliança entre Fundação Lemann e Imaginable Futures."
                >
                  Este edital é focado para inscrições de secretarias de
                  educação, consórcios públicos compostos por secretarias
                  deeducação ou outras organizações sem fins lucrativos que
                  apoiem secretarias de educação, interessadas em aprimorar
                  políticas educacionais com uso de procedimentos de compras
                  inovadoras. A atuação do Instituto Jataí nesta cooperação é
                  total ou parcialmente financiada por apoio institucional
                  recebido da Aliança entre Fundação Lemann e Imaginable
                  Futures.
                </p>

                <div className="flex ">
                  <button
                    id="modal-subscrive-button"
                    data-i18n="Inscreva-se agora"
                    className="bg-green-700 text-white px-6 py-[14px] rounded-xl font-semibold mr-3 transition-all hover:bg-green-800"
                  >
                    Inscreva-se agora
                  </button>
                  <a
                    target="_blank"
                    href="/files/20230711-edital.pdf"
                    data-i18n="Ver edital"
                    className="bg-gray-200 text-black px-6 py-[14px] rounded-xl font-semibold transition-all hover:bg-gray-300"
                  >
                    Ver edital
                  </a>
                </div>
              </div>
              <div className="flex-1 bg-cover bg-center bg-no-repeat bg-[url('/images/edital/children.png')]"></div>
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-30"></div>
        </div>

        <Script id="close-modal">
          {`
            var wasOpened = false;

            document.addEventListener('mouseout', function(e) {
                if (!e.relatedTarget && !e.toElement && !wasOpened) {
                  wasOpened = true;
                  document.getElementById("modal").classList.remove("hidden");
                }
            });

            function closeModal() {
              document.getElementById("modal").classList.add("hidden");
            }
            
            document.getElementById("modal-close-button").addEventListener("click", closeModal);
            document.getElementById("modal-subscrive-button").addEventListener("click", () => {
              window.open("https://docs.google.com/forms/u/1/d/e/1FAIpQLSfcZHkxnMLg8CLttrZiWS9J_4rJIEbB7gnOz3ysljEhNkWU3w/viewform?usp=send_form", "_blank");
              closeModal();
            });
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-E2E5R7TPJW" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'G-E2E5R7TPJW');
        `}
        </Script>
      </body>
    </html>
  );
}
