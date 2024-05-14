import { PaginationState } from '../components/Pagination';
import { ProjectsOrder } from '../pages/Project';
import { QUERY_KEYS } from '../constants/queryKey';
import { getProjects } from '../api/project/getProjects';
import { useQuery } from 'react-query';

interface UseGetProjectsProps {
  pagination: PaginationState;
  sortOption: ProjectsOrder;
}

export const useGetProjects = (props: UseGetProjectsProps) => {
  const { pagination, sortOption } = props;
  const params = {
    sort: sortOption.sort,
    order: sortOption.order,
    max: pagination.pageSize,
    offset: pagination.offset,
  };

  const { data, isLoading } = useQuery(
    [QUERY_KEYS.PROJECT.ALL, { ...params }],
    () => getProjects(params),
    {
      keepPreviousData: true,
    },
  );

  return {
    data,
    isLoading,
  };
};
