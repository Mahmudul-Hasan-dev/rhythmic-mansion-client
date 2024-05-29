import useAxios from './useAxios';
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const axiosPublic = useAxios();
    const {data: instructors = [], isPending: loading, refetch} = useQuery({
        queryKey: ['instructors'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/instructors');
            return res.data;
        }
    })
  



    return [instructors, loading, refetch]
};

export default useInstructor;