import { createRouter, createWebHistory } from "vue-router"

import Accueil from "./Page/Accueil.vue"
import Pays from "./Page/Pays.vue"
import Apropos from "./Page/Apropos.vue"

 const routeInfos = [
        
        {
            path : "/",
            name: 'Accueil',
            component : Accueil
        },

        {
            path : "/Pays",
            name: 'Pays',
            component : Pays
        },

        {
            path : "/Apropos",
            name: 'Apropos',
            component : Apropos
        }
    ]
    
    const router = createRouter({
        history : createWebHistory(),
        routes : routeInfos
    })
    
    export default router;