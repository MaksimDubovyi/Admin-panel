import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useField } from "formik";
import { parse } from "date-fns";
import { Typography } from "@mui/material";

const FormikDate = ({ config, values, errors, touched }) => {
  const [field, meta, helpers] = useField(config.name);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    let parsedDate;
    if (field.value == null) {
      setStartDate(new Date());
      return;
    }
    if (field.value.length < 12) {
      parsedDate = parse(field.value, "dd.MM.yyyy", new Date());
      setStartDate(parsedDate);
    } else {
      parsedDate = parseDate(field.value, "FormikDate");
      setStartDate(new Date(parsedDate));
    }
  }, [field.value]);

  return (
    <>
      <Typography>{config.label}</Typography>
      <DatePicker
        {...field}
        selected={startDate}
        onChange={(date) => helpers.setValue(date)}
        dateFormat="dd.MM.yyyy"
      />
      {errors[config.name] && touched[config.name] && (
        <div style={{ color: "red" }}>{errors[config.name]}</div>
      )}
    </>
  );
};

export { FormikDate };

export const parseDate = (str, obj) => {
  let d = new Date(str);

  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();

  if (obj === "FormikDate") return `${month}.${day}.${year}`;
  else return `${day}.${month}.${year}`;
};
