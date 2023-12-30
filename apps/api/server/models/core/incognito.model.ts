import * as z from 'zod';

const fileSchema = z.object({
    path: z.string().nullable(),
    mode: z.string().nullable(),
    sha: z.string().nullable(),
    size: z.any().nullable(),
})

export const anonymousSchema = z.object({
    meta: z.any(),
    files: z.array(fileSchema),
})