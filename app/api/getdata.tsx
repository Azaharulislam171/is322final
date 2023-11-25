// pages/api/getdata.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db';  // Your MySQL connection utility

interface Product {
  product_id: number;
  name: string;
 
}

interface ErrorResponse {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | ErrorResponse>
) {
  try {
    const [rows] = await db.query('SELECT product_id, name FROM products');
    const products = rows as Product[]; // Type assertion here
    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
}
