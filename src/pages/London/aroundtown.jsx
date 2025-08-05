import React from "react";
import AroundTownComponent from "../../components/CitySections/AroundTown";
import aroundTown from "../../data/london/aroundtown";

const AroundTown = () => {
  return <AroundTownComponent spots={aroundTown} />;
};

export default AroundTown;
