/* eslint-disable @next/next/no-img-element */
"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Script from "next/script";

const HomeSlider: React.FC = () => {
  return (
    <>
      <Carousel
        autoPlay
        stopOnHover
        infiniteLoop
        showIndicators
        interval={5000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <div className="h-[512px] bg-cover bg-center bg-no-repeat bg-[url('/images/home/bg-hero.png')]">
          <div className="m-auto container flex flex-col justify-center h-full p-4 md:p-0">
            <span
              data-i18n="Construindo organizações públicas para o mundo <b>digital</b> e <b>sustentável</b>"
              className="text-left text-white text-4xl md:text-hero-title max-w-[756px]"
            >
              Construindo organizações públicas para o mundo <b>digital</b> e
              <b>sustentável</b>
            </span>
            <span
              data-i18n="Somos uma organização sem fins lucrativos criada com a missão de apoiar organizações públicas a se tornarem mais ágeis para se adaptarem ao mundo digital e sustentável."
              className="text-left text-white text-hero-subtitle max-w-[756px] mt-2"
            >
              Somos uma organização sem fins lucrativos criada com a missão de
              apoiar organizações públicas a se tornarem mais ágeis para se
              adaptarem ao mundo digital e sustentável.
            </span>

            <a
              data-i18n="Fale conosco"
              className="bg-green-700 text-white mt-9 px-6 py-[14px] rounded-xl font-semibold mr-auto transition-all hover:bg-green-800"
              href="https://calendly.com/eduardospano/jatai-30min"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="h-[512px] bg-cover bg-center bg-no-repeat bg-[url('/images/home/bg-hero-2.png')]">
          <div className="m-auto container flex flex-col justify-center h-full p-4 md:p-0">
            <span
              data-i18n="Confira o edital para apoio a <b>contratação de sistema de gestão escolar</b>"
              className="text-left text-white text-4xl md:text-hero-title max-w-[756px]"
            >
              Confira o edital para apoio a{" "}
              <b>contratação de sistema de gestão escolar</b>
            </span>
            <span
              data-i18n="Qualquer secretaria, consórcio ou organização do terceiro setor que trabalhe com educação pode participar. Não deixe de conferir!"
              className="text-left text-white text-hero-subtitle max-w-[756px] mt-2"
            >
              Qualquer secretaria, consórcio ou organização do terceiro setor
              que trabalhe com educação pode participar. Não deixe de conferir!
            </span>

            <div className="flex mt-9">
              <a
                target="_blank"
                data-i18n="Inscrever-se agora"
                className="bg-green-700 text-white px-6 py-[14px] rounded-xl font-semibold mr-3 transition-all hover:bg-green-800"
                href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfcZHkxnMLg8CLttrZiWS9J_4rJIEbB7gnOz3ysljEhNkWU3w/viewform?usp=send_form"
              >
                Inscrever-se agora
              </a>
              <a
                href="/edital"
                data-i18n="Saiba mais"
                className="bg-white open-modal-button  text-green-700 px-6 py-[14px] rounded-xl font-semibold transition-all hover:bg-gray-100"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeSlider;
