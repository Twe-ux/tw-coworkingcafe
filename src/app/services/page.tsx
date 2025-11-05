import PageTitle from "@/components/pageTitle";
import ServiceThree from "@/components/services/serviceThree";
import React from "react";

const Services: React.FC = () => {
  return (
    <>
      <PageTitle title={"Services"} currentPage={"Services"} />
      <ServiceThree />
    </>
  );
};

export default Services;
