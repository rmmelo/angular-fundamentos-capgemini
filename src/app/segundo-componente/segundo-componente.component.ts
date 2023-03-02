import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Valter Gabriel Corrêa Porcariaa";
  dataNascimento = '1993-02-02'
  urlImagem = "/assets/menino.jpg"

  mostrarDataNascimento() {
    alert(`A data de nascimento de Valtinho é: ${this.dataNascimento}`)
  }
}
