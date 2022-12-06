import { Component, OnInit } from '@angular/core';
import {faUser,faCartPlus} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUser = faUser;
  faCartPlus = faCartPlus;
}
