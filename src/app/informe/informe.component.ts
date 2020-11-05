import { Component, OnInit } from '@angular/core';
import { Informe } from './informe';
import { InformeService } from './informe.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {
  informes:Informe[];
  //displayedColumns: string[] = ['idinforme', 'nombre', 'estado'];

  constructor(private informeService :InformeService) { }

  ngOnInit(): void {
    //var data=this.informes;
    this.informeService.getInformes().subscribe((data)=>{
      this.informes=data['cursor_informes'];
    }
    );
    console.log(this.informes);
  }

}
