import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-build-by-ChatGpt';

  dataTitle = ['AMÉRICA', 'ÁFRICA', 'EUROPA', 'ASIA' ];
  dataCountry = ['Aruba', 'Bahamas', 'Costa Rica', 'Jamaica', 'México', 'Panamá', 'R.Dominicana', 'USA'];

  onItemSelected(event: Event) {
    console.log('Item selected:', event);
    // Aquí puedes agregar la lógica que quieras para manejar el elemento seleccionado
  }
}
