import { RouterProvider, createBrowserRouter } from "react-router";

import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/login";
import NotFound from "./pages/notFound";
import Journals from "./pages/journals/journals";
import AddJournal from "./pages/journals/addJournal";
import Trades from "./pages/trades/trades";
import AddTrades from "./pages/trades/addTrades";
import Settings from "./pages/settings/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/journals",
    element: <Journals />,
    children: [
      {
        path: "add",
        element: <AddJournal />,
      },
    ],
  },
  {
    path: "/trades",
    element: <Trades />,
    children: [
      {
        path: "add",
        element: <AddTrades />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
