import { useQuery } from '@tanstack/react-query';
import { Client, Databases, Query } from 'appwrite';
import "./teacherpubs.css"
import { useLocation, useOutletContext } from 'react-router-dom'
import React from 'react'

export default function Teacherpubs() {

    let data = useLocation();
    let [setTitle, setDesc] = useOutletContext();
    setTitle(data.state.name)

    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("6706e315001949143d10")

    const databases = new Databases(client);

    let publications = useQuery({
        queryKey: ['pubs', data.state.id],
        queryFn: async function fetcher(){

            let promise = await databases.listDocuments(
                "6706e36200146facdec1",
                "6706ecb6003a5a280162",
                [
                    Query.equal('TeacherID', data.state.id)
                ]
            )

            return promise

        },
        refetchOnWindowFocus: false

    })


    let confPapers = useQuery({
        queryKey: ['confPapers', data.state.id],
        queryFn: async () => {

            let promise = await databases.listDocuments(
                "6706e36200146facdec1",
                "670b1f2c00079b6ce3b9",
                [
                    Query.equal('TeacherID', data.state.id)
                ]
            )

            return promise

        },
        refetchOnWindowFocus: false
    })

    if(publications.isLoading || publications.isFetching || confPapers.isFetching || confPapers.isLoading){
        return(<>Loading.......</>)
    }

    return (
        <div>

            {/* <h1 className='teacherName'>{data.state.name}</h1> */}

            {publications.data.documents.length?<h3 className='teacherSubHead'>Research Papers</h3>:<></>}
            {
                publications.data.documents.map((data, i) => (
                    <a href={data.Link?data.Link:""}><div className='teacherPaper'>{data.Paper}</div></a>
                ))
            }

            {confPapers.data.documents.length?<h3 className='teacherSubHead'>Conference Papers</h3>:<></>}
            {
                confPapers.data.documents.map((data, i) => (
                    <>
                    <div className='teacherPaper'>{data.Name} <br /> <span className='teacherPaperLoc'>{data.Location}</span></div>
                    </>
                ))
            }

        </div>
    )
}
