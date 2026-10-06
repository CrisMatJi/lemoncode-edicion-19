import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { routes } from "@/core";
import { MemberDetailEntity } from "./detail.vm";

interface Props {
  member: MemberDetailEntity;
}

export const DetailComponent: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={member.avatarUrl} sx={{ width: 64, height: 64 }} />}
        title={member.name}
        subheader={`@${member.login} · Id: ${member.id}`}
      />
      <CardContent>
        <Typography>Empresa: {member.company}</Typography>
        <Typography>Bio: {member.bio}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={routes.list}>
          Volver al listado
        </Button>
      </CardActions>
    </Card>
  );
};
