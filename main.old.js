import './style.scss'

import { delay } from './helper.js'


// console.log('console 1');

// myOwnTimeout(() => {
//   console.log('hello this from timeout');
// })

// console.log('console 2');

// function myOwnTimeout(callback) {
//   setTimeout(() => {
//     callback()
//   })
// }


const elem = document.createElement('div')
elem.classList.add('my-elem-class')
document.body.appendChild(elem)


async function animate() {
  console.log('0');
  console.log('done');
}


animate()




// const moveElem = async () => {
//   await wait(1000);
//   elem.style.background = 'blue';

//   await wait(1000);
//   elem.style.transform = 'translateX(1000px)';

//   // move elem to bottom by 1000px
//   await wait(1000);
//   elem.style.transform = 'translateY(1000px)';
// };

// moveElem();