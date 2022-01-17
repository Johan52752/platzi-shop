import axios from 'axios';
import { useEffect, useState, useCallback} from 'react';

const getData = async (url) => {
    const response= await axios.get(url);
    return response;
}

const useData = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const update = useCallback(async() =>{
        setLoading(true);
        try{
            const response = await getData("https://api.escuelajs.co/api/v1/products?limit=50&offset=");
            setProducts(response.data);
            setLoading(false);
        }catch(error){
            console.log(error);
            setLoading(false);
        }
    },[]);
    useEffect(()=>{
        update();
    },[update]);

    return{
        products,
        loading
    }
}

export default useData;