import http from '@/api/core';

import { GetProjectRequest, GetProjectResponse, GetProjectListRequest, GetProjectListResponse } from '@/types';

export const getProjectList = ({ generation }: GetProjectListRequest) => {
  if (generation) {
    return http.get<GetProjectListResponse>(`/portfolios${generation}`);
  }
  return http.get(`/portfolios`);
};

export const getProject = ({ portfolioId }: GetProjectRequest) =>
  http.get<GetProjectResponse>(`/portfolios/${portfolioId}`);
