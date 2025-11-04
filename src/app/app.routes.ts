import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { TrashComponent } from './trash/trash.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'notes', component: NotesComponent},
    { path: 'trash', component: TrashComponent}
];
