const players = ["Tina", "Jorge", "Julien"];

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResults(player) {
  try {
    const result = await luckyDraw(player);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

players.forEach((player) => getResults(player));
