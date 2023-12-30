"use client";
import { Container, Button, Grid } from "@mui/material";
import { TextInput } from "./TextInput";
import { Checkbox } from "./Checkbox";
import Loading from "/app/loading";
import { FormSelect } from "./FormSelect";
import { SmartList } from "./SmartList";
import { NestedList } from "./NestedList/NestedList";
import { formComponents } from "./DataFormComponents";

const Form = ({ profile, handleSubmit, handleChangeValue }) => {
  if (profile === null) {
    return (
      <div className="container">
        <h1>Contact is not available</h1>
        <Loading />
      </div>
    );
  }
  return (
    <Container maxWidth="xl" sx={{ mb: "150px" }}>
      <form onSubmit={handleSubmit}>
        {formComponents.map((item) => {
          if (item.type === "text") {
            return (
              <TextInput
                key={item.name}
                label={item.label}
                name={item.name}
                profile={profile}
                handleChangeValue={handleChangeValue}
              />
            );
          }
        })}
        <Grid container spacing={2}>
          {formComponents.map((item) => {
            if (item.type === "checkbox") {
              return (
                <Checkbox
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  profile={profile}
                  handleChangeValue={handleChangeValue}
                />
              );
            }
          })}
        </Grid>

        <Grid container spacing={2}>
          {formComponents.map((item) => {
            if (item.type === "formSelect") {
              return (
                <FormSelect
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  profile={profile}
                  handleChangeValue={handleChangeValue}
                />
              );
            } else if (item.type === "smartList") {
              return (
                <SmartList
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  profile={profile}
                  handleChangeValue={handleChangeValue}
                />
              );
            } else if (item.type === "nestedList") {
              return (
                <NestedList
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  profile={profile}
                  handleChangeValue={handleChangeValue}
                />
              );
            }
          })}
        </Grid>

        <Button
          fullWidth
          sx={{ mt: "20px" }}
          type="submit"
          variant="contained"
          color="success"
        >
          {" "}
          submit
        </Button>
      </form>
    </Container>
  );
};

export { Form };
