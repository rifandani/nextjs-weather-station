import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Cors from 'cors';
// files
import initMiddleware from '../../../middlewares/initMiddleware';
import getRandomNumber from '../../../utils/getRandomNumber';

const prisma = new PrismaClient();

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === 'GET') {
    try {
      await prisma.$connect();
      const sensors = await prisma.sensor.findMany();

      // GET success +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      res.status(200).json({ error: false, sensors });
    } catch (err) {
      // GET ERROR -----------------------------------------------------------------
      res
        .status(500)
        .json({ error: true, name: err.name, message: err.message, err });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === 'POST') {
    try {
      // x-www-form-urlencoded
      const { apiKey, temp, alt, press, heat, humid, lux, flame } = req.body; // all string

      // check apiKey
      if (apiKey !== 'skripsi-rifandani') {
        return res.status(401).json({
          error: true,
          message: 'You are not authorized. Enter a valid apiKey.',
        });
      }

      // save to database
      await prisma.$connect();
      const newSensor = await prisma.sensor.create({
        data: {
          temp: parseFloat(Number(temp).toPrecision(4)),
          alt: parseFloat(Number(alt).toPrecision(6)),
          press: parseFloat(Number(press).toPrecision(5)),
          heat: parseFloat(Number(heat).toPrecision(4)),
          humid: parseFloat(Number(humid).toPrecision(4)),
          lux: parseFloat(Number(lux).toPrecision(4)),
          flame: Number(flame),
          time: new Date().toLocaleString(),
        },
      });

      // POST success +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      res.status(200).json({
        error: false,
        data: newSensor,
        message: 'Data created successfully',
      });
    } catch (err) {
      // POST ERROR -----------------------------------------------------------------
      res
        .status(500)
        .json({ error: true, name: err.name, message: err.message, err });
    } finally {
      await prisma.$disconnect();
    }
    // seeding ke database
  } else if (req.method === 'PUT') {
    try {
      // x-www-form-urlencoded
      const { loopNum } = req.body; // berapa kali mau looping nya => string

      // save to database
      await prisma.$connect();
      for (let i = 0; i < Number(loopNum); i++) {
        await prisma.sensor.create({
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

        if (i === Number(loopNum) - 1) {
          // PUT success +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          res.status(200).json({
            error: false,
            message: `${Number(loopNum)} data created successfully`,
          });
        }
      }
    } catch (err) {
      // PUT ERROR -----------------------------------------------------------------
      res
        .status(500)
        .json({ error: true, name: err.name, message: err.message, err });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === 'DELETE') {
    try {
      // delete all values in table
      await prisma.$connect();
      const { count } = await prisma.sensor.deleteMany();

      // DELETE success +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      res.status(200).json({
        error: false,
        message: `Sensors deleted successfully`,
        count,
      });
    } catch (err) {
      // DELETE error --------------------------------------------------------------
      res
        .status(500)
        .json({ error: true, name: err.name, message: err.message, err });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    // error => invalid req method
    res.status(405).json({
      error: true,
      message: 'Only support GET, POST, PUT and DELETE req',
    });
  }
};
