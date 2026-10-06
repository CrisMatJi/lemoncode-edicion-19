import { MemberDetailEntity } from "./detail.vm";
import { getMemberDetail as getMemberDetailApi } from "./detail.api";
import { mapMemberFromApiToVm } from "./detail.mapper";

export const getMemberDetail = (id: string): Promise<MemberDetailEntity> =>
  getMemberDetailApi(id).then(mapMemberFromApiToVm);
