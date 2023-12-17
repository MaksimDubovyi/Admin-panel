

const URL1='https://next-js-one-henna.vercel.app';
const URL2='http://localhost:3000';
// export const getContacts = async () =>{

//     try{
//         const response = await fetch(URL2+'/api/contacts',{
//             next:{
//                 revalidate:250
//             }
//         });
    
//         if(!response.ok)throw new Error("Unable to fetch contacts");
    
//         return response.json();
//     }
//     catch{
//         return null
//     }

// }

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


    export const getContactsPost = async () => {
        try {
            const response = await fetch(URL2 + '/api/contacts', {
                method: 'POST', // Вказати метод POST
                headers: {
                    // Додати необхідні заголовки, якщо потрібно
                    'Content-Type': 'application/json',
                    // Інші заголовки...
                },
                body: JSON.stringify({
                    // Якщо ви відправляєте дані, вкажіть їх тут
                    // Наприклад, { key1: 'value1', key2: 'value2' }
                }),
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