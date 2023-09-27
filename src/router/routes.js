 const routes = [
  { 
    path: '/', 
    name: "index",
    component: () => import("../views/index/index.vue") 
  },
  // { path: '/login', name: 'login', component: () => import("@/viewa/home/index.vue") },
  
]


export default routes
