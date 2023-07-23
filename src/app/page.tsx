import HomeSlider from "@/components/home-slider";
import Script from "next/script";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <section about="about">
        <h1 className="hidden">
          Construindo organizações públicas para o mundo digital e sustentável
        </h1>
        <h2 className="hidden">
          Somos uma organização sem fins lucrativos criada com a missão de
          apoiar organizações públicas a se tornarem mais ágeis para se
          adaptarem ao mundo digital e sustentável.
        </h2>
        <h1 className="hidden">
          Confira o edital para apoio a contratação de sistema de gestão escolar
        </h1>
        <h2 className="hidden">
          Qualquer secretaria, consórcio ou organização do terceiro setor que
          trabalhe com educação pode participar. Não deixe de conferir!
        </h2>

        <HomeSlider />
      </section>

      <div className="mb-16" id="what-we-do">
        <div className="container flex flex-col px-6">
          <span
            data-i18n="O que fazemos"
            className="text-gray-800 mt-16 text-4xl font-semibold"
          >
            O que fazemos
          </span>
          <span
            data-i18n="Ajudamos você"
            className="text-gray-800 text-base mt-6 md:max-w-[756px]"
          >
            Ajudamos você que é gestor público a enfrentar os desafios da
            inovação e digitalização no setor público. Construímos com você
            soluções para desafios de equipe, governança, recursos e
            contratações.
          </span>

          <div className="mt-16">
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <img
                  src="assets/build-tech-teams.svg"
                  alt=""
                  className="mr-6"
                />
                <span
                  data-i18n="Construir equipes de tecnologia"
                  className="w-[159px] md:w-full text-xl font-semibold"
                ></span>
              </div>

              <img
                src="assets/plus.svg"
                alt=""
                className="p-4 hover:cursor-pointer"
                id="img-topic-one"
              />
            </div>

            <div className="mt-10 hidden" id="div-topic-one">
              <span
                data-i18n="Apoiamos a criação de equipe interna e contratação de equipes."
                className="font-semibold"
              ></span>

              <ul className="mt-8 pl-6 list-disc">
                <li>
                  <span data-i18n="Por quê?" className="font-semibold"></span>
                  <span data-i18n="Sem equipes de tecnologia"></span>
                </li>

                <li>
                  <span
                    data-i18n="O que fazemos?"
                    className="font-semibold"
                  ></span>{" "}
                  <span data-i18n="Apoiamos na definição de perfis necessários"></span>
                </li>

                <li>
                  <span
                    data-i18n="Resultados esperados"
                    className="font-semibold"
                  ></span>
                  <span data-i18n="Equipe estruturada e com capacidade de entrega"></span>
                </li>
              </ul>
            </div>
            <div className="w-full h-[1px] bg-black mt-16"></div>
          </div>

          <div className="mt-16">
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <img src="assets/code.svg" alt="" className="mr-6" />
                <span
                  data-i18n="Digitalizar gestão com uso de tecnologias abertas"
                  className="w-[159px] md:w-full text-xl font-semibold"
                ></span>
              </div>

              <img
                src="assets/plus.svg"
                alt=""
                className="p-4 hover:cursor-pointer"
                id="img-topic-two"
              />
            </div>

            <div className="mt-10 hidden" id="div-topic-two">
              <span
                data-i18n="Apoiamos a escolha de tecnologias abertas"
                className="font-semibold"
              ></span>

              <ul className="mt-8 pl-6 list-disc">
                <li>
                  <span data-i18n="Por quê?" className="font-semibold"></span>{" "}
                  <span data-i18n="Tecnologias abertas oferecem soluções comuns"></span>
                </li>

                <li>
                  <span
                    data-i18n="O que fazemos?"
                    className="font-semibold"
                  ></span>{" "}
                  <span data-i18n="Apoiamos na busca de software em código-aberto"></span>
                </li>

                <li>
                  <span
                    data-i18n="Resultados esperados"
                    className="font-semibold"
                  ></span>
                  <span data-i18n="Tecnologia aberta contratada e implantada"></span>
                </li>
              </ul>
            </div>
            <div className="w-full h-[1px] bg-black mt-16"></div>
          </div>

          <div className="mt-16">
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <img src="assets/idea.svg" alt="" className="mr-6" />
                <span
                  data-i18n="Contratar soluções para problemas públicos"
                  className="w-[159px] md:w-full text-xl font-semibold"
                ></span>
              </div>

              <img
                src="assets/plus.svg"
                alt=""
                className="p-4 hover:cursor-pointer"
                id="img-topic-three"
              />
            </div>

            <div className="mt-10 hidden" id="div-topic-three">
              <span
                data-i18n="Apoiamos na definição de problemas públicos"
                className="font-semibold"
              ></span>

              <ul className="mt-8 pl-6 list-disc">
                <li>
                  <span data-i18n="Por quê?" className="font-semibold"></span>
                  <span data-i18n="Nem sempre a melhor solução"></span>
                </li>

                <li>
                  <span
                    data-i18n="O que fazemos?"
                    className="font-semibold"
                  ></span>
                  <span data-i18n="Apoiamos na definição de problemas públicos e na realização da chamada de soluções para o ecossistema de inovação. Estruturamos"></span>
                </li>

                <li>
                  <span
                    data-i18n="Resultados esperados"
                    className="font-semibold"
                  ></span>
                  <span data-i18n="Teste de soluções e contratação para a resolução"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-02">
        <div className="container  px-6 pt-6">
          <span
            data-i18n="Parceiros, Beneficiários e Clientes"
            className="text-4xl font-semibold"
          ></span>
          <div className="filter grayscale grid grid-cols-2 gap-4 md:grid-cols-4 pb-16 mt-6">
            <div className="h-[150px] flex items-center justify-center">
              <img src="/images/home/gesto.png" alt="Instituto Gesto" />
            </div>
            <div className="h-[150px] flex items-center justify-center">
              <img src="/images/home/imaginable.png" alt="Imaginable futures" />
            </div>
            <div className="h-[150px] flex items-center justify-center">
              <img src="/images/home/lemann.png" alt="Fundação Lemann" />
            </div>
            <div className="h-[150px] flex items-center justify-center">
              <img
                src="/images/home/riogov.png"
                alt="Governo do Estado do Rio de Janeiro"
              />
            </div>
            <div className="h-[150px] flex items-center justify-center">
              <img
                src="/images/home/caf.png"
                alt="CAF - Banco de Desenvolvimento da America Latina"
              />
            </div>
            <div className="h-[150px] flex items-center justify-center">
              <img src="/images/home/quintessa.png" alt="Quintessa" />
            </div>
            <div className="h-[150px] flex items-center justify-center">
              <img
                src="/images/home/tltl.png"
                alt="TLTL - Transformative Learning Technologies Lab"
              />
            </div>
            <div className="h-[150px] flex items-center justify-center">
              <img src="/images/home/recife.png" alt="Prefeitura de Recife" />
            </div>
          </div>
        </div>
      </div>

      <div id="modal" className="fixed inset-0 z-20">
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
                data-i18n="Este edital é focado para inscrições de secretarias de educação, consórcios públicos compostos por secretarias deeducação ou outras organizações sem fins lucrativos que apoiem secretarias de educação, interessadas em aprimorarpolíticas educacionais com uso de procedimentos de compras inovadoras. A atuação do Instituto Jataí nesta cooperação é total ou parcialmente financiada por apoio institucional recebido da Aliança entre Fundação Lemann e Imaginable Futures."
              >
                Este edital é focado para inscrições de secretarias de educação,
                consórcios públicos compostos por secretarias deeducação ou
                outras organizações sem fins lucrativos que apoiem secretarias
                de educação, interessadas em aprimorarpolíticas educacionais com
                uso de procedimentos de compras inovadoras. A atuação do
                Instituto Jataí nesta cooperação é total ou parcialmente
                financiada por apoio institucional recebido da Aliança entre
                Fundação Lemann e Imaginable Futures.
              </p>

              <div className="flex ">
                <button
                  id="modal-subscrive-button"
                  data-i18n="Inscrever-se agora"
                  className="bg-green-700 text-white px-6 py-[14px] rounded-xl font-semibold mr-3 transition-all hover:bg-green-800"
                >
                  Inscrever-se agora
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
            <div className="flex-1 bg-cover bg-center bg-no-repeat bg-[url('/images/home/children.png')]"></div>
          </div>
        </div>
        <div className="fixed inset-0 bg-black opacity-30"></div>
      </div>
      <Script id="close-modal">
        {`
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
    </>
  );
}
