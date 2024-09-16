import React from "react";
import ReactCountryFlag from "react-country-flag";

type Props = {
  countryCode: string | null;
};

const CsCountryFlag = (props: Props) => {
  const { countryCode } = props;

  return countryCode && <ReactCountryFlag countryCode={countryCode} />;
};

export { CsCountryFlag };
