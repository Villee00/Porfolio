import { NextApiRequest, NextApiResponse } from "next"
import { data } from "../../../src/data/data"

export default function handler(req:NextApiRequest, res:NextApiResponse)  {
  res.status(200).json(data);
}