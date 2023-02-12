// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   import('./dialogBox.js')
//     .then(dialogBox => {
//       dialogBox.open();
//     })
//     .catch(error => 'An error occured while loading the component');
// });

// const btn = document.querySelector('button');
// const output = document.querySelector('p');

// const getPosition = (opts) => {
//     const promise = new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             success => {
//                 resolve(success);
//             },
//             error => {
//                 reject(error);
//             },
//             opts
//         );
//     });
//     return promise;
// };

// const setTimer = (duration) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!');
//         }, duration);
//     });
//     return promise;
// };

// async function trackUserHandler() {
//     let positionData;
//     let timerData;
//     try {
//         positionData = await getPosition();
//         timerData = await setTimer(2000);
//     } catch (error) {
//         console.log(error);
//     }
//     console.log(positionData, timerData);
// }

// btn.addEventListener('click', trackUserHandler);

// const btn = document.querySelector('button');
// const output = document.querySelector('p');
// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, duration);
//   });
//   return promise;
// };
// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(
//     (posData) => {
//       setTimer(2000).then((data) => {
//         console.log(data, posData);
//       });
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   setTimer(1000).then((data) => {
//     console.log(data);
//   });
//   console.log('Getting position...');
// }
// btn.addEventListener('click', trackUserHandler);
// // Path: test.js
// const btn = document.querySelector('button');
// const output = document.querySelector('p');
// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, duration);
//   });
//   return promise;
// };
// function trackUserHandler() {
//   let positionData;
//   navigator.geolocation.getCurrentPosition(
//     (posData) => {
//       positionData = posData;
//       setTimer(2000).then((data) => {
//         console.log(data, posData);
//       });
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   setTimer(1000).then((data) => {
//     console.log(data, positionData);
//   });
//   console.log('Getting position...');
// }
// btn.addEventListener('click', trackUserHandler);
// // Path: test.js
// const btn = document.querySelector('button');
// const output = document.querySelector('p');
// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, duration);
//   });
//   return promise;
// };
// function trackUserHandler() {
//   let positionData;
//   navigator.geolocation.getCurrentPosition(
//     (posData) => {
//       positionData = posData;
//       setTimer(2000).then((data) => {
//         console.log(data, posData);
//       });
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   setTimer(1000).then((data) => {
//     console.log(data, positionData);
//   });
//   console.log('Getting position...');
// }
// btn
