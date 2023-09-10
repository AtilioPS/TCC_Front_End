import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails =[
    {
      id:1,
      foodName:"Casamento",
      foodDetails:"Com Psicinsa Com psicina e Campo de Futebol",
      foodPrice:4300,
      foodImg:"https://images.pexels.com/photos/15139017/pexels-photo-15139017/free-photo-of-celebracao-comemoracao-festa-decoracao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id:2,
      foodName:"Kid Criança",
      foodDetails:"Com Sala de Jogos e are para os Adultos",
      foodPrice:1500,
      foodImg:"https://media.istockphoto.com/id/92419007/pt/foto/menino-brincando-na-pista-de-obst%C3%A1culos.jpg?s=2048x2048&w=is&k=20&c=1a0OY_qO48YmpQCou-KewMlTFpfYzyyjvR6nCRx-HwQ=",
    },

    
    {
      id:3,
      foodName:"Festa Final de Semana, Temporadas Final de Ano",
      foodDetails:"Com Sala de jogos e are para os adultos com psicina e Campo de Futebol",
      foodPrice:3500,
      foodImg:"https://media.istockphoto.com/id/1023131030/pt/foto/an-aerial-view-of-houses-of-a-gated-community.jpg?s=1024x1024&w=is&k=20&c=RFgOOTj93gaQji_gE-Imf-vGBEyWBa0-J1233DAH-mA=",
    },


    {
    id:4,
      foodName:"Casamento Simples",
      foodDetails:"Somente o Salão de Festa",
      foodPrice:2500,
      foodImg:"https://media.istockphoto.com/id/467933838/pt/foto/casamento-das-chamin%C3%A9s.jpg?s=2048x2048&w=is&k=20&c=u9wYwrNBXv5Otuv4YExiL4497p7XzgsjvMLLHeIyCYM=",
    },

    {
      id:5,
      foodName:"Kid Criança sem PlayGround",
      foodDetails:"Somente o Salão de Festa",
      foodPrice:1200,
      foodImg:"https://media.istockphoto.com/id/1372409063/pt/foto/colored-plastic-balls.jpg?s=612x612&w=0&k=20&c=p1WhpdhO_pLWwZIJ0Jr4aRbncoJCjXam7RfbwMtQqC8=",
    },

    {
      id:6,
      foodName:"Festa Final de Semana, Temporadas Final de Ano",
      foodDetails:"Somente a casa ou somente com direito a caragem de veiculo",
      foodPrice:2000,
      foodImg:"https://images.pexels.com/photos/4846301/pexels-photo-4846301.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },

  ]
}
