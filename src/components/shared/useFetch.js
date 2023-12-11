import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        console.log("Use effect fires!");
        // console.log("the Name : ", name)
        // console.log("blogs : ", blogs);

        setTimeout(() => {

            fetch(url)
                .then((res) => {

                    if(!res.ok) {
                        throw Error('could not fetch data: resource');
                    }
                    console.log('the response : ', res)

                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);

                    // setTimeout(()=> {setIsLoading(false);},1000)
                })
                .catch(err=> {
                    console.log(err.message);
                    setIsLoading(false);
                    setError(err.message)
                });


        }
            , 1000)
    }, [url]); 
    // NOTE : add the url as dependency so that it will rewrite whenever a 
    // new URL is supplied

    return { data, isLoading, error }
        

}

// custom hooks needs to start with the work 'use'

export default useFetch;
