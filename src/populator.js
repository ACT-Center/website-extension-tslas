import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6706e315001949143d10');

const databases = new Databases(client);

for(let i = 0; i < data.length; i++){
    const promise = await databases.createDocument(
        '6706e36200146facdec1',
        '6706ecb6003a5a280162',
        ID.unique(),
        {
            TeacherID: parseInt(data[i].TeacherID),
            Paper: data[i].Paper,
            Link: data[i].Link?.trim()
        }
    );
}