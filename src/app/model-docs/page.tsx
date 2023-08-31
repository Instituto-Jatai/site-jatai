/* eslint-disable jsx-a11y/alt-text */
import ModelDoc from "@/components/model-doc";

const models = [
  {
    tag: "Modelo ETP e TR",
    title: "Para contratação de sistema de gestão escolar",
    description:
      'Os modelos de <span class="text-[#292929]">Estudo Técnico Preliminar (ETP)</span> e <span class="text-[#292929]">Termo de Referência (TR)</span> para a contratação de i-Educar e i-Diário estão prontos para serem utilizados por qualquer Secretaria de Educação interessada em informatizar a gestão escolar.',
    descriptionMore:
      "Esses sistemas são de código aberto e possuem licenciamento gratuito, o que significa que o foco da contratação está no serviço de sustentação do sistema, isto é, a implementação dos sistemas, a migração de dados, o treinamento dos servidores, além da hospedagem em nuvem, suporte técnico e manutenção corretiva e evolutiva. É importante ressaltar que os modelos foram desenvolvidos considerando o acesso público ao código-fonte, visando estimular a ampla concorrência e garantir transparência no processo. Os modelos são para contratação em formato pregão e, a fim de promover ainda mais a participação e a transparência, recomendamos a realização de uma consulta pública antes da contratação. Estamos à disposição caso precisem de ajuda nesse processo, é só agendar uma conversa aqui pelo site!",
    files: [
      "Modelo ETP - Estudo Técnico Preliminar da contratação",
      "Modelo TR - Termo de Referência",
    ],
    linkToDownload: "https://www.jatai.org.br/files/docs_modelo.zip",
  },
  {
    tag: "Modelo ETP e TR",
    title: "Para montar equipes de tecnologia",
    description:
      'Os modelos de <span class="text-[#292929]">Estudo Técnico Preliminar (ETP)</span> e <span class="text-[#292929]">Termo de Referência (TR)</span> para contratação de Ateliê de Software estão prontos para serem utilizados por qualquer organização pública interessada em terceirização de equipes de tecnologia.',
    descriptionMore:
      "A terceirização de equipes no modelo de Ateliê de Software foca na contratação de equipes multidisciplinares para desenvolvimento de produtos digitais utilizando métodos ágeis e design centrado no usuário.",
    files: [
      "Modelo TR Ateliê",
      "Modelo TR Ateliê (Anexo II) - Composição de custos e formação de preços",
      "Modelo ETP Ateliê",
    ],
    linkToDownload: "https://www.jatai.org.br/files/docs_modelo_atelie.zip",
  },
  {
    tag: "Modelo ETP e TR",
    title: "Para fazer contratações inovadoras",
    description:
      "As contratações no contexto do Marco Legal de Startups (LCP 182/2021) ainda representam desafios para o governo. Por isso, disponibilizamos modelos para serem usados por qualquer organização pública interessada no lançamento de desafios de inovação.",
    descriptionMore:
      "São os seguintes documentos: <br /> <br />- Um passo a passo para a realização do Contrato Público de Solução Inovadora e para o Contrato de Fornecimento, que também explica, brevemente, o contexto do Programa Impulsionar onde foram produzidos.<br /><br />- Para o Contrato Público de Solução Inovadora, disponibilizamos o Estudo Técnico Preliminar (ETP), Termo de Referência (TR), e Edital de Licitação. <br /><br />- Para o Contrato de Fornecimento, disponibilizamos modelos de Portaria para avaliação, o Parecer Técnico Conclusivo, a Nota Técnica de Formalização de Demanda e a Minuta de Contrato.",
    files: [
      "1. Passo a passo para formalização do contrato de fornecimento de acordo com o Marco Legal das Startup",
      "Modelo 1. CPSI. Estudo Técnico Preliminar MLSEI",
      "Modelo 2. CPSI. Termo de Referência MLSEI",
      "Modelo 3. CPSI. Edital de licitação MLSEI",
      "Modelo 4. Contrato de Fornecimento. Minuta_Portaria Comitê",
      "Modelo 5. Contrato de Fornecimento. Parecer Técnico Conclusivo",
      "Modelo 6. Contrato de Fornecimento. Nota Técnica de Formalização de Demanda",
      "Modelo 7. Contrato de Fornecimento. Minuta_Contrato de Fornecimento",
    ],
    linkToDownload: "https://www.jatai.org.br/files/docs_modelo_inovacao.zip",
  },
];

/* eslint-disable @next/next/no-img-element */
const ModelDocs = () => {
  return (
    <>
      <div className="h-[172px] bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/Lnf1byd/hero-contact.png')]">
        <div className="container mx-auto px-4 md:px-0 h-full flex flex-col justify-center">
          <span
            className="text-white text-4xl font-semibold not-italic md:max-w-[558px]"
            data-i18n="Documentos modelo"
          >
            Documentos modelo
          </span>
        </div>
      </div>

      <div className="container mx-auto flex flex-col my-16">
        {models.map((model, index) => (
          <ModelDoc key={index} model={model} index={index} />
        ))}
      </div>
    </>
  );
};

export default ModelDocs;
