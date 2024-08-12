/* eslint-disable @next/next/no-img-element */
const Contact = () => {
  return (
    <>
      <div className="h-[172px] bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/Lnf1byd/hero-contact.png')]">
        <div className="container mx-auto px-4 md:px-0 h-full flex flex-col justify-center">
          <span
            data-i18n="Contato"
            className="text-white text-4xl font-semibold not-italic md:max-w-[558px]"
          >
            Contato
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-9 md:flex-row container mx-auto py-16 md:px-0">
        <div className="flex-1 border-2 border-gray-200 rounded-2xl p-6 w-full">
          <img className="" src="/images/contact/mail.svg" alt="" />
          <div className="flex flex-col">
            <span
              data-i18n="Envie um e-mail pra gente"
              className="text-2xl mt-4 font-semibold"
            >
              Envie um e-mail pra gente
            </span>
            <span className="text-base mt-4 text-green-600 underline">
              <a href="mailto:contato@jatai.org.br">contato@jatai.org.br</a>
            </span>
          </div>
        </div>

        <div className="flex-1  border-2 border-gray-200 rounded-2xl p-6">
          <img className="" src="/images/contact/calendar.svg" alt="" />
          <div className="flex flex-col">
            <span
              data-i18n="Marque uma conversa no nosso Calendly"
              className="text-2xl mt-4 font-semibold"
            >
              Marque uma conversa no nosso Calendly
            </span>
            <span
              data-i18n="Entre em contato para discutir conosco suas necessidades!"
              className="text-base mt-4"
            >
              Entre em contato para discutir conosco suas necessidades!
            </span>
            <button className="bg-green-700 text-white w-full h-[48px] mt-9 rounded-xl font-normal">
              <a
                target="_blank"
                data-i18n="Fale com a gente"
                href="https://calendar.app.google/tjnvR1waGu4x1MC16"
              >
                Fale com a gente
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
