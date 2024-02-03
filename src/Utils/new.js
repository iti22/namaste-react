function solve(M, N) {
  if (M % 2 === 0) {
    console.log("M must be an odd natural number.");
    return;
  }

  if (N !== 3 * M) {
    console.log("N must be 3 times M.");
    return;
  }

  const centerRow = Math.floor(M / 2);
  const centerCol = Math.floor(N / 2);
  for (let i = 0; i < M; i++) {
    let row = "";
    for (let j = 0; j < N; j++) {
      if (i == centerRow) {
        if (j >= centerCol - 4 && j <= centerCol + 4) {
          row += "DEVSNEST!";
          j += 8;
        } else {
          row += "-";
        }
      } else if (i < centerRow) {
        if (j >= centerCol - 1 - 3 * i && j <= centerCol + 1 + 3 * i) {
          row += ".|.";
          j += 2;
        } else {
          row += "-";
        }
      } else if (i > centerRow) {
        if (
          j >= 3 * i + 1 - centerCol &&
          j <= 2 * centerCol - 3 * (i - centerRow)
        ) {
          row += ".|.";
          j += 2;
        } else {
          row += "-";
        }
      }
    }
    return row;
  }
}
