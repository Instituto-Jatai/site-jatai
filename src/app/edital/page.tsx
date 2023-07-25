const Edital: React.FC = () => {
  return (
    <>
      <div className="h-[172px] bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/Lnf1byd/hero-contact.png')]"></div>
      <div className="container mx-auto flex py-16 gap-9">
        <div className="w-full h-full flex-1 ">
          <h1
            className="text-3xl font-semibold"
            data-i18n="Edital para apoio a contratação de sistema de gestão escolar"
          >
            Edital para apoio a contratação de sistema de gestão escolar
          </h1>
          <p
            className="my-8"
            data-i18n="Este edital é focado para inscrições de secretarias de educação, consórcios públicos compostos por secretarias deeducação ou outras organizações sem fins lucrativos que apoiem secretarias de educação, interessadas em aprimorar políticas educacionais com uso de procedimentos de compras inovadoras. A atuação do Instituto Jataí nesta cooperação é total ou parcialmente financiada por apoio institucional recebido da Aliança entre Fundação Lemann e Imaginable Futures."
          >
            Este edital é focado para inscrições de secretarias de educação,
            consórcios públicos compostos por secretarias deeducação ou outras
            organizações sem fins lucrativos que apoiem secretarias de educação,
            interessadas em aprimorar políticas educacionais com uso de
            procedimentos de compras inovadoras. A atuação do Instituto Jataí
            nesta cooperação é total ou parcialmente financiada por apoio
            institucional recebido da Aliança entre Fundação Lemann e Imaginable
            Futures.
          </p>

          <div className="flex ">
            <button
              id="modal-subscrive-button"
              data-i18n="Inscreva-se agora"
              className="bg-green-700 text-white px-6 py-[14px] rounded-xl font-semibold mr-3 transition-all hover:bg-green-800"
            >
              Inscreva-se agora
            </button>
            <a
              target="_blank"
              href="/files/20230711-edital.pdf"
              data-i18n="Ver edital"
              className="bg-gray-200 text-black px-6 py-[14px] rounded-xl font-semibold transition-all hover:bg-gray-300"
            >
              Ver edital
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-cover bg-center bg-no-repeat hidden w-[558px] h-[368px] md:block bg-[url('/images/edital/children.png')]"></div>
      </div>
    </>
  );
};

export default Edital;
