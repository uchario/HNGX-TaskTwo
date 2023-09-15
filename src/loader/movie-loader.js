import { moviesQuery } from "../queries/moviesQuery";
import { queryClient } from "../main";

export const loader = () => 
    async ({params, request}) => {
        const {queryKey, queryFn} = moviesQuery();
        
        const data = await queryClient.ensureQueryData({queryKey, queryFn});
        return data;
        
}