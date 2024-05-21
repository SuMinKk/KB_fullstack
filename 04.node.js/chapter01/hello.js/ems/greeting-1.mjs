// greetings.js

export function hi() {
    console.log('Hi!');
}

export function goodbye() {
    console.log('Goodbye!'); 

    // index.js

import { hi, goodbye } from './greetings.js';

hi(); // 출력: Hi!
goodbye(); // 출력: Goodbye!