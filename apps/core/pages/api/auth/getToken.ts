import type { NextApiRequest, NextApiResponse } from 'next'
import zod from 'zod'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        if (req.method !== 'POST') {
            return res.status(400).json({ message: 'Bad request method' })
        }

        const { code } = req.query

        if (code === 'null' || code === 'undefined' || !code) {
            console.log('Invalid code:', code)
            return res.status(400).json({ message: 'Invalid code provided' })
        }

        const codeSchema = zod.string().min(20)

        if (codeSchema.parse(code) && typeof code === 'string') {

            const response = await fetch(`https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                cache: 'force-cache',
            })

            if (response.ok) {
                const data = await response.json()
                return res.status(200).json(data)
            } else {
                console.error('GitHub API error:', response.statusText)
                return res.status(response.status).json({ message: 'Failed to authenticate with GitHub' })
            }
        } else {
            return res.status(400).json({ message: 'Invalid code format' })
        }
    } catch (error) {
        console.error('Unexpected error:', error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}