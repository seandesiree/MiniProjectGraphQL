
import { useQuery, useMutation } from '@apollo/client';

export const useGraphql = (query: string) => {
    return useQuery(query);
};

export const useGraphqlMutation = (mutation: string) => {
    return useMutation(mutation);
};