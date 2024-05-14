import {
  CreateProjectParams,
  createProject,
} from '../api/project/createProject';
import { useMutation, useQueryClient } from 'react-query';

import { QUERY_KEYS } from '../constants/queryKey';

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    ({ name, ontologyId }: CreateProjectParams) =>
      createProject(name, ontologyId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.PROJECT.ALL]);
      },
    },
  );

  return { createProject: mutate, createProjectLoading: isLoading };
};
