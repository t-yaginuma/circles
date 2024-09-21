import classNames from "classnames";
import React from "react";
import ReactCountryFlag from "react-country-flag";

type Props = {
  countryCode: string | null;
  className?: string;
};

const CsCountryFlag = (props: Props) => {
  const { countryCode, className } = props;

  return (
    countryCode && (
      <ReactCountryFlag
        className={classNames(className)}
        countryCode={countryCode}
      />
    )
  );
};

export { CsCountryFlag };
