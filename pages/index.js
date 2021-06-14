import React, {useEffect,useState} from "react"

import Layout from "components/Layout"
import ResourceHighlight from "components/ResourceHighlight"
import ResourceList from "components/ResourceList"
import Newsletter from "components/Newsletter"
import { useRouter }  from "next/router"

export default function Home({resources}){
  return (
    <Layout>   
    <ResourceHighlight resources={resources.slice(0,2)}/> 
    <Newsletter/>      
    <ResourceList resources={resources.slice(2)}/>    
    </Layout> 
  )
}

export async function getServerSideProps(){

  const resData = await fetch(`${process.env.API_URL}/resources`);
   const data = await resData.json();   
   console.log("calling getServerSideProps");
   return (
     {props:{
       resources: data      
      }} 
   )
}