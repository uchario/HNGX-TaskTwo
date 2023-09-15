import { options } from "../queries/moviesQuery";

import { movieQuery } from "../queries/movieQuery";
import { queryClient } from "../main";

export const loader = () => 
    async ({params, request}) => {
        const {queryKey, queryFn} = movieQuery(params.id);
        
        const data = await queryClient.ensureQueryData({queryKey, queryFn});
        return data;
        
}