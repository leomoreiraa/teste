
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HorarioService } from '../api/horario.service';
import { Horario } from '../models/horario';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-quadro-de-horario',
  templateUrl: './quadro-de-horario.page.html',
  styleUrls: ['./quadro-de-horario.page.scss'],
})
export class QuadroDeHorarioPage implements OnInit {


  entrada: string = '';
  intervalo: string = '';
  saida: string = '';
  observacao: string = '';
  turno: string = '';

  constructor(private horarioService: HorarioService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() { }

  createHorario() {
    console.log('createHorario foi chamada');

    let newHorario: Horario = {
      entrada: this.entrada,
      intervalo: this.intervalo,
      saida: this.saida,
      observacao: this.observacao,
      turno: this.turno,
    };

    console.log('Chamando horarioService.create com:', newHorario);

    try {
      this.horarioService.create(newHorario).subscribe(
        response => {
          console.log('Resposta do servidor:', response);
          this.entrada = '';
          this.intervalo = '';
          this.saida = '';
          this.observacao = '';
          this.turno = '';
          this.changeDetector.detectChanges();
          console.log('Depois de limpar os campos:', this.entrada, this.intervalo, this.saida, this.observacao, this.turno);
          alert('O horário foi registrado com sucesso!');
        },
        error => {
          console.error('Erro do servidor:', error);
        }
      );
    } catch (e) {
      console.error('Exceção ao chamar horarioService.create:', e);
    }
  }

  selectedDate!: string;

  constructor() {
    this.selectedDate = '';
   }

  ngOnInit() {
  }

  handleDateChange(event: any) {
    const date = new Date(event.target.value);
    const day = date.getDate();
    this.selectedDate = `Dia ${day}`;
  }

}
