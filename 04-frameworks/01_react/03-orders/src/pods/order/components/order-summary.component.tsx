import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  total: number;
  status: number;
  onSend: () => void;
}

export const OrderSummaryComponent: React.FC<Props> = (props) => {
  const { total, status, onSend } = props;

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <TextField
        label="Importe total"
        size="small"
        value={`${total.toFixed(2)} €`}
        slotProps={{ input: { readOnly: true } }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body2">Estado: {status}%</Typography>
        <LinearProgress
          variant="determinate"
          value={status}
          color={status === 100 ? "success" : "primary"}
        />
      </Box>
      {/* Solo se puede enviar si todas las líneas están validadas */}
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={onSend}
        disabled={status < 100}
      >
        Enviar
      </Button>
    </Stack>
  );
};
