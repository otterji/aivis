import { HTTP } from '../../utils/http';

type Value = 'sort' | 'order' | 'offset';
type DefaultValue = 'false' | 'true' | 'created' | 'desc' | 'asc' | '0';

export type Collection = {
  id: number;
  name: string;
  numberOfImages: number;
  created: string;
};

export interface Project {
  perPage: number;
  offset: number;
  size: number;
  totalPages: number;
  collection: Collection[];
}

interface ProjectParams {
  value?: Value;
  defaultValue?: DefaultValue;
  required?: boolean;
}

export const getProjects = async () => {
  const res = await HTTP.get<Project>(`/project.json`);

  return res.data;
};
