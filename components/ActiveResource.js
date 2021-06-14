import Link from "next/link";
import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import axios from "axios";
import moment from "moment";

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  const router = useRouter();



  const completeHandler = () =>{
    resource.timeToFinish = "0"
    axios.patch("/api/resources",{...resource, status:"completed"})
    .then(response=>{
      alert ("Resource has been completed!");
      router.push("/");  
      location.reload();    
    }).catch(error=> alert("not completed"))
  }

  useEffect(() => {
    async function fetchResource() {
      const axiosRes = await axios.get("/api/activeresource");
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(moment(resource.activationTime), "seconds");
      const updatedTimeToFinish = (timeToFinish * 60) - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resource);
    }
    fetchResource();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds])


  const hasResource = resource && resource.id;

  return (
    <div className="active-resource">
    <div className="resource-name">
       {hasResource ? resource.title :"No Active Resource"}
    </div> 
    <div className="time-wrapper">
         {hasResource &&
           ((seconds > 0)
             ?<div className="elapsed-time">
                  {seconds}
              </div>
              :<div  className="elapsed-time">
                    <button onClick={completeHandler} className="button is-success">
                        click and done!
                    </button>
              </div>
              )
        }
         
    </div>
    {hasResource      
      ?<Link href={`/resources/${resource.id}`}>
            <a className="button">
              Go To Resource
            </a>
        </Link>
        :<Link href={`/`}>
              <a className="button">
                Go To Resources
              </a>
          </Link>
    } 
    
    </div> 

  )
}
export default ActiveResource;



