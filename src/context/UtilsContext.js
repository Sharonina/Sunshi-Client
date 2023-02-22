import { createContext } from "react";

export const UtilsContext = createContext({
  snackbar: {
    message: "",
    severity: "success",
  },
  setSnackbar: () => {},
  showSnackbar: false,
  setShowSnackbar: () => {},
});
