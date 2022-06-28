import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer>&copy; Angular Dev 2022</footer> `,
  styles: [
    `
      footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #26374a;
        color: white;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
