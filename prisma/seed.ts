import { PrismaClient } from '@prisma/client';
// files
import getRandomNumber from '../utils/getRandomNumber';

const prisma = new PrismaClient();

// A `main` function so that we can use async/await
async function main(num: number) {
  for (let i = 0; i < num; i++) {
    const newSensor = await prisma.sensor.create({
      data: {
        temp: parseFloat(getRandomNumber(15, 30).toPrecision(4)),
        alt: parseFloat(getRandomNumber(2000, 2500).toPrecision(6)),
        press: parseFloat(getRandomNumber(400, 800).toPrecision(5)),
        heat: parseFloat(getRandomNumber(30, 50).toPrecision(4)),
        humid: parseFloat(getRandomNumber(60, 90).toPrecision(4)),
        lux: parseFloat(getRandomNumber(10, 90).toPrecision(4)),
        flame: Math.round(Math.random()),
        time: new Date().toLocaleString(),
      },
    });

    console.log(`new sensor created`, newSensor.id);
  }
}

main(20)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
