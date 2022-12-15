import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LifecycleHooks';

  inputText: string = '';
  destroy: boolean = true;

  onSubmit(inputEle: HTMLInputElement) {
    this.inputText = inputEle.value;
  }

  destroyComponent() {
    this.destroy = false;
  }
}
