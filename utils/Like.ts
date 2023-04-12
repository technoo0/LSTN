import Api, { getheaders } from "./Api"


const GetLikeStauts = async (uid: string) => {
    try {

        const headers = await getheaders()
        const resdata = await Api.post("/user/Liked", {
            id: uid
        }, {
            headers: headers
        })
        return resdata.data.like
    } catch (e) {
        console.log("ERROR IN CHECK LIKE")
        return false
    }
}
const SendLikeTo = async (uid: string) => {
    try {

        const headers = await getheaders()
        const resdata = await Api.post("/user/sendLike", {
            id: uid
        }, {
            headers: headers
        })
        return resdata.data
    } catch (e) {
        console.log("ERROR IN CHECK LIKE")
        return false
    }
}
const UnLikeUser = async (uid: string) => {
    try {

        const headers = await getheaders()
        const resdata = await Api.post("/user/UnLike", {
            id: uid
        }, {
            headers: headers
        })
        return resdata.data
    } catch (e) {
        console.log("ERROR IN CHECK LIKE")
        return false
    }
}



export {
    GetLikeStauts,
    SendLikeTo,
    UnLikeUser
}