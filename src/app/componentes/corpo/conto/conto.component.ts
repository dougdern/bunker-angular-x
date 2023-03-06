import { Component, Input, OnInit } from '@angular/core';
import { Conto } from '../conto';



@Component({
  selector: 'app-conto',
  templateUrl: './conto.component.html',
  styleUrls: ['./conto.component.css']
})
export class ContoComponent implements OnInit {
  @ Input() conto: Conto = {
     
      id: 1,
      titulo: 'orlando',
      agente:'loureiro',
      local: 'sao paulo',
      data: '22 de julho',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    
  }

  constructor() { }

  ngOnInit(): void {
  }
  ler(){
    alert('oi')
  }

}
