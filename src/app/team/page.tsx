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
              src="https://i.ibb.co/ncSxgG9/h-C-u0t1a-Gf5l-Zt39-PHjhsq-R0-A6q-TLJMGvzfur-Es-BGu4-MYHi45-OQw-Q89-HLZg4j-Xqma-NL-MGLn-Ofvcw-Ox3-Ub.png"
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
                className="text-base text-gray-600 mb-4"
              ></span>
              <span
                data-i18n="Msc. Administração Pública - Columbia Graduado em Direito - USP"
                className="text-base text-gray-600"
              ></span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="https://i.ibb.co/p20DDyr/barbara.png"
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
                  ></span>
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
                className="text-base text-gray-600 mb-4"
              ></span>
              <span
                data-i18n="Graduada em Relações Internacionais - UnB"
                className="text-base text-gray-600"
              ></span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="https://i.ibb.co/sqQsH0q/rafael.png"
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
                  ></span>
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
                className="text-base text-gray-600 mb-4"
              ></span>
              <span
                data-i18n="Graduado em Direito - UFRJ"
                className="text-base text-gray-600"
              ></span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="https://i.ibb.co/kyVHjY2/lucilla.jpg"
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
                  ></span>
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
                className="text-base text-gray-600 mb-4"
              ></span>
              <span
                data-i18n="Graduada em Engenharia Ambiental - Unesp"
                className="text-base text-gray-600"
              ></span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:items-center gap-9">
            <img
              src="https://i.ibb.co/M5sfnpb/ludimila.jpg"
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
                  ></span>
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
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
