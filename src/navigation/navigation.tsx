
import { createBrowserRouter } from "react-router-dom";
import Main from "../components/main/main";
import Detail from "../components/detail/detail"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/cuerpo/:id",
    element: <Detail />,
  },
]);

export default router;

