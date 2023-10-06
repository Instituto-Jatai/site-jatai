/* eslint-disable @next/next/no-img-element */
const Team = () => {
  return (
    <>
      <div className="h-[172px] bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/rdMbVLy/team-hero.png')]">
        <div className="container mx-auto px-4 md:px-0 h-full flex flex-col justify-center">
          <span
            className="text-white text-4xl font-semibold not-italic md:max-w-[558px]"
            data-i18n="Equipe Jataí"
          >
            Equipe Jataí
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-0">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-9 py-10">
          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              alt=""
              className="w-[162px] h-[162px]"
              src="/images/team/eduardo.png"
            />

            <div className="flex flex-col justify-center w-full">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl mb-1">Eduardo Spanó</span>
                  <span
                    data-i18n="Diretor executivo"
                    className="text-base text-gray-700"
                  >
                    Diretor executivo
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/eduardospano/"
                    target="_blank"
                  >
                    <img src="/images/team/linkedin.svg" alt="" />
                  </a>
                  <a href="https://twitter.com/eduardospano" target="_blank">
                    <img src="/images/team/twitter.svg" alt="" />
                  </a>
                </div>
              </div>

              <div className="w-full h-[1px] bg-black my-4"></div>
              <span
                data-i18n="Doutorando em Política Científica e Tecnológica - Unicamp"
                className="text-base text-gray-600 mb-2"
              >
                Doutorando em Política Científica e Tecnológica - Unicamp
              </span>
              <span
                data-i18n="Msc. Administração Pública - Columbia"
                className="text-base text-gray-600 mb-2"
              >
                Msc. Administração Pública - Columbia
              </span>
              <span
                data-i18n="Graduado em Direito - USP"
                className="text-base text-gray-600  mb-2"
              >
                Graduado em Direito - USP
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="/images/team/barbara.png"
              alt=""
              className="w-[162px] h-[162px]"
            />

            <div className="flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl mb-1">Barbara Bueno</span>
                  <span
                    data-i18n="Gestora de projetos"
                    className="text-base text-gray-700"
                  >
                    Gestora de projetos
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/bárbara-sabadin-bueno-38777360/"
                    target="_blank"
                  >
                    <img src="/images/team/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black my-4"></div>
              <span
                data-i18n="Mestrado em Ciência Política - IESP-UERJ"
                className="text-base text-gray-600 mb-2"
              >
                Mestrado em Ciência Política - IESP-UERJ
              </span>
              <span
                data-i18n="Graduada em Relações Internacionais - UnB"
                className="text-base text-gray-600"
              >
                Graduada em Relações Internacionais - UnB
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="/images/team/rafael.png"
              alt=""
              className="w-[162px] h-[162px]"
            />

            <div className="flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl mb-1">Rafael Monnerat</span>
                  <span
                    data-i18n="Pesquisador e Analista júnior"
                    className="text-base text-gray-700"
                  >
                    Pesquisador e Analista júnior
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/rafaelmonnerat/"
                    target="_blank"
                  >
                    <img src="/images/team/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black my-4"></div>
              <span
                data-i18n="Mestrando em Política Científica Tecnológica – Unicamp"
                className="text-base text-gray-600 mb-2"
              >
                Mestrando em Política Científica Tecnológica – Unicamp
              </span>
              <span
                data-i18n="Graduado em Direito - UFRJ"
                className="text-base text-gray-600"
              >
                Graduado em Direito - UFRJ
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="/images/team/lucilla.jpg"
              alt=""
              className="w-[162px] h-[162px]"
            />
            <div className="flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl mb-1">Lucilla Dias</span>
                  <span
                    data-i18n="Especialista em clima"
                    className="text-base text-gray-700"
                  >
                    Especialista em clima
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/lucilladias/"
                    target="_blank"
                  >
                    <img src="/images/team/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black my-4"></div>
              <span
                data-i18n="Mestrado em Políticas Públicas - Oxford"
                className="text-base text-gray-600 mb-2"
              >
                Mestrado em Políticas Públicas - Oxford
              </span>
              <span
                data-i18n="Graduada em Engenharia Ambiental - Unesp"
                className="text-base text-gray-600"
              >
                Graduada em Engenharia Ambiental - Unesp
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="/images/team/ludimila.jpg"
              alt=""
              className="w-[162px] h-[162px]"
            />
            <div className="flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl mb-1">Ludimila da Bela Cruz</span>
                  <span
                    data-i18n="Especialista em tecnologia"
                    className="text-base text-gray-700"
                  >
                    Especialista em tecnologia
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/ludimilabela/"
                    target="_blank"
                  >
                    <img src="/images/team/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black my-4"></div>
              <span
                data-i18n="Graduada em Engenharia de Software - UnB"
                className="text-base text-gray-600"
              >
                Graduada em Engenharia de Software - UnB
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="/images/team/sofia.jpeg"
              alt=""
              className="w-[162px] h-[162px]"
            />
            <div className="flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl mb-1">Sofia Ferreira</span>
                  <span
                    data-i18n="Analista de Projetos de Inovação Pública"
                    className="text-base text-gray-700"
                  >
                    Analista de Projetos de Inovação Pública
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/sofiaferreira01/"
                    target="_blank"
                  >
                    <img src="/images/team/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black my-4"></div>
              <span
                data-i18n="Graduada em Gestão de Políticas Públicas - USP"
                className="text-base text-gray-600"
              >
                Graduada em Gestão de Políticas Públicas - USP
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="/images/team/thiago.jpeg"
              alt=""
              className="w-[162px] h-[162px]"
            />
            <div className="flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl mb-1">Thiago Matos</span>
                  <span
                    data-i18n="Gestor de projetos"
                    className="text-base text-gray-700"
                  >
                    Gestor de projetos
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/thiago-lima-matos/"
                    target="_blank"
                  >
                    <img src="/images/team/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black my-4"></div>
              <span
                data-i18n="Mestrando em Política Científica e Tecnológica - Unicamp"
                className="text-base text-gray-600 mb-2"
              >
                Mestrando em Política Científica e Tecnológica - Unicamp
              </span>
              <span
                data-i18n="Graduado em Engenharia de Produção - UEPA"
                className="text-base text-gray-600"
              >
                Graduado em Engenharia de Produção - UEPA
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="/images/team/marieli.jpeg"
              alt=""
              className="w-[162px] h-[162px]"
            />
            <div className="flex flex-col justify-center">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl mb-1">Mariéli Candido</span>
                  <span
                    data-i18n="Analista de Projetos de Inovação"
                    className="text-base text-gray-700"
                  >
                    Analista de Projetos de Inovação
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <a
                    href="https://www.linkedin.com/in/mari%C3%A9li-candido-9b764314/"
                    target="_blank"
                  >
                    <img src="/images/team/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-black my-4"></div>
              <span
                data-i18n="Mestra em Gestão Pública e Cooperação Internacional - UPFB"
                className="text-base text-gray-600 mb-2"
              >
                Mestra em Gestão Pública e Cooperação Internacional - UPFB
              </span>
              <span
                data-i18n="Graduada em Administração - UEPB"
                className="text-base text-gray-600"
              >
                Graduada em Administração - UEPB
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
