import Api, { getheaders } from "./Api"


const SetUserLocation = async (latitude, longitude) => {
    try {

        const headers = await getheaders()
        const result = await Api.post("/user/location", {
            latitude,
            longitude
        }, {
            headers: headers
        })
    } catch (e) {
        console.log("ERROR IN SENDING LOCATION")
    }

}


export {
    SetUserLocation
}