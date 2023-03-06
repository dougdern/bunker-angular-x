import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {CriarContosComponent} from '../app/componentes/corpo/criar-contos/criar-contos.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ListarContosComponent } from './componentes/corpo/listar-contos/listar-contos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContoComponent } from './componentes/corpo/conto/conto.component';
import { HttpClientModule } from '@angular/common/http';
import { LerContosComponent } from './componentes/corpo/ler-contos/ler-contos.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CorpoComponent,
    FooterComponent,
    CriarContosComponent,
    ListarContosComponent,
    ContoComponent,
    LerContosComponent,


   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
