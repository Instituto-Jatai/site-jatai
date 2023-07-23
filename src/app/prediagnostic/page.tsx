import Script from "next/script";

/* eslint-disable @next/next/no-img-element */
const Prediagnostic = () => {
  return (
    <>
      <div className="h-[172px] bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/3YJ3LTB/Frame-685.png')]">
        <div className="container mx-auto px-4 md:px-0 h-full flex flex-col justify-center">
          <span
            data-i18n="Pré-diagnóstico"
            className="text-white text-4xl font-semibold not-italic md:max-w-[558px]"
          >
            Pré-diagnóstico
          </span>
        </div>
      </div>

      <div
        id="prediagnostic-section"
        className="container mx-auto px-4 md:px-0 py-16 flex flex-col gap-6"
      >
        <span
          data-i18n="O que é o Pré-diagnóstico?"
          className="text-4xl font-semibold"
        >
          O que é o Pré-diagnóstico?
        </span>

        <span data-i18n="O pré-diagnóstico é uma ferramenta para redes de ensino que não possuem sistemas de gestão ou querem aprimorar seu uso. A partir das respostas, podemos identificar soluções compatíveis com o cenário em que sua secretaria se encontra e propor soluções conjuntas.">
          O pré-diagnóstico é uma ferramenta para redes de ensino que não
          possuem sistemas de gestão ou querem aprimorar seu uso. A partir das
          respostas, podemos identificar soluções compatíveis com o cenário em
          que sua secretaria se encontra e propor soluções conjuntas.
        </span>

        <span data-i18n="Acesse:">Acesse:</span>

        <button
          id="showFormButton"
          data-i18n="Iniciar preenchimento"
          className="bg-green-700 mr-auto px-6 py-3 text-white rounded-xl"
        >
          Iniciar preenchimento
        </button>
      </div>

      <div
        id="typeform-widget"
        className="hidden h-[840px]"
        data-tf-widget="gXXiZqn3"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Diagnóstico"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
      ></div>

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

      <Script src="//embed.typeform.com/next/embed.js" />

      <Script id="show-type-form">
        {`
            function showForm() {
              document.getElementById("typeform-widget").classList.remove("hidden");
              
              document.getElementById("prediagnostic-section").classList.add("hidden");
            }

            document.getElementById("showFormButton").addEventListener("click", showForm);

         `}
      </Script>
    </>
  );
};

export default Prediagnostic;
