import React from "react";
import { MemberDetailEntity, createDefaultMemberDetail } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { getMemberDetail } from "./detail.repository";

interface Props {
  id: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );

  // Cargamos el detalle del miembro al entrar en la página
  React.useEffect(() => {
    getMemberDetail(id).then((memberDetail) => setMember(memberDetail));
  }, [id]);

  return <DetailComponent member={member} />;
};
