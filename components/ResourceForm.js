import react, {useState} from "react"


const DEFAULT_DATA = {
    title:"",
    description:"",
    link:"",
    priority:"2",
    timeToFinish:60,
}

const ResourceForm = ({onFormSubmit, initialData}) =>{

    const [form, setForm] = useState(initialData || DEFAULT_DATA)   
    
    

    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
   }

   const submitForm = (event) =>{
       onFormSubmit(event,form);
       setForm(DEFAULT_DATA)
   }

  return (
        <div className="resource-form">                   
            <h1 className="title center">Add New Resources</h1> 
            <form>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input onChange={changeHandler} name="title" value={form.title} className="input" type="text" placeholder="Title" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea onChange={changeHandler} name="description" value={form.description} className="textarea" placeholder="Description" ></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Link</label>
                        <div className="control">
                            <input  onChange={changeHandler} name="link" value={form.link} className="input" type="text" placeholder="Link" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Priority</label>
                        <div className="control">
                            <div className="select">
                            <select onChange={changeHandler} name="priority" value={form.priority}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Time to Finish</label>
                        <div className="control">
                            <input onChange={changeHandler} name="timeToFinish" value={form.timeToFinish} className="input" type="number" placeholder="Time to Finish" />
                        </div>
                        <p class="help">Time is in minutes</p>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button type="submit" onClick={submitForm} className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button onClick={()=>setForm(DEFAULT_DATA)} type="button" className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
            </form>
        </div>
  )
}
export default ResourceForm