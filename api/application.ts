import { http } from '@/api/core';
import { POSITION_FILTER_MAP } from '@/constants';
import {
  BaseResponse,
  GetApplicationRequest,
  GetApplicationResponse,
  PatchApplication,
  PostApplication,
  GetApplicationDetaiResponse,
  PatchApplicationDetailRequest,
  PatchApplicationDetailResponse,
} from '@/types';

export const getApplicationList = ({
  position,
}: GetApplicationRequest): Promise<BaseResponse<GetApplicationResponse[]>> => {
  if (position === POSITION_FILTER_MAP.All) {
    return http.get({
      url: '/application',
    });
  }
  if (position === 'SAVE') {
    return http.get({
      url: `/application?status=${position.toLowerCase()}`,
    });
  }
  return http.get({
    url: `/application?position=${position.toLowerCase()}`,
  });
};

export const postApplication = (application: PostApplication, token: string): Promise<BaseResponse<PostApplication>> =>
  http.post({
    url: '/application',
    data: application,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const patchApplication = (
  application: PatchApplication,
  token: string
): Promise<BaseResponse<PatchApplication>> =>
  http.patch({
    url: `/application`,
    data: application,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getApplicationDetail = (
  { id }: { id: string },
  token: string
): Promise<BaseResponse<GetApplicationDetaiResponse>> =>
  http.get({
    url: `/application/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const patchApplicationDetail = ({
  id,
  applicationStatus,
}: PatchApplicationDetailRequest): Promise<BaseResponse<PatchApplicationDetailResponse>> =>
  http.patch({
    url: `/application/${id}`,
    data: {
      applicationStatus,
    },
  });

export const getUserApplication = (token: string): Promise<BaseResponse<GetApplicationDetaiResponse>> =>
  http.get({
    url: '/application/me',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const postInterviewInformation = ({
  id,
  fixedInterviewDate,
  place,
}: {
  id: number;
  fixedInterviewDate: string;
  place: string;
}): Promise<BaseResponse<GetApplicationDetaiResponse>> =>
  http.post({
    url: '/interview',
    data: {
      id,
      fixedInterviewDate,
      place,
    },
  });

export const patchInterviewInformation = ({
  id,
  fixedInterviewDate,
  place,
}: {
  id: number;
  fixedInterviewDate: string;
  place: string;
}): Promise<BaseResponse<GetApplicationDetaiResponse>> =>
  http.patch({
    url: `/interview/${id}`,
    data: {
      fixedInterviewDate,
      place,
    },
  });
