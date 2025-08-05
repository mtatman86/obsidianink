import React from "react";
import Folklore from "../../components/CitySections/Folklore";
import folkloreNarrative from "../../data/edinburgh/folklore";  // adjust path & city as needed

const FolklorePage = () => {
  return <Folklore narrative={folkloreNarrative} />;
};

export default FolklorePage;
