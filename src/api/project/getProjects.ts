import { OrderOption, SortOption } from '../../pages/Project';

import { HTTP } from '../../utils/http';

export type Collection = {
  id: number;
  name: string;
  numberOfImages: number;
  created: string;
  numberOfAnnotations: number;
  numberOfSlides: number;
  ontologyName: string;
};

export interface Project {
  perPage: number;
  offset: number;
  size: number;
  totalPages: number;
  collection: Collection[];
}

interface GetProjectsParams {
  sort: SortOption;
  order: OrderOption;
  max: number;
}

export const getProjects = async (params: GetProjectsParams) => {
  const query = new URLSearchParams(params as any).toString();
  const res = await HTTP.get<Project>(`/project.json?${query}`);

  return res.data;
};
