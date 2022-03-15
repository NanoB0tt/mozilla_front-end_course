const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// ==== Using the promise version of "callback hell" ==== //

//const doAnimation1 = alice1.animate(aliceTumbling, aliceTiming).finished;

//doAnimation1.then( () => {
  //const doAnimation2 = alice2.animate(aliceTumbling, aliceTiming).finished;
  //doAnimation2.then( () => {
    //alice3.animate(aliceTumbling, aliceTiming).finished;
  //});
//});

// =============== Using promise chain ================ //

//alice1.animate(aliceTumbling, aliceTiming).finished
  //.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  //.then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  //.catch( error => console.error(`Animation error ${error}`));
  


// ============= Using async and await =============== //

async function animation() {
  try {
    const prom1 = await alice1.animate(aliceTumbling, aliceTiming).finished;

    const prom2 = await alice2.animate(aliceTumbling, aliceTiming).finished;

    const prom3 = alice3.animate(aliceTumbling, aliceTiming).finished;
  }
  catch(error) {
    console.error(`Animation error ${error}`);
  }
}

animation();
