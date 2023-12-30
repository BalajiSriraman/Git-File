import * as z from 'zod';

const treeSchema = z.object({
    path: z.string().nullable(),
    mode: z.string().nullable(),
    type: z.string().nullable(),
    sha: z.string().nullable(),
    size: z.any().nullable(),
    url: z.string().nullable()
})

export const responceZod = z.object({
    sha: z.string(),
    url: z.string(),
    tree: z.array(treeSchema),
})