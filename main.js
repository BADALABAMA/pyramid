function createPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    let output = '';
    for (let k = 0; k <= i; k++) output += '#';
    console.log(output);
  }
}

createPyramid(5); // pass number as row of pyramid you want.
