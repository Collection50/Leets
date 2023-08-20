export const SEARCH_TARGET = {
  NAME: 'name',
  APPLICATION_STATUS: 'applicationStatus',
  INTERVIEW_STATUS: 'hasInterview',
} as const;

export const SORT_METHOD = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export const SORT_TARGET = {
  GPA: 'gpa',
  INTERVIEW_DATE: 'fixedInterviewDate',
} as const;

export const PAGINATION = {
  QUERY: 'pageNumber',
  DEFAULT_PAGE: '1',
} as const;

export const APPLY_POSITION = {
  DEV: '개발',
  DESIGN: '디자인',
} as const;

export const POSITION_FILTER_MAP = {
  All: 'All',
  SAVE: '임시저장',
  ...APPLY_POSITION,
} as const;

export const POSITION_TYPES = Object.keys(POSITION_FILTER_MAP) as (keyof typeof POSITION_FILTER_MAP)[];
