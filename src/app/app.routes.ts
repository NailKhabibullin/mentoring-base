import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]
    }
];
