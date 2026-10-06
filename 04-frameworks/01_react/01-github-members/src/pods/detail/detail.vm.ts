export interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
  avatarUrl: string;
}

export const createDefaultMemberDetail = (): MemberDetailEntity => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
  avatarUrl: "",
});
