import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div>
        <img
          width="150"
          alt="Can Logo"
          src="https://www.international.gc.ca/world-monde/assets/images/funding-financement/canada-aid-aide/canada-wordmark-colour.png"
        />
      </div>
      <div style="margin-right: 20px;">{{ todayDate }}</div>
    </div>
  `,
  styles: [
    `
      .header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #26374a;
        margin: 20px;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @Input() title: any;
  public todayDate = new Date().toDateString();

  constructor() {}

  ngOnInit(): void {}
}
