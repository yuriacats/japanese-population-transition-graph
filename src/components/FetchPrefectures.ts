export {fetchAPI,fetchRESAS}
    const apiKey: string= process.env.API_KEY? process.env.API_KEY:"";
    const fetchAPI = (api_key:string) => (api_url:string) => {
        console.log(api_url);
        console.log(api_key);
        return 0
    }
    const fetchRESAS = fetchAPI(apiKey);