"use client";
import React from "react";
import { Formik } from "formik";
import { Container, Button, Grid, Typography } from "@mui/material";
import { TextInput } from "./TextInput";
import { Checkbox } from "./Checkbox";
import Loading from "/app/loading";
import { FormSelect } from "./FormSelect";
import { SmartList } from "./SmartList";
import { formComponents } from "./DataFormComponents";
import { MenuItem } from "@mui/material";
import * as DICTS from "../../../data";
import { HobbiesList } from "./CustomSelect/HobbiesList";
import { FormikDate, parseDate } from "./date/FormikDate";
import { parse, isBefore, subYears } from "date-fns";

const checkAge = (date) => {
  let day, month, year;
  if (date === null) return false;
  if (typeof date === "string") {
    const [Day, Month, Year] = date.split(".");
    day = Day;
    month = Month;
    year = Year;
  } else {
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
  }
  const parsedDate = parse(`${year}-${month}-${day}`, "yyyy-MM-dd", new Date());
  const today = new Date();
  const twelveYearsAgo = subYears(today, 12);
  return isBefore(parsedDate, twelveYearsAgo);
};

export const selectType = (type) => {
  switch (type) {
    case "CINEMA":
      return DICTS["GENRES"]["Cinema"];
    case "MUSIC":
      return DICTS["GENRES"]["Music"];
    case "LITERATURE":
      return DICTS["GENRES"]["Literature"];
    default:
      return DICTS[type];
  }
};

const validation = (values) => {
  const errors = {};
  if (!values.login) {
    errors.login = "Required";
  } else if (!/^[a-z]{4,}$/.test(values.login)) {
    errors.login =
      "The login must consist of at least 5 small Latin characters.";
  } else if (!values.name) {
    errors.name = "Required";
  } else if (!/^[a-zA-Zа-яА-ЯёЁіІєЄ ]{5,}$/i.test(values.name)) {
    errors.name = "Non-correct input.";
  } else if (values.langs.length === 0) {
    errors.langs = "Required";
  } else if (values.langs.length === 0) {
    errors.langs = "Required";
  } else if (!checkAge(values.dof)) {
    errors.dof = "Invalid age (from 12 years old)";
  }
  return errors;
};

const FormikForm = ({ profile }) => {
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
      <Formik
        initialValues={profile}
        validate={(values) => validation(values)}
        onSubmit={(values, { setSubmitting }) => {
          const filteredArrays = Object.keys(values).filter((key) =>
            key.endsWith("_H")
          );

          const result = filteredArrays.reduce((acum, item) => {
            acum.push(...values[item]);
            return acum;
          }, []);
          const resultObj = Object.keys(values).reduce((accumulator, key) => {
            if (!filteredArrays.includes(key)) {
              accumulator[key] = values[key];
            }
            return accumulator;
          }, {});

          resultObj.hobbies = [...result];

          if (resultObj.dof.length) {
            resultObj.dof = resultObj.dof;
          } else {
            resultObj.dof = parseDate(resultObj.dof);
          }

          console.log("resultObj", resultObj);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {formComponents.map((item) => {
              if (item.type === "text") {
                return (
                  <div key={item.name}>
                    {" "}
                    <TextInput
                      config={item}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                );
              } else if (item.type === "date") {
                return (
                  <div key={item.name}>
                    {" "}
                    <FormikDate
                      config={item}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                );
              }
            })}

            <Grid container spacing={2}>
              {formComponents.map((item) => {
                if (item.type === "checkbox") {
                  return (
                    <Checkbox
                      config={item}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                      key={item.name}
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
                      config={item}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                      options={DICTS[item.label]}
                      optionRender={(item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.label}
                        </MenuItem>
                      )}
                    />
                  );
                } else if (item.type === "smartList" || item.type === "goal") {
                  return (
                    <SmartList
                      key={item.name}
                      config={item}
                      options={selectType(item.label)}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  );
                }
              })}
            </Grid>

            <Grid container spacing={2}>
              {formComponents.map((item) => {
                if (item.type === "hobbieslist") {
                  return (
                    <Grid key={item.name} item xs={12} sx={{ mt: "50px" }}>
                      <Typography
                        align="center"
                        color="textSecondaty"
                        component="h6"
                        variant="h6"
                      >
                        {item.label}
                      </Typography>
                      <HobbiesList
                        label={item.label}
                        options={DICTS[item.label]}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                      />
                    </Grid>
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
        )}
      </Formik>
    </Container>
  );
};

export { FormikForm };
