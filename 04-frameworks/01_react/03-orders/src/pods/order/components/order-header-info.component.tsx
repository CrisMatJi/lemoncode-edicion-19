import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { OrderHeader } from "../order.vm";

interface Props {
  header: OrderHeader;
  onChange: (field: keyof OrderHeader, value: string) => void;
}

// React.memo evita repintar estos datos cuando solo cambian las líneas
export const OrderHeaderInfoComponent = React.memo((props: Props) => {
  const { header, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name as keyof OrderHeader, e.target.value);
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <TextField
        label="Número"
        name="number"
        size="small"
        value={header.number}
        onChange={handleChange}
      />
      <TextField
        label="Proveedor"
        name="supplier"
        size="small"
        fullWidth
        value={header.supplier}
        onChange={handleChange}
      />
      <TextField
        label="Fecha"
        name="date"
        type="date"
        size="small"
        value={header.date}
        onChange={handleChange}
        slotProps={{ inputLabel: { shrink: true } }}
      />
    </Stack>
  );
});
