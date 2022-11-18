import '../styles/style.scss';
import calculateDistance from './afstand';
import { randomIntFromInterval as random } from './helpers.js';

console.log('test');
console.log(
  calculateDistance(random(0, 10), random(0, 10), random(0, 10), random(0, 10))
);
