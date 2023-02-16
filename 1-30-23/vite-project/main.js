import 'bootstrap/dist/css/bootstrap.css';
import {eventHandler} from './utils/event';

document.querySelector('#app').innerHTML = `
<h1 class="text-center">My First Calculator</h1>
<div class="container my-5">
<div class="mb-3">
      <label for="number-1" class="form-label">First Number</label>
      <input type="number" class="form-control" id="number-1">
</div>
<div class="mb-3">
      <label for="number-2" class="form-label">Second Number</label>
      <input type="number" class="form-control" id="number-2">
</div>

<button id="add" class="btn btn-primary mb-3">Add</button>
<button id="multiply" class="btn btn-info mb-3">Multiply</button>
<button id="subtract" class="btn btn-danger mb-3">Subtract</button>
<button id="divide" class="btn btn-warning mb-3">Divide</button>
<button id="mod" class="btn btn-success mb-3">Modulo</button>

<div class="mt-5 rounded border p-5 bg-secondary text-white">
      <b>Addition Result:</b> <div id="result"> </div>
      <b>Multiplication Result:</b> <div id="multiply_result"></div>
      <b>Subtraction Result:</b> <div id="subtract_result"></div>
      <b>Division Result:</b> <div id="divide_result"></div>
      <b>Modulo Result:</b> <div id="mod_result"></div>


</div>
`;


eventHandler();
// https://csc436.matgargano.com/duck