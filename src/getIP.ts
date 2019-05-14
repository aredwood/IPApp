import axios from "axios";
const getIP = async () : Promise<string> => {
    const response = await axios("https://canihazip.com/s");

    return response.data;
}

export default getIP;
