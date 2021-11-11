import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {
  resultado: string;
  Form = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    Username: new FormControl('',[Validators.maxLength(15)]),
   email: new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]) ),
   password: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(15)])),
   date: new FormControl('',[Validators.required]),
   
   });
  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.Form.valid){
    this.resultado = "Todos los datos son válidos";
    console.log(this.resultado)}
  else{
    this.resultado = "Hay datos inválidos en el formulario";
    console.log(this.resultado)}
  }
 
  async dismiss() {
    return await this.modalCtrl.dismiss();
  }

}
