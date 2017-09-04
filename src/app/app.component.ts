import { Component } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { MdMenu, MdToolbar, MdButton, MdIcon } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  switchBool = 'Home';

  setSwitchBool(page) {
    this.switchBool = page;
  }
}
