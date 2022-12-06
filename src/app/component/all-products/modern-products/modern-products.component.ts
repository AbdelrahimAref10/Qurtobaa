import { Component, Input, OnInit } from '@angular/core';
import {faStar,faUser,faCartPlus,faHeart,faShare} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-modern-products',
  templateUrl: './modern-products.component.html',
  styleUrls: ['./modern-products.component.scss']
})
export class ModernProductsComponent implements OnInit {

  @Input() products:any;
  constructor() { }

  ngOnInit(): void {
  }

  faCartPlus = faCartPlus;
  faHeart = faHeart;
  faShare = faShare;
}
