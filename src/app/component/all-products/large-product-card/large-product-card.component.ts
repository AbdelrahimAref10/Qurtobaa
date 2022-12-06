import { Component, Input, OnInit } from '@angular/core';
import {faHeart,faShare,faUser,faCartPlus,faStar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-large-product-card',
  templateUrl: './large-product-card.component.html',
  styleUrls: ['./large-product-card.component.scss']
})
export class LargeProductCardComponent implements OnInit {

  @Input() products:any = '';
  constructor() { }
  ngOnInit(): void {}
  faCartPlus = faCartPlus;
  faStar = faStar;
  faShare = faShare;
  faHeart = faHeart;
}
