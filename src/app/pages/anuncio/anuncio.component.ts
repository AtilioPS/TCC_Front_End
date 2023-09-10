import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';



@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent  implements OnInit{

  constructor(private service:OrderDetailsService) { }
  foodData:any;

  ngOnInit(): void {
      this.foodData = this.service.foodDetails;
  }
}
