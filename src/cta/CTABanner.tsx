import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md">
    <div className="font-semibold">
      <div className="text-gray-900 text-2xl font-gaegu">{props.title}</div>
      <div className="text-gray-600 text-base mt-6">{props.subtitle}</div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-10">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
