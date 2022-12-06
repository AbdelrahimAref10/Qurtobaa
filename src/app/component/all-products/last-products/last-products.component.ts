import { Component, Input, OnInit } from '@angular/core';
import {faShare,faHeart,faUser,faCartPlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-last-products',
  templateUrl: './last-products.component.html',
  styleUrls: ['./last-products.component.scss']
})
export class LastProductsComponent implements OnInit {

  @Input() products:any;
  constructor() { }

  ngOnInit(): void {
  }
  faHeart = faHeart;
  faShare = faShare;
  faCartPlus = faCartPlus;
}
