import { Routes } from '@angular/router';
import { DolarConsultarComponent } from './dolar-consultar/dolar-consultar.component';
import { DolarConvertirComponent } from './dolar-convertir/dolar-convertir.component';
import { DolarHomeComponent } from './dolar-home/dolar-home.component';

export const routes: Routes = [
    {
        path: '',
        component: DolarHomeComponent
    },
    {
        path: 'consultar',
        component: DolarConsultarComponent
    },
    {
        path: 'convertir',
        component: DolarConvertirComponent
    }
];
