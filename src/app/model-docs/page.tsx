/* eslint-disable jsx-a11y/alt-text */
import Script from "next/script";

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

      <div className="container mx-auto py-16 px-4 md:px-0 flex gap-16 flex-col md:flex-row">
        <div className="flex-1 border-2 flex flex-col border-gray-200 rounded-2xl p-6 w-full">
          <img
            className="bg-gray-50 rounded-xl h-14 w-14 p-3"
            src="/images/model-docs/file.svg"
            alt=""
          />

          <span
            data-i18n="Modelo ETP e TR"
            className="mt-6 text-base font-semibold text-gray-700"
          >
            Modelo ETP e TR
          </span>
          <span
            data-i18n="Para contratação de sistema de gestão escolar"
            className="mt-2 text-xl font-semibold"
          >
            Para contratação de sistema de gestão escolar
          </span>

          <span
            data-i18n="Os modelos de Estudo Técnico Preliminar (ETP) e Termo de Referência (TR) para a contratação de i-Educar e i-Diário estão prontos para serem utilizados por qualquer Secretaria de Educação interessada em informatizar a gestão escolar. Esses sistemas são de código aberto e possuem licenciamento gratuito, o que significa que o foco da contratação está no serviço de sustentação do sistema, isto é, a implementação dos sistemas, a migração de dados, o treinamento dos servidores, além da hospedagem em nuvem, suporte técnico e manutenção corretiva e evolutiva. É importante ressaltar que os modelos foram desenvolvidos considerando o acesso público ao código-fonte, visando estimular a ampla concorrência e garantir transparência no processo. Os modelos são para contratação em formato pregão e, a fim de promover ainda mais a participação e a transparência, recomendamos a realização de uma consulta pública antes da contratação. Estamos à disposição caso precisem de ajuda nesse processo, é só agendar uma conversa aqui pelo site!"
            className="mt-6 text-base"
          >
            Os modelos de <b>Estudo Técnico Preliminar (ETP)</b> e
            <b>Termo de Referência (TR)</b> para a contratação de i-Educar e
            i-Diário estão prontos para serem utilizados por qualquer Secretaria
            de Educação interessada em informatizar a gestão escolar. Esses
            sistemas são de código aberto e possuem licenciamento gratuito, o
            que significa que o foco da contratação está no serviço de
            sustentação do sistema, isto é, a implementação dos sistemas, a
            migração de dados, o treinamento dos servidores, além da hospedagem
            em nuvem, suporte técnico e manutenção corretiva e evolutiva. É
            importante ressaltar que os modelos foram desenvolvidos considerando
            o acesso público ao código-fonte, visando estimular a ampla
            concorrência e garantir transparência no processo. Os modelos são
            para contratação em formato pregão e, a fim de promover ainda mais a
            participação e a transparência, recomendamos a realização de uma
            consulta pública antes da contratação. Estamos à disposição caso
            precisem de ajuda nesse processo, é só agendar uma conversa aqui
            pelo site!
          </span>
          <button
            id="sistem-model-button"
            className="py-[14px] px-6 rounded-xl bg-green-700 text-white mt-12"
            data-i18n="Baixar modelo"
          >
            Baixar modelo
          </button>
        </div>

        <div className="flex-1 border-2 flex flex-col border-gray-200 rounded-2xl p-6 w-full">
          <img
            className="bg-gray-50 rounded-xl h-14 w-14 p-3"
            src="/images/model-docs/file.svg"
            alt=""
          />

          <span
            data-i18n="Modelo ETP e TR"
            className="mt-6 text-base font-semibold text-gray-700"
          >
            Modelo ETP e TR
          </span>
          <span
            data-i18n="Para montar equipes de tecnologia"
            className="mt-2 text-xl font-semibold"
          >
            Para montar equipes de tecnologia
          </span>

          <span
            data-i18n="Os modelos de <b>Estudo Técnico Preliminar (ETP)</b> e <b>Termo de Referência (TR)</b> para contratação de Ateliê de Software estão prontos para serem utilizados por qualquer organização pública interessada em terceirização de equipes de tecnologia. A terceirização de equipes no modelo de Ateliê de Software foca na contratação de equipes multidisciplinares para desenvolvimento de produtos digitais utilizando métodos ágeis e design centrado no usuário."
            className="mt-6 mb-12 text-base"
          >
            Os modelos de <b>Estudo Técnico Preliminar (ETP)</b> e{" "}
            <b>Termo de Referência (TR)</b> para contratação de Ateliê de
            Software estão prontos para serem utilizados por qualquer
            organização pública interessada em terceirização de equipes de
            tecnologia. A terceirização de equipes no modelo de Ateliê de
            Software foca na contratação de equipes multidisciplinares para
            desenvolvimento de produtos digitais utilizando métodos ágeis e
            design centrado no usuário.
          </span>
          <button
            id="team-model-button"
            className="py-[14px] px-6 rounded-xl bg-green-700 text-white mt-auto"
            data-i18n="Baixar modelo"
          >
            Baixar modelo
          </button>
        </div>
      </div>

      <div id="modal-sistem" className="fixed inset-0 z-20 hidden">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden mx-auto z-30 w-[90%] max-w-[568px] flex flex-col relative">
            <button
              id="sistem-modal-close-button"
              className="bg-gray-100  absolute top-3 right-3 p-2 rounded-full transition-all hover:bg-gray-300"
            >
              <img
                className="w-4 h-4"
                alt="close modal"
                src="/images/home/close-modal.svg"
              />
            </button>
            <h1
              className="text-2xl font-semibold"
              data-i18n="Complete o formulário e faça o download gratuito do documentos modelo"
            >
              Complete o formulário e faça o download gratuito do documentos
              modelo
            </h1>

            <form id="sistem-model-form" className="flex flex-col mt-6">
              <label
                htmlFor="sistem-model-name"
                className="mb-2 font-medium text-sm"
                data-i18n="Nome"
              >
                Nome
              </label>
              <input
                id="sistem-model-name"
                name="sistem-model-name"
                placeholder="Nome"
                required
                className="mb-6 rounded-lg border-[1px] border-solid border-gray-400 px-4 py-3"
              />

              <label
                htmlFor="sistem-model-email"
                className="mb-2 font-medium text-sm"
                data-i18n="E-mail"
              >
                E-mail
              </label>
              <input
                id="sistem-model-email"
                type="email"
                name="sistem-model-email"
                placeholder="Email"
                required
                className="mb-6 rounded-lg border-[1px] border-solid border-gray-400 px-4 py-3"
              />

              <label
                htmlFor="sistem-model-organization"
                className="mb-2 font-medium text-sm"
                data-i18n="Orgão Público"
              >
                Orgão Público
              </label>
              <input
                id="sistem-model-organization"
                name="sistem-model-organization"
                required
                placeholder="Orgão Público"
                className="mb-6 rounded-lg border-[1px] border-solid border-gray-400 px-4 py-3"
              />

              <div className="rounded-xl bg-[#FAFAFA] font-medium w-full flex flex-col mb-8">
                <div className="p-3 flex items-center">
                  <img src="/images/model-docs/file.svg" className="mr-3" />
                  Modelo ETP - Estudo Técnico Preliminar da Contratação
                </div>
                <span className="w-full h-[1px] bg-[#F3F3F3]"> </span>
                <div className="p-3 flex">
                  <img src="/images/model-docs/file.svg" className="mr-3" />
                  Modelo TR - Termo de Referência
                </div>
              </div>

              <button
                className="bg-[#008040] text-white px-6 py-3 rounded-xl text-base font-medium font-body"
                data-i18n="Baixar modelos"
              >
                Baixar modelos
              </button>
            </form>
          </div>
        </div>
        <div className="fixed inset-0 bg-black opacity-30"></div>
      </div>

      <div id="modal-team" className="fixed inset-0 z-20 hidden">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden mx-auto z-30 w-[90%] max-w-[568px] flex relative flex-col">
            <button
              id="team-modal-close-button"
              className="bg-gray-100 absolute top-3 right-3 p-2 rounded-full transition-all hover:bg-gray-300"
            >
              <img
                className="w-4 h-4"
                alt="close modal"
                src="/images/home/close-modal.svg"
              />
            </button>
            <h1
              className="text-2xl font-semibold"
              data-i18n="Complete o formulário e faça o download gratuito do documentos modelo"
            >
              Complete o formulário e faça o download gratuito do documentos
              modelo
            </h1>
            <form id="modal-team-form" className="flex flex-col mt-6">
              <label
                htmlFor="modal-team-name"
                className="mb-2 font-medium text-sm"
                data-i18n="Nome"
              >
                Nome
              </label>
              <input
                id="modal-team-name"
                name="modal-team-name"
                placeholder="Nome"
                required
                className="mb-6 rounded-lg border-[1px] border-solid border-gray-400 px-4 py-3"
              />

              <label
                htmlFor="modal-team-email"
                className="mb-2 font-medium text-sm"
                data-i18n="E-mail"
              >
                E-mail
              </label>
              <input
                id="modal-team-email"
                type="email"
                name="modal-team-email"
                placeholder="Email"
                required
                className="mb-6 rounded-lg border-[1px] border-solid border-gray-400 px-4 py-3"
              />

              <label
                htmlFor="modal-team-organization"
                className="mb-2 font-medium text-sm"
                data-i18n="Orgão Público"
              >
                Orgão Público
              </label>
              <input
                id="modal-team-organization"
                name="modal-team-organization"
                required
                placeholder="Orgão Público"
                className="mb-6 rounded-lg border-[1px] border-solid border-gray-400 px-4 py-3"
              />

              <div className="rounded-xl bg-[#FAFAFA] font-medium w-full flex flex-col mb-8">
                <div className="p-3 flex items-center">
                  <img src="/images/model-docs/file.svg" className="mr-3" />
                  Modelo TR Ateliê
                </div>
                <span className="w-full h-[1px] bg-[#F3F3F3]"> </span>
                <div className="p-3 flex">
                  <img src="/images/model-docs/file.svg" className="mr-3" />
                  Modelo TR Ateliê (Anexo II) - Composição de custos e formação
                  de preços
                </div>
                <span className="w-full h-[1px] bg-[#F3F3F3]"> </span>
                <div className="p-3 flex">
                  <img src="/images/model-docs/file.svg" className="mr-3" />
                  Modelo ETP Ateliê
                </div>
              </div>

              <button
                className="bg-[#008040] text-white px-6 py-3 rounded-xl text-base font-medium font-body"
                data-i18n="Baixar modelos"
              >
                Baixar modelos
              </button>
            </form>
          </div>
        </div>
        <div className="fixed inset-0 bg-black opacity-30"></div>
      </div>

      <div id="modal-success" className="fixed inset-0 z-20 hidden">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden mx-auto z-30 w-[90%] max-w-[568px] flex relative flex-col">
            <button
              id="modal-success-close-button"
              className="bg-gray-100 absolute top-3 right-3 p-2 rounded-full transition-all hover:bg-gray-300"
            >
              <img
                className="w-4 h-4"
                alt="close modal"
                src="/images/home/close-modal.svg"
              />
            </button>
            <img
              src="/images/model-docs/check-circle.svg"
              alt="Check"
              className="w-20 h-20 mx-auto"
            />
            <h1
              className="text-xl font-semibold text-center mt-4"
              data-i18n="Os documentos foram baixados com sucesso."
            >
              Os documentos foram baixados com sucesso.
            </h1>
            <p
              className="text-[#3D3D3D] text-center mt-1"
              data-i18n="Por favor, verifique a pasta de downloads do seu computador para acessá-los."
            >
              Por favor, verifique a pasta de downloads do seu computador para
              acessá-los.
            </p>
            <button
              id="modal-success-close-button-2"
              data-i18n="Fechar"
              className="bg-[#008040] text-white px-6 py-3 rounded-xl text-base font-medium font-body mt-8"
            >
              Fechar
            </button>
          </div>
        </div>
        <div className="fixed inset-0 bg-black opacity-30"></div>
      </div>
      <Script id="handle-modal">
        {`
            function closeEditalModal(id) {
              document.getElementById(id).classList.add("hidden");
            }
            function openEditalModal(id) {
              document.getElementById(id).classList.remove("hidden");
            }
            
            document.getElementById("team-model-button").addEventListener("click", () => {
              openEditalModal('modal-team');
            });
            document.getElementById("sistem-model-button").addEventListener("click", () => {
              openEditalModal('modal-sistem');
            });
            
            document.getElementById("modal-success-close-button").addEventListener("click", () => {
              closeEditalModal('modal-success');
            });
            document.getElementById("modal-success-close-button-2").addEventListener("click", () => {
              closeEditalModal('modal-success');
            });
            document.getElementById("team-modal-close-button").addEventListener("click", () => {
              closeEditalModal('modal-team');
            });
            document.getElementById("sistem-modal-close-button").addEventListener("click", () => {
              closeEditalModal('modal-sistem');
            });

            document.getElementById("sistem-model-form").addEventListener("submit", function(e) {
              e.preventDefault();
              var form = document.getElementById("sistem-model-form");
              var formData = new FormData(form);
              var xhr = new XMLHttpRequest();
              xhr.open("POST", "https://script.google.com/macros/s/AKfycbxxLLoQU9UeGf5BghtWh7UzpjOUc9CS73SU-K7h5_7V9Lzu5HERGY--AIiitA03forX6Q/exec", true);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                  form.reset();
                }
              };
              xhr.send(formData);
        
              const file1Url = 'https://'+window.location.hostname+'/files/Modelo_TR.docx';
              const file2Url = 'https://'+window.location.hostname+'/files/Modelo_ETP.docx';
              
              downloadFile(file1Url);
              downloadFile(file2Url);
              openEditalModal('modal-success');
              closeEditalModal('modal-sistem');
            });

            document.getElementById("modal-team-form").addEventListener("submit", function(e) {
              e.preventDefault();
              var form = document.getElementById("modal-team-form");
              var formData = new FormData(form);
              var xhr = new XMLHttpRequest();
              xhr.open("POST", "https://script.google.com/macros/s/AKfycbxxLLoQU9UeGf5BghtWh7UzpjOUc9CS73SU-K7h5_7V9Lzu5HERGY--AIiitA03forX6Q/exec", true);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                  form.reset();
                }
              };
              xhr.send(formData);
        
              const file1Url = 'https://'+window.location.hostname+'/files/Modelo_ETP_Atelie.docx';
              const file2Url = 'https://'+window.location.hostname+'/files/Modelo_TR_Atelie_Anexo_II.xlsx';
              const file3Url = 'https://'+window.location.hostname+'/files/Modelo_TR_Atelie.docx';
              
              downloadFile(file1Url);
              downloadFile(file2Url);
              downloadFile(file3Url);
              openEditalModal('modal-success');
              closeEditalModal('modal-team');
            });
        
            function downloadFile(url) {
              var a = document.createElement('a');
              a.href = url;
              a.download = url.split('/').pop();
              document.body.appendChild(a);
              a.click();
              setTimeout(function() {
                document.body.removeChild(a);
              }, 0);
            }
          `}
      </Script>
    </>
  );
};

export default ModelDocs;
