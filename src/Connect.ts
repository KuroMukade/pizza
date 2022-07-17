// export const getApiResource = async (url: string) => {
//     try {
//         const response = await fetch(url);
    
//         if (!response.ok) {
//             console.error('Could not fetch. ', response.status);
//             return false;
//         }

//         return await response.json;
//     } catch (error: any) {
//         console.error('Could not fetch, ', error.message);
//         throw new Error('error');
//     }
// }

// export const makeConcurrentRequest = async (url: string[]) => {
//     const res = await Promise.all(url.map(res => {
//         return fetch(res).then(res => res.json());
//     }))

//     return res;
// }
export {}