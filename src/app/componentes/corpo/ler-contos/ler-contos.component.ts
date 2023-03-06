import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conto } from '../conto';
import { ContoService } from '../conto.service';

@Component({
  selector: 'app-ler-contos',
  templateUrl: './ler-contos.component.html',
  styleUrls: ['./ler-contos.component.css']
})
export class LerContosComponent implements OnInit {
contoDados:undefined | Conto;

  constructor(private activeRoute:ActivatedRoute, private conto:ContoService) { }

  ngOnInit(): void {
    let contoId=this.activeRoute.snapshot.paramMap.get('contoId');
    
    contoId && this.conto.getConto(contoId).subscribe( (result)=>{
      
      this.contoDados=result

    } )
  }
  

}
