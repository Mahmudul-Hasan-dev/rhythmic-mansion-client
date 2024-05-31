
import useAxios from './useAxios';
import { useQuery } from "@tanstack/react-query";

const useAllClass = () => {
    const axiosPublic = useAxios();
    const {data: allClasses = [], isPending: loading, refetch} = useQuery({
        queryKey: ['classes'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/classes');
            return res.data;
        }
    })
  



    return [allClasses, loading, refetch]
};

export default useAllClass;