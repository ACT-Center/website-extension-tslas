import { useNavigate, useOutletContext } from "react-router-dom";
import "./publications.css"
import { Client, Databases } from "appwrite";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function Publications() {
    
    let [setTitle, setDesc] = useOutletContext();
    setTitle('Publications')

    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("6706e315001949143d10")

    const databases = new Databases(client);

    let teachers = useQuery({
        queryKey: ['Teachers'],
        queryFn: async function fetcher(){

            let promise = await databases.listDocuments(
                "6706e36200146facdec1",
                "6706e372002b99485a37",
                []
            )

            return promise

        },
        refetchOnMount: false,
        refetchOnWindowFocus: false
    })


    if(teachers.isLoading || teachers.isFetching){
        return(
            <></>
        )
    }

    return (
        <div className="publications">
            {
                teachers.data.documents.map((teacher) => (
                    <TeacherCard id={teacher.ID} name={teacher.Name}/>
                ))
            }
        </div>
    );

}


function TeacherCard({id, name}) {

    const navigator = useNavigate()
    function clickHandler(){
        navigator('./' + id, {state: {name, id}})
    }

    return (
        <div className='teacherCard' onClick={clickHandler}>
            <div className="teacherCardImg">

            </div>
            <p className="teacherCardName">{name}</p>
        </div>
    );
}

function Publication({ pub, index }) {

    return (
        <div className="pub">
            <h4>{pub.title}</h4>
            <p>By: {pub.authors.join(', ')}</p>
            <p>Publication: {pub.journal}, Volume: {pub.volume} </p>
        </div>
    )

}
