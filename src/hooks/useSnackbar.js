import React from "react";

export const useSnackbar = () => {
  const [snackbar, setSnackbar] = React.useState({
    message: "",
    severity: "success",
  });
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  React.useEffect(() => {
    if (showSnackbar) {
      const timer = setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
      return () => clearTimeout(timer); //cuando se retorna algo en un efecto, normalmente es para limpiar
    }
  }, [showSnackbar]);

  return { snackbar, setSnackbar, showSnackbar, setShowSnackbar };
};
