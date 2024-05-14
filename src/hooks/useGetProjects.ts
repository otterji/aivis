import { QUERY_KEYS } from '../constants/queryKey';
import { getProjects } from '../api/project/getProjects';
import { useQuery } from 'react-query';

export const useGetProjects = () => {
  const { data, isLoading } = useQuery(QUERY_KEYS.PROJECT.ALL, () =>
    getProjects(),
  );

  return {
    data,
    isLoading,
  };
};
