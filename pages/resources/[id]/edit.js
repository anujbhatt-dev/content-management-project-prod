import {useEffect} from "react"
import Layout from "components/Layout"
import ResourceForm from "components/ResourceForm"
import axios from "axios"
import { useRouter }  from "next/router"

const ResourceEdit = ({resource}) =>{

    const router = useRouter(); 

    const submitForm =(event,form)=>{
        event.preventDefault()
        axios.patch("/api/resources",form).then((res)=>{
            alert(res.data)
            router.push("/");
        }).catch((err)=>{
            alert("alert c"+err?.response?.data)
        })
    }
    
    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                            <ResourceForm initialData={resource} onFormSubmit={submitForm}/>
                    </div>
                </div>
            </div>        
        </Layout>
    )
}

export async function getServerSideProps({params}){
    const axiosRes = await axios.get(`${process.env.API_URL}/resources/${params.id}`);
    const data = await axiosRes.data;

    return {
        props:{
            resource:data
        }
    }
}


export default ResourceEdit;