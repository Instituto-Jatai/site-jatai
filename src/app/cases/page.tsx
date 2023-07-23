/* eslint-disable @next/next/no-img-element */
import CasesCard from "@/components/cases-card";

const Cases = () => {
  return (
    <>
      <div className="h-[172px] bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/3YJ3LTB/Frame-685.png')]">
        <div className="container mx-auto px-4 md:px-0 h-full flex flex-col justify-center">
          <span
            data-i18n="Casos"
            className="text-white text-4xl font-semibold not-italic"
          >
            Casos
          </span>
        </div>
      </div>

      <div className="container mx-auto my-16 px-4 md:px-0">
        <div className="flex flex-col text-black gap-y-6">
          <span
            className="lg:max-w-[756px]"
            data-i18n="Tem dúvidas sobre como as compras públicas podem promover inovação e potencializar governos mais digitais e sustentáveis? Nós reunimos aqui casos diversos, com o objetivo de disseminar práticas inovadoras, promovendo o conhecimento, oportunidades de conexão e fortalecimento de redes."
          >
            Tem dúvidas sobre como as compras públicas podem promover inovação e
            potencializar governos mais digitais e sustentáveis? Nós reunimos
            aqui casos diversos, com o objetivo de disseminar práticas
            inovadoras, promovendo o conhecimento, oportunidades de conexão e
            fortalecimento de redes.
          </span>
        </div>
      </div>

      <div className="container mx-auto my-16 px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-16">
        <CasesCard
          knowMoreLink="/cases/rio-grande-do-sul"
          image="/images/cases/rio-grande-do-sul.svg"
          title="Como contratar tecnologias educacionais em escala?"
          sub-title="Casos da Ata de Registro de Preços na Secretaria Estadual de Educação do Rio Grande do Sul"
          description="A Secretaria de Educação do Rio Grande do Sul, em parceria com a Secretaria de Gestão, realizou a contratação de tecnologias para apoiar professores na diversificação das suas práticas pedagógicas em português e matemática. Este material tem como objetivo compartilhar principalmente os desafios e aprendizados das secretarias que realizaram pregão eletrônico de uma Ata de Registro de Preços para compra de recursos educacionais digitais, abrindo oportunidade para que não somente a rede estadual, mas também as redes municipais interessadas, pudessem contratar esses recursos."
        />
        <CasesCard
          knowMoreLink="/cases/monte-alegre"
          image="/images/cases/monte-alegre.jpg"
          title="Como melhorar resultados educacionais, otimizar recursos e gerenciar as rotinas da Secretaria de Educação?"
          sub-title="O caso da secretaria de educação de Monte Alegre, no Rio Grande do Norte"
          description="A Secretaria Municipal de Educação de Monte Alegre, no Rio Grande do Norte, realizou a contratação de serviço de suporte para o uso do sistema i-Educar. Como o sistema tem licenciamento livre e está disponível para todos, a rede realizou a instalação por conta própria em 2014. Ao perceber a necessidade de aprofundamento do uso, decidiu pela contratação de um serviço de suporte ao sistema, com oferta de hospedagem, manutenção corretiva, suporte técnico e desenvolvimento de módulos específicos."
        />
        <CasesCard
          knowMoreLink="/cases/impulsionar"
          image="/images/cases/impulsionar.png"
          title="Como contratar recursos educacionais digitais (edtechs) para educação pública? Casos de uso do Marco Legal de Startups no programa impulsiONar"
          description="O Programa ImpulsiONar tem como objetivo apoiar Secretarias Municipais de Educação no desenvolvimento de estratégias de prevenção e redução de defasagens em Língua Portuguesa e Matemática de estudantes do 6º ao 9º ano de sua rede de escolas públicas. A intervenção do programa nas Secretarias parte de um modelo pedagógico, que é colocado em prática nas redes por meio do apoio de organizações educacionais que oferecem serviços de implementação e formação de professores, além de ter a tecnologia (edtechs) como um recurso didático chave. Para fomentar o uso de tecnologia, o impulsiONar também apoia as Secretarias com os procedimentos jurídicos, financeiros e de gestão para testar a utilização de edtechs (recursos educacionais digitais). Três Secretarias Municipais de Educação realizaram, por meio do Marco Legal de Startups, a contratação de recursos educacionais digitais (edtechs) para apoiar professores e estudantes na evolução da aprendizagem de Matemática e Língua Portuguesa."
        />
      </div>

      <section about="partners" className="bg-gray-100  p-4 md:p-0">
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
};

export default Cases;
