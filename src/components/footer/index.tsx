/* eslint-disable @next/next/no-img-element */

const Footer: React.FC = () => {
  return (
    <div className="bg-black h-full flex">
      <div className="container mx-auto px-4 md:px-0 flex flex-col items-start justify-between h-[600px] md:h-[380px]">
        <img src="/images/footer/logo.svg" alt="" className="mt-10 h-10" />

        <div className="flex flex-col mb-10 md:justify-between md:flex-row w-full">
          <div className="flex flex-col mt-8">
            <span
              data-i18n="Vamos marcar uma conversa?"
              className="text-white flex text-2xl"
            >
              Vamos marcar uma conversa?
            </span>
            <span
              data-i18n="Entre em contato para discutir conosco suas necessidades!"
              className="text-white mt-2 md:w-[558px]"
            >
              Entre em contato para discutir conosco suas necessidades!
            </span>

            <button className="bg-slate-900 text-white w-[180px] h-[48px] rounded-xl mt-4">
              <a
                data-i18n="Fale com a gente"
                href="https://calendar.app.google/tjnvR1waGu4x1MC16"
              >
                Fale com a gente
              </a>
            </button>
          </div>

          <div className="flex flex-col mt-8">
            <span
              data-i18n="Siga a Jataí"
              className="text-white font-bold mb-6"
            >
              Siga a Jataí
            </span>

            <div className="flex flex-row mb-6 gap-2">
              <img src="/images/footer/twitter.svg" alt="" />
              <span className="text-white">
                <a
                  href="https://twitter.com/jatai_org"
                  target="_blank"
                  className="text-green-600 underline"
                >
                  @jatai_org
                </a>
                no Twitter
              </span>
            </div>

            <div className="flex flex-row mb-6 gap-2">
              <img src="/images/footer/github.svg" alt="" />
              <span className="text-white">
                <a
                  href="https://github.com/Instituto-Jatai"
                  target="_blank"
                  className="text-green-600 underline"
                >
                  @Instituto-Jatai
                </a>
                no GitHub
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <img src="/images/footer/linkedin.svg" alt="" />
              <span className="text-white">
                <a
                  href="https://www.linkedin.com/company/jatai/about/"
                  className="text-green-600 underline"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
