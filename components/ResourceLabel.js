const ResourceLabel = ({status}) =>{
   return <span className={`tag ml-4 is-large has-text-white ${status}`}>
                {status}
          </span>
}


export default ResourceLabel;