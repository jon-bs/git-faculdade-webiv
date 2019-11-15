import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Departamento} from 'src/app/model/departamento';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.css']
})
export class DepartamentoListComponent implements OnInit {

  @Input() departamento : Departamento[];

  @Output() selecionarDepartamento = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selecionar(id:any, toEdit:boolean) {
    this.selecionarDepartamento.emit({departamentoSelecionadoId:id, toEdit:toEdit})
  }

}
