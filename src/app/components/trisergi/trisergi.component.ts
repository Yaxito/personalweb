import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trisergi',
  templateUrl: './trisergi.component.html',
  styleUrls: ['./trisergi.component.scss']
})
export class TrisergiComponent implements OnInit {
  @Input() titulo: string | undefined;
  @Input() imagen1: string | undefined;
  @Input() imagen2: string | undefined;
  @Input() descripcion: string | undefined;
  @Input() politicaPrivacidad: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
