import React from "react";
import { OrganizationContext } from "@/core/organization";
import { ListComponent } from "./list.component";
import { MemberEntity } from "./list.vm";
import { getMemberCollection } from "./list.repository";

export const ListContainer: React.FC = () => {
  const { organization, setOrganization } =
    React.useContext(OrganizationContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [error, setError] = React.useState("");

  // Cada vez que cambia la organización volvemos a pedir los miembros
  React.useEffect(() => {
    getMemberCollection(organization)
      .then((memberCollection) => {
        setMembers(memberCollection);
        setError("");
      })
      .catch(() => {
        setMembers([]);
        setError(`No se han encontrado miembros para "${organization}"`);
      });
  }, [organization]);

  return (
    <ListComponent
      members={members}
      organization={organization}
      error={error}
      onSearch={setOrganization}
    />
  );
};
