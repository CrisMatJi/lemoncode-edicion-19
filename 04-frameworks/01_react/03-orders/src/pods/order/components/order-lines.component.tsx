import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { OrderLine } from "../order.vm";

interface Props {
  lines: OrderLine[];
  selectedIds: string[];
  onToggleSelect: (id: string) => void;
  onValidate: () => void;
  onInvalidate: () => void;
  onAmountChange: (id: string, amount: number) => void;
}

export const OrderLinesComponent: React.FC<Props> = (props) => {
  const {
    lines,
    selectedIds,
    onToggleSelect,
    onValidate,
    onInvalidate,
    onAmountChange,
  } = props;
  const noSelection = selectedIds.length === 0;

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Button variant="contained" onClick={onValidate} disabled={noSelection}>
          Validar
        </Button>
        <Button variant="outlined" onClick={onInvalidate} disabled={noSelection}>
          Invalidar
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell>Estado</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Importe (€)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lines.map((line) => (
              <TableRow
                key={line.id}
                hover
                selected={selectedIds.includes(line.id)}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds.includes(line.id)}
                    onChange={() => onToggleSelect(line.id)}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={line.validated ? "Válido" : "Pendiente"}
                    color={line.validated ? "success" : "warning"}
                  />
                </TableCell>
                <TableCell>{line.description}</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    size="small"
                    variant="standard"
                    value={line.amount}
                    onChange={(e) =>
                      onAmountChange(line.id, Number(e.target.value))
                    }
                    slotProps={{ htmlInput: { min: 0 } }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
