const SecureFetch = async(url,method,header,body ) =>{
     const request = await fetch(url,{
        methods:method,
        headers:header,
        body:body ? JSON.stringify(body) : undefined,
     });
     return request;
}
export default SecureFetch;