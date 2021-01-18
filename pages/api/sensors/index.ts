import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Cors from 'cors';
// files
import initMiddleware from '../../../middlewares/initMiddleware';

const prisma = new PrismaClient();

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST'],
  }),
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === 'GET') {
    try {
      const sensors = await prisma.sensors.findMany();

      // GET success +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      res.status(200).json({ sensors });
    } catch (err) {
      // GET ERROR -----------------------------------------------------------------
      res
        .status(500)
        .json({ error: true, name: err.name, message: err.message, err });
    }
  } else if (req.method === 'POST') {
  } else {
    // error => invalid req method
    res
      .status(405)
      .json({ error: true, message: 'Only support GET, POST req' });
  }
};
