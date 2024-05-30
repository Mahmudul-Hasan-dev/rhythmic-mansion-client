
import useAxios from './useAxios';
import { useQuery } from "@tanstack/react-query";

const useAllClass = () => {
    const axiosPublic = useAxios();
    const {data: classes = [], isPending: loading, refetch} = useQuery({
        queryKey: ['classes'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/classes');
            return res.data;
        }
    })
  



    return [classes, loading, refetch]
};

export default useAllClass;