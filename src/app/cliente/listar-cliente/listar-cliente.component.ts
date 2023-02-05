import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICliente } from '../interface/i-cliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {

  clientes: ICliente[] = [{
    id: 1,
    nome: 'Rafael Fernandes D Orazio',
    dataNascimento: new Date(1982, 11, 25),
    rg: '280348678',
    cpf: '302.672.168-90'
  }];

  displayedColumns: string[] = ['id', 'nome', 'dataNascimento', 'rg', 'cpf', 'Action'];
  dataSource = new MatTableDataSource<ICliente>(this.clientes);

}
