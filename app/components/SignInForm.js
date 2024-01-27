"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

const SignInForm = () => {
  const [open, setOpe] = useState(false);
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  const validate = () => {
    if (tel.length === 0) {
      setError("Введіть телефон");
      return false;
    }
    if (password.length === 0) {
      setError("Введіть пароль");
      return false;
    }
    return true;
  };
  const handleClose = () => {
    setOpe(false);
  };
  const handleClickOpen = () => {
    setOpe(true);
  };
  const handleSignOut = async () => {
    await signOut();
  };
  const handleSubmit = async () => {
    if (!validate()) return;
    const res = await signIn("credentials", {
      phoneNumber: tel,
      password: password,
      redirect: false,
    });
    if (res.error) {
      setError(`${res.error}  (status -  ${res.status})`);
    }
  };

  useEffect(() => {
    const handleSession = async () => {
      if (session && session.user) {
        setOpe(false);
      }
      if (session === null) {
        router.push("/");
      }
    };

    handleSession();
  }, [session]);
  return (
    <Box ml={15}>
      {session && session.user ? (
        <Button variant="outlined" color="error" onClick={handleSignOut}>
          Log Out
        </Button>
      ) : (
        <Button variant="outlined" color="warning" onClick={handleClickOpen}>
          Log In
        </Button>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Log in</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="tel"
            label="Phone"
            type="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <DialogContentText color={"red"}>{error}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="success">
            Log in
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export { SignInForm };
