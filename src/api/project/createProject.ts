import { HTTP, Response } from '../../utils/http';

export interface CreateProjectParams {
  name: string;
  ontologyId: number;
}

export const createProject = async (
  name: string,
  ontologyId: number = 34956166,
) => {
  const res = await HTTP.post<CreateProjectParams, Response<object>>(
    `/project.json`,
    { name, ontologyId },
  );

  return res;
};
