import { Component, OnInit } from '@angular/core';
import { Conto } from '../conto';
import { ContoService } from '../conto.service';

@Component({
  selector: 'app-listar-contos',
  templateUrl: './listar-contos.component.html',
  styleUrls: ['./listar-contos.component.css']
})
export class ListarContosComponent implements OnInit {
  listaContos: Conto[] = [];
  router: any;

  constructor(private service: ContoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaContos) => {
      this.listaContos = listaContos
    } )
  }
  // lerConto(){
  //   this.router.navigate(['/lerConto'])
  // }

}
