import { eq, sql } from "drizzle-orm";
import db from "~/server/plugins/turso.connect";
import { userBlobData } from "~/server/models/db/schema";

export default defineEventHandler(async (event) => {

    const token = event.node.req.headers.authorization

    if (!token) {
        return {
            status: 401,
            body: {
                message: "Unauthorized"
            }
        }
    }
    const ousername = await userDetails(token)

    const p1 = db()
        .select()
        .from(userBlobData)
        .where(eq(userBlobData.userName, sql.placeholder("userName")))

    const data = p1.all({
        userName: ousername.gname,
    });

    return await data;

});
