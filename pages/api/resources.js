import axios from "axios";

export default async function (req,res){

    if(req.method === "GET"){
        const resData = await fetch(`${process.env.API_URL}/resources`)
        const data = await resData.json()        
        return res.send(data);
    }

    if(req.method === "POST" || req.method === "PATCH"){
        const {title, description, link , priority, timeToFinish} = req.body;
        if(!title || !description || !link || !priority || !timeToFinish){
            return res.status(422).send("data are missing")
        }

        const url = req.method === "POST"
            ?`${process.env.API_URL}/resources` 
            :`${process.env.API_URL}/resources/${req.body.id}`
            
        try {
            const axiosRes = await axios[req.method.toLowerCase()](url, req.body);
            return res.send(axiosRes.data);
          } catch {
            return res.status(422).send("Data cannot be stored!");
          }
    }

    
}