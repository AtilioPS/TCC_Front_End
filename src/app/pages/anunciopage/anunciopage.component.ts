import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';



@Component({
  selector: 'app-anunciopage',
  templateUrl: './anunciopage.component.html',
  styleUrls: ['./anunciopage.component.css']
})
export class AnunciopageComponent implements OnInit {

constructor(private param:ActivatedRoute , private service:OrderDetailsService) { }
getAnuncioId:any;
anuncioData:any;


ngOnInit(): void{
  this.getAnuncioId = this.param.snapshot.paramMap.get('id');
  if(this.getAnuncioId){
    this.anuncioData = this.service.foodDetails.filter((value)=>{
      return value.id== this.getAnuncioId;

  
    })
  }
}

}
