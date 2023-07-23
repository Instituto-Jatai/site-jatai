/* eslint-disable @next/next/no-img-element */
type Props = {
  image: string;
  title: string;
  "sub-title"?: string;
  description: string;
  knowMoreLink: string;
};

const CasesCard: React.FC<Props> = (props) => {
  return (
    <div className="border-2 border-gray-200 rounded-2xl flex flex-col py-10 px-10">
      <div className="flex h-20 flex-row align-center">
        <img src={props.image} className="h-16" alt="Bandeira do case" />
      </div>
      <div className="flex flex-col justify-evenly h-full">
        <div className="flex flex-col justify-evenly h-full">
          <p data-i18n={props.title} className=" text-2xl mt-4 font-semibold">
            {props.title}
          </p>

          {props["sub-title"] && (
            <p data-i18n={props["sub-title"]} className="text-xl mt-2">
              {props["sub-title"]}
            </p>
          )}

          <p data-i18n={props.description} className="text-base mt-10">
            {props.description}
          </p>
        </div>

        <span className="text-white text-base font-semibold mt-10">
          <a
            data-i18n="Saiba mais"
            href={props.knowMoreLink}
            className="text-green-600 underline"
          >
            Saiba mais
          </a>
        </span>
      </div>
    </div>
  );
};

export default CasesCard;
