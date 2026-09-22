const { tambah, kurang } = require('./kalkulator');

function jalankanTest() {
  let gagal = 0;

  if (tambah(2, 3) !== 5) {
    console.error('GAGAL: tambah(2,3) seharusnya 5');
    gagal++;
  } else {
    console.log('LOLOS: tambah(2,3) = 5');
  }

  if (kurang(5, 3) !== 2) {
    console.error('GAGAL: kurang(5,3) seharusnya 2');
    gagal++;
  } else {
    console.log('LOLOS: kurang(5,3) = 2');
  }

  if (gagal > 0) {
    console.error(`${gagal} test gagal`);
    process.exit(1);
  } else {
    console.log('Semua test lolos!');
  }
}

jalankanTest();