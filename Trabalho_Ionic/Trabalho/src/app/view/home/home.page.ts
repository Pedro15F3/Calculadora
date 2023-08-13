import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public numero1!: number;
  public numero2!: number;
  public funcao!: number;
  public teste1!: number;
  
  
  constructor(private alertController: AlertController) {}

  calcular(){ 
    if (!isNaN(this.numero1) && !isNaN(this.numero2)){
      if(!isNaN(this.funcao)){
        if(this.funcao == 0){
          this.teste1 = this.numero1 + this.numero2;
          this.presentAlert(this.teste1);

        }else if(this.funcao == 1){
          this.teste1 = this.numero1 * this.numero2;
          this.presentAlert(this.teste1);

        }else if(this.funcao == 2){
          this.teste1 = this.numero1 / this.numero2;
          this.presentAlert(this.teste1);

        }else if(this.funcao == 3){
          this.teste1 = this.numero1 - this.numero2;
          this.presentAlert(this.teste1);

        }
      }else{
        this.Alert("Erro ao calcular!","Selecione uma Operação!");
      }
    }else{
      this.Alert("Erro ao calcular!","Todos os campos são obrigatórios!");
    }  
    this.numero1 = NaN;
    this.numero2 = NaN;
    this.funcao = NaN;
  }
  async presentAlert(teste1: number) {
    const alert = await this.alertController.create({
      header: 'Resultado da Calculadora',
      message: `O resultado da operação é: ${teste1}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async Alert( subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
