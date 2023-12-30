import * as userBlobData from '../models/db/schema';
import db from '../plugins/turso.connect';
export default function tursoLayer() {

    type InsertDataType = {
        id: string,
        userName: string,
        repoName: string,
        branchName: string,
        isPrivate: boolean,
    }

    const insertData = async ({
        id,
        userName,
        repoName,
        branchName,
        isPrivate
    }: InsertDataType,) => {

        console.log("insertData", id, userName, repoName, branchName, isPrivate)

        try {
            const res = db().insert(userBlobData.userBlobData).values({
                id,
                userName,
                repoName,
                branchName,
                data: {
                    isPrivate: `${isPrivate}`
                }
            })


            return await res
        }
        catch (e) {
            console.log(e)
            return e
        }
    }

    return {
        insertData,
    }
}