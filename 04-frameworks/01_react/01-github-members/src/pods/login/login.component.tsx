import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface Props {
  onLogin: (username: string, password: string) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Card sx={{ width: 360 }}>
      <CardHeader title="Login" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Entrar
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};
