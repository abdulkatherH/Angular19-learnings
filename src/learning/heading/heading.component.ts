import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input('head') title = "DEFAULT VALUE"
  @Input('head1') title1 = "DEFAULT VALUE 1"
  @Input() user: User | undefined;

  @Output() success: EventEmitter<User> = new EventEmitter()
  onSubmit() {
    console.log("Entered in on submit!");
    // this.success.emit("Hi i am passing the value through EventEmitter!");
    if (this.user) this.user.name = 'Abdul Kather!'
    this.success.emit(this.user)
  }
}
