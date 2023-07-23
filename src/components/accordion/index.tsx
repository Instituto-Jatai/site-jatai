import Script from "next/script";

/* eslint-disable @next/next/no-img-element */
type Props = {
  id: string;
  icon: string;
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<Props> = ({ id, icon, title, children }) => {
  return (
    <>
      <div
        id={id}
        className="flex flex-col max-h-14 overflow-hidden transition-all duration-500"
      >
        <div className="flex flex-row items-center justify-between">
          <img
            src={icon}
            alt="Team icon"
            className="p-3 rounded-xl bg-gray-50 mr-4 h-14"
          />
          <span data-i18n={title} className="md:w-full text-xl font-semibold">
            {title}
          </span>

          <button id={`${id}-plus-button`}>
            <img src="images/home/plus.svg" alt="Plus icon" />
          </button>
          <button id={`${id}-close-button`} className="hidden">
            <img src="images/home/less.svg" alt="Plus icon" />
          </button>
        </div>
        <div className="mt-10">{children}</div>
      </div>
      <Script id={`${id}-script`}>
        {`
            document.getElementById('${`${id}-plus-button`}').addEventListener("click", () => {
                document.getElementById('${id}').classList.add("max-h-[100vh]");
                document.getElementById('${`${id}-plus-button`}').classList.add("hidden");
                document.getElementById('${`${id}-close-button`}').classList.remove("hidden");
            });
            document.getElementById('${`${id}-close-button`}').addEventListener("click", () => {
                document.getElementById('${id}').classList.remove("max-h-[100vh]");
                document.getElementById('${`${id}-plus-button`}').classList.remove("hidden");
                document.getElementById('${`${id}-close-button`}').classList.add("hidden");
            });
        `}
      </Script>
    </>
  );
};

export default Accordion;
