import axios from "axios"

export default async function activeResource(req,res){
    console.log("iam called");
    const dataRes = await axios.get(`${process.env.API_URL}/activeresource`);
    console.log(dataRes.data);
    return res.send(dataRes.data);

}
