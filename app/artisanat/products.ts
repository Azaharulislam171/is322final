// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db';

type Product = {
    // Define a type for your product, e.g.,
    id: number;
    name: string;
    // ... other product fields
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product[] | { message: string }>
) {
    try {
        const [rows] = await db.query<Product[]>('SELECT * FROM products');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
