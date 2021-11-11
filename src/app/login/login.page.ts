import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


  export class LoginPage implements OnInit {
    resultado: string;
    Form = new FormGroup({
     
      Username: new FormControl('', [Validators.required]),
    
     password: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(15)])),
     
     
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
      await this.modalCtrl.dismiss();
    }

}
