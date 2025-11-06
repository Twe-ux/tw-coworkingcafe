"use client";

import { useEffect } from "react";

const BootstrapClient = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS on client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
};

export default BootstrapClient;
