import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '../page/page.component'

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
    },
    {
        path: ':id',
        component: PageComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }