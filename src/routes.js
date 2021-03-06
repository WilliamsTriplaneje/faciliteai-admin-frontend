/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "./views/Index.js";
import Create from './views/Create'
import Profile from "./views/examples/Profile.js";
import Approval from "./views/examples/Approval";
// import Maps from "./views/examples/Maps.js";
import Register from "./views/examples/Register.js";
import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons.js";

var routes = [
  {
    path: "/painel",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/new",
    name: "Categorias",
    icon: "ni ni-briefcase-24 text-blue",
    component: Create,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-notification-70 text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/approval/:id",
    name: "Aprovação",
    icon: "ni ni-single-02 text-blue",
    component: Approval,
    layout: "/admin"
  },  
  // {
  //   path: "/profile",
  //   name: "Minha Conta",
  //   icon: "ni ni-single-02 text-blue",
  //   component: Profile,
  //   layout: "/admin"
  // },  
  {
    path: "/tables",
    name: "Prestadores",
    icon: "ni ni-circle-08 text-blue",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
];
export default routes;
