import { Box } from "@mui/material";
import { FC } from "react";
import { InputBase } from "@mui/material";
import { Button } from "@/shared/ui/Button";

export const SearchInput: FC = () => {
  return (
    <Box
      sx={{
        borderRadius: "6px",
        display: "flex",
        padding: "1px 2px",
        position: "relative",
        width: "100%",
        backgroundColor: "#0af",
        flexGrow: 1,
        alignItems: "center",
        maxWidth: "550px",
      }}
    >
      <InputBase
        placeholder="Поиск по объявлениям"
        type="text"
        autoComplete="off"
        sx={{
          borderRadius: "8px",
          margin: "1px 1px 1px 0",
          position: "relative",
          height: "35px",
          width: "100%",
          backgroundColor: "white",
          padding: "1px 6px 0 12px",
        }}
      />
      <Button type="button" variant="primary" size="sm" className="">
        Найти
      </Button>
    </Box>
  );
};
