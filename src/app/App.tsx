import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { router } from "./providers/router";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;
