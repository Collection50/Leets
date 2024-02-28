const MAX_LENGTH = {
  NAME: 5,
  GRADE: 1,
  MAJOR: 10,
  CAREER: 10,
  ALGORITHM: 50,
  PROJECT: 50,
  PORTFOLIO: 50,
  PHONE: 13,
  INTERVIEW_DAY: 10,
  INTERVIEW_TIME: 13,

  GOAL: 700,
  COMPLETION: 500,
  LEVEL: 500,
  PROS: 500,
  ENHANCEMENT: 700,
} as const;

export const DEV_INPUTS = [
  { id: 'name', title: '이름', holderText: '이름을 입력하세요.', required: true, maxLength: MAX_LENGTH.NAME },
  {
    id: 'grade',
    title: '학년',
    holderText: '학년을 입력하세요. (ex 1, 2, 3, 4)',
    required: true,
    maxLength: MAX_LENGTH.GRADE,
  },
  { id: 'major', title: '학과', holderText: '학과를 입력하세요.', required: true, maxLength: MAX_LENGTH.MAJOR },
  {
    id: 'career',
    title: '희망 직무',
    holderText: '희망 직무를 입력하세요. (ex 백엔드, 프론트엔드, 미정)',
    required: false,
    maxLength: MAX_LENGTH.CAREER,
  },
  {
    id: 'algorithm',
    title: '알고리즘',
    holderText: '알고리즘 수준을 입력하세요. (ex 백준/릿코드/프로그래머스)',
    required: false,
    maxLength: MAX_LENGTH.ALGORITHM,
  },
  {
    id: 'project',
    title: '프로젝트',
    holderText: '프로젝트 경험을 입력하세요. (ex TODO 프로젝트 배포 1회/기여 내용 등)',
    required: false,
    maxLength: MAX_LENGTH.PROJECT,
  },
  {
    id: 'portfolio',
    title: 'Github/포트폴리오',
    holderText: 'Github 주소를 입력하세요.',
    required: false,
    maxLength: MAX_LENGTH.PORTFOLIO,
  },
  {
    id: 'phone',
    title: '전화번호',
    holderText: '전화번호를 입력하세요. (모든 개인 정보는 안내 이외에는 사용되지 않습니다.)',
    required: true,
    maxLength: MAX_LENGTH.PHONE,
  },
  {
    id: 'interviewDay',
    title: '면접 선호 요일',
    holderText: '3.20 ~ 3.26 중 평일을 선택하세요. 어렵다면 다른 날짜를 적어주세요.',
    required: true,
    maxLength: MAX_LENGTH.INTERVIEW_DAY,
  },
  {
    id: 'interviewTime',
    title: '면접 선호 시간',
    holderText: '면접이 가능한 시간대를 적어주세요. (ex 6~7시 사이)',
    required: true,
    maxLength: MAX_LENGTH.INTERVIEW_TIME,
  },
] as const;

export const DESING_INPUTS = [
  { id: 'name', title: '이름', holderText: '이름을 입력하세요.', required: true, maxLength: MAX_LENGTH.NAME },
  {
    id: 'grade',
    title: '학년',
    holderText: '학년을 입력하세요. (ex 1, 2, 3, 4)',
    required: true,
    maxLength: MAX_LENGTH.GRADE,
  },
  { id: 'major', title: '학과', holderText: '학과를 입력하세요.', required: true, maxLength: MAX_LENGTH.MAJOR },
  {
    id: 'career',
    title: '희망 직무',
    holderText: '희망 직무를 입력하세요. (ex UI/UX 디자이너)',
    required: false,
    maxLength: MAX_LENGTH.CAREER,
  },
  {
    id: 'project',
    title: '프로젝트',
    holderText: '프로젝트 경험을 입력하세요. (ex UI/UX 디자인 제작, 디자인시스템 제작 등)',
    required: false,
    maxLength: MAX_LENGTH.PROJECT,
  },
  {
    id: 'portfolio',
    title: 'Figma/포트폴리오',
    holderText: 'Figma/포트폴리오 주소를 입력하세요.',
    required: false,
    maxLength: MAX_LENGTH.PORTFOLIO,
  },
  {
    id: 'phone',
    title: '전화번호',
    holderText: '전화번호를 입력하세요. (ex 010-1234-5678)',
    required: true,
    maxLength: MAX_LENGTH.PHONE,
  },
  {
    id: 'interviewDay',
    title: '면접 선호 요일',
    holderText: '3.20 ~ 3.26 중 평일을 선택하세요. 어렵다면 다른 날짜를 적어주세요.',
    required: true,
    maxLength: MAX_LENGTH.INTERVIEW_DAY,
  },
  {
    id: 'interviewTime',
    title: '면접 선호 시간',
    holderText: '면접이 가능한 시간대를 적어주세요. (ex 6~7시 사이)',
    required: true,
    maxLength: MAX_LENGTH.INTERVIEW_TIME,
  },
] as const;

export const DEV_TEXTAREAS = [
  {
    id: 'goal',
    title: 'Leets에 들어와서 얻어가고 싶은 것은 무엇인가요?',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.GOAL,
  },
  {
    id: 'completion',
    title: '무언가 열심히 해서 얻은 경험을 적어주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.COMPLETION,
  },
  {
    id: 'pros',
    title: '본인의 장단점을 구체적인 경험을 바탕으로 소개해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.LEVEL,
  },
  {
    id: 'level',
    title:
      '개발 실력을 1부터 10까지 점수로 표현해주세요.\n이유를 공부한 과정을 기반으로 작성해주시고, 학습 계획에 대해 자세히 소개해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.PROS,
  },
  {
    id: 'enhancement',
    title: '소프트웨어 개발을 더 잘하고 싶어서 시도했던 경험을 적어주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.ENHANCEMENT,
  },
] as const;

export const DESIGN_TEXTAREAS = [
  {
    id: 'goal',
    title: 'Leets에 들어와서 얻어가고 싶은 것은 무엇인가요?',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.GOAL,
  },
  {
    id: 'completion',
    title: '무언가 열심히 해서 얻은 경험을 적어주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.COMPLETION,
  },
  {
    id: 'pros',
    title: '본인의 장단점을 구체적인 경험을 바탕으로 소개해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.LEVEL,
  },
  {
    id: 'level',
    title:
      '디자인 실력을 1부터 10까지 점수로 표현해주세요.\n이유를 공부한 과정을 기반으로 작성해주시고, 학습 계획에 대해 자세히 소개해주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.PROS,
  },
  {
    id: 'enhancement',
    title: '디자인을 더 잘하고 싶어서 시도했던 경험을 적어주세요.',
    holderText: '내용을 입력해주세요.',
    required: true,
    maxLength: MAX_LENGTH.ENHANCEMENT,
  },
] as const;

export const LOGIN_DEFAULT_VALUE = {
  id: '',
  password: '',
} as const;
