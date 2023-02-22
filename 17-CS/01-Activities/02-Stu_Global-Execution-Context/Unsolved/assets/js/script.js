// 1) Where is carNoise stored?
//globally

const carNoise = 'Honk';
// 2) Where is goFast stored?
// globally

const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // in console log
  
  // 5) Where is makeNoise stored?
  //in const gofast

  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // console.log honk

  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// window prompt

if(confirm("Do you want to go fast?")) {
  goFast(80);
}
