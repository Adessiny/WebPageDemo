import { createRouter, createWebHashHistory } from 'vue-router'
// import Center from './components/center/center.vue';
import Courses from './components/Courses/Courses.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // {
        //     path: "/center",
        //     name: 'center',
        //     component: Center
        // },
        {
            path: "/Courses",
            name: 'Courses',
            component: Courses
        }
    ]
});

export default router;