import HomeDeveloper from '../pages/HomeDeveloper'
import ElementAccordion from '../pages/elements/ElementAccordion'
import NotFound from '../pages/elements/404'

export const routes = [
    {
        path:'/',        
        name: 'HomeDeveloper',
        component: HomeDeveloper
    },
    {
        path:'/element-accordion',
        name: 'ElementAccordion',
        component: ElementAccordion
    },
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
];