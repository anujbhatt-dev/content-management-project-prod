import Layout from "components/Layout"
import Link from "next/link"
import axios from "axios"
import {useRouter} from "next/router"
import ResourceLabel from "components/ResourceLabel"
import moment from "moment"


const ResourceDetail = ({resource}) =>{
    
    const router = useRouter();
    const activateHandler = () =>{
        axios.patch("/api/resources",{...resource,status:"active"})
        .then(res=> {
            alert(res?.data)
            router.push("/")
        
        })
        .catch(err => alert("cannot be activated!!"))
    }

    return (
        <Layout>
            <section className="hero ">
                <div className="hero-body">
                <div className="container">
                    <section className="section">
                        <div className="columns is-multiline is-variable is-8">
                            <div className="column is-5 is-offset-1 ">
                            <div className="content is-medium">
                                <h2 className="subtitle is-5 has-text-grey">
                                    {moment(resource.createdAt).format("LLL")}
                                    <ResourceLabel  status={resource.status}/>
                                </h2>
                                <h1 className="title has-text-black is-3">{resource.title}</h1>
                                <p className="has-text-dark">{resource.description}</p>
                                <p className="has-text-grey">Time To Finish: {resource.timeToFinish}</p>
                                {resource.status === "inactive" &&
                                    <div>
                                        <Link href={`/resources/${resource.id}/edit`}>
                                            <button className="button is-warning">
                                                Edit
                                            </button>
                                        </Link>
                                        <button onClick={activateHandler} className="button is-success ml-1">
                                            {resource.status === "active"?"Active":"Activate"}
                                        </button>                                    
                                    </div>
                                }
                            </div>
                            </div>              
                        </div>
                    </section>            
                </div>
                </div>
            </section>
        </Layout>
    )
} 


export async function getServerSideProps({params}){

    const data = await  fetch(`${process.env.API_URL}/resources/${params.id}`);

    return {
        props:{
            resource : await data.json()
        }
    }
}


export default ResourceDetail;