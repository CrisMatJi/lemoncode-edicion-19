import { MemberEntity } from "./list.vm";
import { getMemberCollection as getMemberCollectionApi } from "./list.api";
import { mapMemberCollectionFromApiToVm } from "./list.mapper";

export const getMemberCollection = (
  organization: string
): Promise<MemberEntity[]> =>
  getMemberCollectionApi(organization).then(mapMemberCollectionFromApiToVm);
