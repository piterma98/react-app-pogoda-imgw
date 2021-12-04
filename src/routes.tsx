import Home from "./components/Home";
import Synoptic from "./components/Synoptic";
import Hydro from "./components/Hydro";


const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        component: Home
    },
    {
        path: '/Hydro',
        sidebarName: 'Hydro',
        component: Hydro
    },
    {
        path: '/Synoptic',
        sidebarName: 'Synoptic',
        component: Synoptic
    },
];

export default Routes;
