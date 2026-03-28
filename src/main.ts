import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
 
  <div>
    <h1>Busador de receitas</h1>
    <p>
     <input type="text" requerid>
    </p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
