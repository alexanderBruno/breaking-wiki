import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterProfileComponent} from './character-profile/character-profile.component';
import {CharactersListComponent} from './characters-list/characters-list.component';

const routes: Routes = [
    {
        path: '',
        component: CharactersListComponent
    }, {
        path: ':id',
        component: CharacterProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // this should be for child
    exports: [RouterModule]
})
export class CharactersRoutingModule {}
