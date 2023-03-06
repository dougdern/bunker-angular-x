import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conto } from '../conto';
import { ContoService } from '../conto.service';

@Component({
  selector: 'app-criar-contos',
  templateUrl: './criar-contos.component.html',
  styleUrls: ['./criar-contos.component.css']
})
export class CriarContosComponent implements OnInit {
  conto: Conto = {
    
    titulo: '',
    agente:'',
    local: '',
    data: '',
    texto: ''
  }

  constructor(
    private service: ContoService,
   private router: Router 
    ) { }

  ngOnInit(): void {
  }
  criarConto(){
this.service.criar(this.conto).subscribe(() => {
  this.router.navigate(['/listarConto'])
})
  }
  cancelarConto(){
    this.router.navigate(['/listarConto'])
  }
  

}
