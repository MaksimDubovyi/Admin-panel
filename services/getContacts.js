

const URL1='https://next-js-one-henna.vercel.app';
const URL2='http://localhost:3000';


export const getContacts = async () => {
    try {
        const response = await fetch(URL2 + '/api/contacts', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',

            },
            next: {
                revalidate: 250,
            },
        });

        if (!response.ok) throw new Error("Unable to fetch contacts");

        return response.json();
    } catch {  
        return null;
    }
}





export const getContactsBySearch = async (search) =>{

    try{
        const response = await fetch(URL2+`/api/contacts?search=${search}`,{
            next:{
                revalidate:250
            }
        });
    
        if(!response.ok)throw new Error("Unable to fetch contacts");
    
        return response.json();
    }
    catch{
        return null
    }


}
export  const getContactsId = async (id)=> {
    try
    {
        const response = await fetch(URL2+`/api/contacts/?contact=${id}`, {
            next: {
                revalidate: 250
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
     
        return response.json();
    }
    catch{
        return null
    }
      
    }


