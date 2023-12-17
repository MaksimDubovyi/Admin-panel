

const URL1='https://next-js-one-henna.vercel.app';
const URL2='http://localhost:3000';


export const getInfo = async () => {
    try {
        const response = await fetch(URL2 + '/api/info', {
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




