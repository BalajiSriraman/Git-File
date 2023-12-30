import * as z from 'zod';

const items = z.object({
    id: z.number(),
    // name: z.string(),
    full_name: z.string(),
    private: z.boolean(),
}).partial()


export const repoSchema = z.array(items)