import { afterNextRender, afterRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(',')}`, 'color:rgb(0, 18, 220)'
  );
}




@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {

  traditionalProperty = "José Ángel";
  signalProperty = signal("José Ángel");

    constructor(){
      console.log("Constructor llamado");
    };

    changeTraditional(){
      this.traditionalProperty = "José Ángel Martín González"
    }

    changeSignal(){
      this.signalProperty.set( "José Ángel Martín González");
    }

    basicEffect = effect((oncleanup) => {
      console.log('effect', "Disparar efectos secundarios");

      oncleanup(() =>{
        log('onCleanup', "Se ejecuta cuando eñ efecto se va a destruir");
      })
    })


  ngOnInit() {
    log('ngOnInit', "Runs once after Angular has initialized all the component's inputs.");
  }

  ngOnChanges()	{
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }

  ngDoCheck()	{
    log('ngDoCheck', "Runs every time this component is checked for changes.");
  }

  ngAfterContentInit()	{
    log('ngAfterContentInit', "Runs once after the component's content has been initialized.");
  }

  ngAfterContentChecked()	{
    log('ngAfterContentChecked', "Runs every time this component content has been checked for changes.");
  }

  ngAfterViewInit()	{
    log('ngAfterViewInit', "Runs once after the component's view has been initialized.");
  }

  ngAfterViewChecked()	{
    log('ngAfterViewChecked', "Runs every time the component's view has been checked for changes.");
  }

  ngOnDestroy(){
    log('ngOnDestroy', "Runs once before the component is destroyed.")
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRenderEffect', "Runs once the next time that all components have been rendered to the DOM.");
  });

  afterRender = afterRender(() => {
    log('afterRender', "Runs every time all components have been rendered to the DOM..");
  });

};
