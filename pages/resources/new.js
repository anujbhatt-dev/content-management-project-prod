import axios from "axios"
import ResourceForm from "components/ResourceForm"
import Layout from "components/layout"
import { useRouter }  from "next/router"



const New =()=>{

    const router = useRouter(); 

    const submitForm =(event,form)=>{
        event.preventDefault()
        axios.post("/api/resources",form).then((res)=>{
            alert("alert t"+JSON.stringify(res.data))
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
                        <ResourceForm onFormSubmit={submitForm} />
                   </div>
                </div>
            </div>            
        </Layout>
    )
}

export default New;