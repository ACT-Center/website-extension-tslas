import { useOutletContext } from 'react-router-dom';
import data from './data.js';
import { useEffect } from 'react';

export default function Publications()
{
    let pubs = data;
    console.log(pubs[2024]);
    

    let [setTitle, setDesc] = useOutletContext()

    useEffect(() => {
        setTitle("Papers & Publications")
        setDesc("Join the Conversation: Advance Academic Discourse and Contribute to a Growing Body of Global Knowledge")
    }, [])

    return (
        <>
            <div className="publicationYear">
                <h3>2024</h3>
                {
                    pubs[2024].map((pub, index) => (
                        <Publication pub={pub} ind={index} />
                    ))
                }
            </div>

            <div className="publicationYear">
                <h3>2023</h3>
                {
                    pubs[2023].map((pub, index) => (
                        <Publication pub={pub} ind={index} />
                    ))
                }
            </div>

            <div className="publicationYear">
                <h3>2022</h3>
                {
                    pubs[2022].map((pub, index) => (
                        <Publication pub={pub} ind={index} />
                    ))
                }
            </div>

            <div className="publicationYear">
                <h3>2021</h3>
                {
                    pubs[2021].map((pub, index) => (
                        <Publication pub={pub} ind={index} />
                    ))
                }
            </div>
        </>
    );

}

function Publication({pub, index}){

    return(
        <div className="pub">
            <h4>{pub.title}</h4>
            <p>By: {pub.authors}</p>
            <p>Publication: {pub.journal}, Volume: {pub.volume} </p>
        </div>
    )

}