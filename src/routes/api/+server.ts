
import type { RequestHandler } from './$types';


export const GET = async () => {
    const data = { message: 'Hello from the API route!' };
    return {
      body: data,
    };
};