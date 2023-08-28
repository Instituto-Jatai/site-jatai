"use client";

import { useRef, useState } from "react";

type Props = {
  model: {
    tag: string;
    title: string;
    description: string;
    descriptionMore: string;
    files: string[];
    linkToDownload: string;
  };
  index: number;
};

const ModelDoc: React.FC<Props> = ({ model, index }) => {
  const formRef = useRef(null);
  const [readMore, setReadMore] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const downloadFile = (url: string) => {
    var a: any = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
    }, 0);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      var xhr = new XMLHttpRequest();

      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbxpfU_8XisGE0r3LX1_3eGJg9Y7Lacs1nWbT2LqF-derDEdoSdgZQUwhwq3bFlqjVCMqQ/exec",
        true
      );

      xhr.onreadystatechange = function () {};

      xhr.send(formData);

      downloadFile(model.linkToDownload);
      setIsOpen(false);
      setIsSuccess(true);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        {index > 0 && <div className="my-16 h-[1px] bg-[#EBEBEB]" />}
        <div className="flex flex-row gap-6">
          <div className="flex flex-col flex-1">
            <span data-i18n={model.tag} className="text-sm text-gray-800">
              {model.tag}
            </span>
            <span
              data-i18n={model.title}
              className="mt-2 font-semibold text-2xl text-[#292929] "
            >
              {model.title}
            </span>
            <span
              className="mt-6 text-[#666666] text-base"
              data-i18n={model.description}
            >
              {model.description}
            </span>
            {readMore && (
              <span
                className="mt-6 text-[#666666] text-base"
                data-i18n={model.description}
                dangerouslySetInnerHTML={{ __html: model.descriptionMore }}
              >
                {}
              </span>
            )}
            {!readMore && (
              <button
                className="mr-auto bg-gray-100 px-3 py-[10px] rounded-3xl text-sm mt-6"
                data-i18n="Ver mais"
                onClick={() => setReadMore(true)}
              >
                Ver mais
              </button>
            )}
          </div>
          <div className="flex flex-col flex-1 bg-[#FAFAFA] p-6 rounded-xl">
            <div className="flex flex-row">
              <img
                className="h-6 w-6"
                src="/images/model-docs/file-alt.svg"
                alt=""
              />
              <span className="ml-2 text-lg font-medium" data-i18n="Modelos">
                Modelos
              </span>
            </div>
            <div className="flex flex-col my-4">
              {model.files.map((file, index) => (
                <div key={index} className="flex flex-col">
                  {index > 0 && <div className="h-[1px] bg-[#EBEBEB]" />}
                  <span className="py-3 color-[#292929]">{file}</span>
                </div>
              ))}
            </div>
            <button
              className="bg-[#008040] px-4 py-[14px] rounded-lg flex flex-row mr-auto"
              onClick={() => setIsOpen(true)}
            >
              <img
                alt=""
                className="h-6 w-6"
                src="/images/model-docs/arrow-down.svg"
              />
              <span className="ml-2 text-white" data-i18n="Baixar modelos">
                Baixar modelos
              </span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="modal-team" className="fixed inset-0 z-20">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-6 rounded-xl shadow-lg overflow-hidden mx-auto z-30 w-[90%] max-w-[568px] flex relative flex-col">
              <button
                onClick={() => setIsOpen(false)}
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
              <form
                onSubmit={onSubmit}
                ref={formRef}
                className="flex flex-col mt-6"
              >
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
      )}
      {isSuccess && (
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
      )}
    </>
  );
};

export default ModelDoc;
