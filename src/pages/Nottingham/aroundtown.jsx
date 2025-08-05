import React from "react";
import AroundTownComponent from "../../components/CitySections/AroundTown";
import aroundTown from "../../data/nottingham/aroundtown";

const AroundTown = () => {
  return <AroundTownComponent spots={aroundTown} />;
};

export default AroundTown;
