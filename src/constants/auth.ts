export const AUTH = {
    username: { requireMessage: '닉네임을 입력해주세요.' } as const,
    email: {
        requireMessage: '이메일을 입력해주세요.',
        regexMessage: '이메일 형식이 아닙니다.',
        minLength: 6,
        maxLength: 20,
        minMessage: '최소 6글자 이상이어야 합니다.',
        maxMessage: '최대 20글자 이하여야 합니다.',
    } as const,
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        regexMessage: '비밀번호는 최소 8자 이상이어야 하며 대문자, 소문자, 숫자가 각각 하나씩 포함되어야 합니다.',
    } as const,
    login: {
        failMessage: '로그인에 실패하였습니다.',
    } as const,
    register: {
        failMessage: '회원가입에 실패하였습니다.',
    } as const,
} as const;

export const AVATAR = {
    gender: {
        male: '남자',
        female: '여자',
    } as const,
} as const;

export const AVATAR_SELECT = 'AVATAR_SELECT' as const;
export const ROOM = 'ROOM' as const;
