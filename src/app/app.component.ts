import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { HeadingComponent } from "../learning/heading/heading.component";
import { User } from '../shared/models/user.model';
import { SideBarComponent } from "../shared/components/side-bar/side-bar.component";
import { LifeCycleHooksComponent } from "../learning/life-cycle-hooks/life-cycle-hooks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, HeadingComponent, SideBarComponent, LifeCycleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  heading = 'HEADING VALUE FROM APP COMPONENT!';
  user: User = {
    name: "Sheik Abdul Kather.H",
    age: 39,
    gender: "Male"
  }

  onSuccess($e: User) {
    console.log('event value from heading component: ',$e)
  }
}
