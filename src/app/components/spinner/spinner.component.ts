import { Component, Input } from "@angular/core";

@Component({
  selector: "app-spinner",
  template: `
    <div class="spinner" [ngStyle]="{ 'border-width': borderWidth, width: size, height: size, 'animation-duration': animationDuration }"></div>
  `,
  styleUrls: ["./spinner.component.sass"]
})
export class SpinnerComponent {
  @Input() borderWidth: string;
  @Input() size: string;
  @Input() animationDuration: string;
}
