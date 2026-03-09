import { createBrowserRouter } from "react-router";
import { RootLayout }       from "./components/RootLayout";
import { HomePage }         from "./pages/HomePage";
import { CasePage }         from "./pages/CasePage";
import { ExplorationPage }  from "./pages/ExplorationPage";
import { NotFoundPage }     from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true,              Component: HomePage        },
      { path: "cases/:slug",      Component: CasePage        },
      { path: "exploration",      Component: ExplorationPage },
      { path: "*",                Component: NotFoundPage    },
    ],
  },
]);
