import { createPortal } from "react-dom";
import { FC, PropsWithChildren, useCallback, useEffect } from "react";
import Stack from "@mui/material/Stack";
import styles from "./Modal.module.css";
import { Text } from "../../Text";
import CloseIcon from "@mui/icons-material/Close";

type TModalProps = {
  title?: string;
  onClose: () => void;
};

export const Modal: FC<PropsWithChildren<TModalProps>> = ({
  children,
  onClose,
  title,
}) => {
  const handleCloseByEscape = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleCloseByEscape);

    return () => {
      window.removeEventListener("keydown", handleCloseByEscape);
    };
  }, [onClose, handleCloseByEscape]);

  return createPortal(
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: 20,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transitionDuration: "300ms",
        transitionProperty: "all",
        transitionTimingFunction: "linear",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "start",
          position: "relative",
          zIndex: 30,
          textAlign: "center",
          width: "40%",
          minHeight: "30rem",
          borderRadius: "1.5rem",
          backgroundColor: "rgb(241 245 249)",
        }}
      >
        {title && (
          <Text as="h2" size="2xl" weight="semibold" className={styles.title}>
            Хорошо
          </Text>
        )}
        <CloseIcon
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "1rem",
            transition: "color 600ms ease",
            fontSize: "1.8rem",
            right: "1rem",
            cursor: "pointer",
            color: "gray",
            "&:hover": {
              color: "black",
            },
          }}
        />
        <main className={styles.mainContent}>{children}</main>
      </Stack>
      <div onClick={onClose} className={styles.overlay}></div>
    </Stack>,
    document.getElementById("modal") as HTMLElement
  );
};
