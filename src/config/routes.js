// Layout
import LayoutHome from "../layouts/Home";

// Admin Pages

// Pages
import Home from "../pages/Home";
import Page1 from "../pages/Home/Page1";
import Page2 from "../pages/Home/Page2";
import Page3 from "../pages/Home/Page3";
import Page4 from "../pages/Home/Page4";
import Page5 from "../pages/Home/Page5";

// Other
import Error404 from "../pages/Error";

const routes = [
  {
    path: "/",
    component: LayoutHome,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/page1",
        component: Page1,
        exact: true,
      },
      {
        path: "/page2",
        component: Page2,
        exact: true,
      },
      {
        path: "/page3",
        component: Page3,
        exact: true,
      },
      {
        path: "/page4",
        component: Page4,
        exact: true,
      },
      {
        path: "/page5",
        component: Page5,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  { path: "/admin", component: "", exact: false },
];

export default routes;
