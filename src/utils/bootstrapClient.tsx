"use client";

import { useEffect } from "react";

const BootstrapClient = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS on client side
    import("bootstrap/dist/js/bootstrap.bundle.min")
      .then(() => {
        console.log("Bootstrap JS loaded");
      })
      .catch((err) => {
        console.error("Error loading Bootstrap JS:", err);
      });
  }, []);

  return null;
};

export default BootstrapClient;
