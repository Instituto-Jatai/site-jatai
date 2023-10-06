import Accordion from "@/components/accordion";
import HomeSlider from "@/components/home-slider";

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

      <section about="what-we-do" className="container mx-auto p-4 md:p-0">
        <div className="container flex flex-col">
          <span
            data-i18n="O que fazemos"
            className="text-gray-800 mt-16 text-4xl font-semibold"
          >
            O que fazemos
          </span>
          <span
            data-i18n="Ajudamos você que é gestor público a enfrentar os desafios da inovação e digitalização no setor público. Construímos com você soluções para desafios de equipe, governança, recursos e contratações."
            className="text-gray-800 text-base mt-6 max-w-[756px]"
          >
            Ajudamos você que é gestor público a enfrentar os desafios da
            inovação e digitalização no setor público. Construímos com você
            soluções para desafios de equipe, governança, recursos e
            contratações.
          </span>

          <div className="my-16">
            <Accordion
              id="hiring-teams"
              title="Construir equipes de tecnologia"
              icon="images/home/team.svg"
            >
              <div className="ml-10 md:ml-20">
                <span
                  data-i18n="Apoiamos a criação de equipe interna e contratação de equipes."
                  className="font-semibold"
                >
                  Apoiamos a criação de equipe interna e contratação de equipes.
                </span>

                <ul className="mt-8 pl-6 list-disc">
                  <li>
                    <span data-i18n="<b>Por quê?</b> Sem equipes de tecnologia adequadas e qualificadas, iniciativas de uso de tecnologias não prosperam. Por isso, é importante garantir uma equipe com capacidade para transformar sua organização com uso de tecnologia.">
                      <b>Por quê?</b> Sem equipes de tecnologia adequadas e
                      qualificadas, iniciativas de uso de tecnologias não
                      prosperam. Por isso, é importante garantir uma equipe com
                      capacidade para transformar sua organização com uso de
                      tecnologia.
                    </span>
                  </li>

                  <li>
                    <span data-i18n="<b>O que fazemos?</b> Apoiamos na definição de perfis necessários, da estrutura organizacional e na contratação de equipes multidisciplinares em modelo de Ateliê de software, para superar as dificuldades com as antigas contratações de fábrica de software">
                      <b>O que fazemos?</b> Apoiamos na definição de perfis
                      necessários, da estrutura organizacional e na contratação
                      de equipes multidisciplinares em modelo de Ateliê de
                      software, para superar as dificuldades com as antigas
                      contratações de fábrica de software
                    </span>
                  </li>

                  <li>
                    <span data-i18n="<b>Resultados esperados:</b> Equipe estruturada e com capacidade de entrega de produtos digitais de qualidade mais rapidamente">
                      <b>Resultados esperados:</b> Equipe estruturada e com
                      capacidade de entrega de produtos digitais de qualidade
                      mais rapidamente
                    </span>
                  </li>
                </ul>
              </div>
            </Accordion>

            <div className="w-full h-[1px] bg-black my-16"></div>

            <Accordion
              id="open-source"
              title="Digitalizar gestão com uso de tecnologias abertas"
              icon="images/home/code.svg"
            >
              <div className="ml-10 md:ml-20">
                <span
                  data-i18n="Apoiamos a escolha de tecnologias abertas que gerem impacto, eficiência e autonomia."
                  className="font-semibold"
                >
                  Apoiamos a escolha de tecnologias abertas que gerem impacto,
                  eficiência e autonomia.
                </span>

                <ul className="mt-8 pl-6 list-disc">
                  <li>
                    <span data-i18n="<b>Por quê?</b> Tecnologias abertas oferecem soluções comuns para necessidades compartilhadas entre diferentes organizações públicas. Mas além de entregarem resultados, geram mais eficiência nos gastos com tecnologias, garantem independência com relação aos fornecedores e permitem mais flexibilidade na entrega do serviço público.">
                      <b>Por quê?</b> Tecnologias abertas oferecem soluções
                      comuns para necessidades compartilhadas entre diferentes
                      organizações públicas. Mas além de entregarem resultados,
                      geram mais eficiência nos gastos com tecnologias, garantem
                      independência com relação aos fornecedores e permitem mais
                      flexibilidade na entrega do serviço público.
                    </span>
                  </li>

                  <li>
                    <span data-i18n="<b>O que fazemos?</b> Apoiamos na busca de software em código-aberto que resolvam problemas de gestão pública, no levantamento do mercado de fornecedores para essas soluções e na contratação para implantação e fornecimento e suporte dessas soluções para a organização pública.">
                      <b>O que fazemos?</b> Apoiamos na busca de software em
                      código-aberto que resolvam problemas de gestão pública, no
                      levantamento do mercado de fornecedores para essas
                      soluções e na contratação para implantação e fornecimento
                      e suporte dessas soluções para a organização pública.
                    </span>
                  </li>

                  <li>
                    <span data-i18n="<b>Resultados esperados:</b> Tecnologia aberta contratada e implantada, gerando resultados para a organização pública.">
                      <b>Resultados esperados:</b> Tecnologia aberta contratada
                      e implantada, gerando resultados para a organização
                      pública.
                    </span>
                  </li>
                </ul>
              </div>
            </Accordion>

            <div className="w-full h-[1px] bg-black my-16"></div>

            <Accordion
              id="public-problemns"
              title="Contratar soluções para problemas públicos"
              icon="images/home/lightbulb.svg"
            >
              <div className="ml-10 md:ml-20">
                <span
                  data-i18n="Apoiamos na definição de problemas públicos e chamada de soluções para o ecossistema de inovação."
                  className="font-semibold"
                >
                  Apoiamos na definição de problemas públicos e chamada de
                  soluções para o ecossistema de inovação.
                </span>

                <ul className="mt-8 pl-6 list-disc">
                  <li>
                    <span data-i18n="<b>Por quê?</b> Nem sempre a melhor solução para os problemas públicos sai de dentro das nossas organizações. Abrir problemas do governo para o ecossistema de inovação, permitindo o teste de soluções e sua contratação tem grande potencial para a resolução desses problemas de forma criativa.">
                      <b>Por quê?</b> Nem sempre a melhor solução para os
                      problemas públicos sai de dentro das nossas organizações.
                      Abrir problemas do governo para o ecossistema de inovação,
                      permitindo o teste de soluções e sua contratação tem
                      grande potencial para a resolução desses problemas de
                      forma criativa.
                    </span>
                  </li>

                  <li>
                    <span data-i18n="<b>O que fazemos?</b> Apoiamos na definição de problemas públicos e na realização da chamada de soluções para o ecossistema de inovação. Estruturamos a chamada tendo como base a licitação prevista no Marco Legal de Startups e Empreendedorismo, o que permite o pagamento dos testes pela organização pública, assim como sua contratação caso esses testes sejam bem sucedidos.">
                      <b>O que fazemos?</b> Apoiamos na definição de problemas
                      públicos e na realização da chamada de soluções para o
                      ecossistema de inovação. Estruturamos a chamada tendo como
                      base a licitação prevista no Marco Legal de Startups e
                      Empreendedorismo, o que permite o pagamento dos testes
                      pela organização pública, assim como sua contratação caso
                      esses testes sejam bem sucedidos.
                    </span>
                  </li>

                  <li>
                    <span data-i18n="<b>Resultados esperados:</b> Teste de soluções e contratação para a resolução do problema apresentado.">
                      <b>Resultados esperados:</b> Teste de soluções e
                      contratação para a resolução do problema apresentado.
                    </span>
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      <section about="partners" className="bg-gray-100  p-4 md:p-0">
        <div className="container py-14 mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col">
              <span
                data-i18n="Código de Conduta"
                className="text-4xl font-semibold mb-4"
              >
                Código de Conduta
              </span>
              <a
                data-i18n="Visualizar documento"
                href="https://www.jatai.org.br/files/codigo_de_conduta.pdf"
                className="bg-green-700 cursor-pointer text-white mb-4 px-6 py-[14px] rounded-xl font-semibold mr-auto transition-all hover:bg-green-800"
              >
                Visualizar documento
              </a>
            </div>
            <div className="flex-1">
              <span
                className="text-base"
                data-i18n="O Instituto Jataí se preocupa em adotar um comportamento ético e responsável no apoio às contratações públicas, protegendo o Estado de Direito e a integridade de todos com quem atuamos. Por isso, buscamos registrar nesse Código de Conduta valores e orientações claras sobre o comportamento esperado, bem como medidas de conflito de interesse, para profissionais do Instituto Jataí e seus parceiros públicos."
              >
                O Instituto Jataí se preocupa em adotar um comportamento ético e
                responsável no apoio às contratações públicas, protegendo o
                Estado de Direito e a integridade de todos com quem atuamos. Por
                isso, buscamos registrar nesse Código de Conduta valores e
                orientações claras sobre o comportamento esperado, bem como
                medidas de conflito de interesse, para profissionais do
                Instituto Jataí e seus parceiros públicos.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section about="partners" className="p-4 md:p-0">
        <div className="container py-14 mx-auto">
          <span
            data-i18n="Parceiros, Beneficiários e Clientes"
            className="text-4xl font-semibold"
          >
            Parceiros, Beneficiários e Clientes
          </span>

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
      </section>
    </>
  );
}
