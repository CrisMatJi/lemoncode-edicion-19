import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import { routes } from "@/core";
import { MemberEntity } from "./list.vm";

const PAGE_SIZE = 10;

interface Props {
  members: MemberEntity[];
  organization: string;
  error: string;
  onSearch: (organization: string) => void;
}

export const ListComponent: React.FC<Props> = (props) => {
  const { members, organization, error, onSearch } = props;
  const [filter, setFilter] = React.useState(organization);
  const [page, setPage] = React.useState(1);

  // Al cambiar de organización volvemos a la primera página
  React.useEffect(() => {
    setPage(1);
  }, [members]);

  // Al buscar actualizamos la organización del contexto
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(filter.trim());
  };

  // Paginación en cliente: calculamos las páginas y cortamos el array
  const totalPages = Math.ceil(members.length / PAGE_SIZE);
  const pageMembers = members.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Miembros de {organization}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <TextField
            label="Organización"
            size="small"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Button type="submit" variant="contained" disabled={!filter.trim()}>
            Buscar
          </Button>
        </Stack>
      </form>
      {error && <Alert severity="error">{error}</Alert>}
      <List>
        {pageMembers.map((member) => (
          <ListItemButton
            key={member.id}
            component={Link}
            to={routes.details(member.login)}
          >
            <ListItemAvatar>
              <Avatar src={member.avatar_url} />
            </ListItemAvatar>
            <ListItemText primary={member.login} secondary={`Id: ${member.id}`} />
          </ListItemButton>
        ))}
      </List>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ display: "flex", justifyContent: "center" }}
        />
      )}
    </>
  );
};
