import Link from "next/link";
import ResourceLabel from "components/ResourceLabel"
import moment from "moment";

const ResourceHighlight = ({resources}) =>{
    return (
        <section className="hero ">
            <div className="hero-body">
                <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                    <figure className="image is-16by9">
                        <img src="https://images.unsplash.com/photo-1553736277-055142d018f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </figure>
                    </div>
                </div>
                {resources.map((resource)=>{
                    return (
                        <section key={resource.id} className="section">
                        <div className="columns">
                        <div className="column is-8 is-offset-2">
                            <div className="content is-medium">
                            <h2 className="subtitle is-5 has-text-grey">
                                {moment(resource.createdAt).format("LLL")}
                                <ResourceLabel  status={resource.status}/>
                            </h2>
                            <h1 className="title">{resource.title}</h1>
                            <p>{resource.description}</p>
                            <Link href={`resources/${resource.id}`}>
                                <button className="button is-light">See Details</button>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </section>       
                    )
                })}
                    
                </div>
            </div>
        </section>
    )
}

export default ResourceHighlight;