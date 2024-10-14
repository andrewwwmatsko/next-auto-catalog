"use client";

import { FC } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MdEmail } from "react-icons/md";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

import css from "./StillHaveQuestionsForm.module.css";

const StillHaveQuestionsForm: FC = () => {
  const schema = Yup.object().shape({
    fullName: Yup.string().min(3).required("Email is required"),
    phoneNumber: Yup.string()
      .min(7)
      .matches(/^\d{10}$/)
      .required("Phone number is required"),
    selectValue: Yup.string().required(),
  });

  const handleSubmit = (values: any, actions: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
    }, 500);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        phoneNumber: "",
        selectValue: "Telegram",
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        errors,
        touched,
      }) => (
        <Form>
          <TextField
            id="standard-basic"
            placeholder="Your Name"
            variant="standard"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.fullName && Boolean(errors.fullName)}
            helperText={touched.fullName && errors.fullName}
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "#D2E7FF",
                opacity: 1,
              },
              "& .MuiInputBase-input": {
                color: "#D2E7FF",
              },
              width: "100%",
              color: "#D2E7FF",
              marginBottom: "38px",
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
            }}
          />

          {/* Phone Number Field */}
          <TextField
            id="standard-basic"
            placeholder="+1 (555) 555 1234"
            variant="standard"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phoneNumber && Boolean(errors.phoneNumber)} // Show error if touched and has error
            helperText={touched.phoneNumber && errors.phoneNumber} // Error message
            sx={{
              width: "100%",
              marginBottom: "38px",
              color: "#D2E7FF",
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#D2E7FF",
                opacity: 1,
              },
              "& .MuiInputBase-input": {
                color: "#D2E7FF",
              },
            }}
          />

          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              width: "100%",
              color: "#D2E7FF",
              marginBottom: "50px",
              "& .MuiInput-underline:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={values.selectValue}
              name="selectValue"
              onChange={(event) =>
                setFieldValue("selectValue", event.target.value)
              }
              onBlur={handleBlur}
              sx={{
                color: "white",
              }}
              error={touched.selectValue && Boolean(errors.selectValue)}
            >
              <MenuItem value="Telegram">Telegram</MenuItem>
              <MenuItem value="WhatsApp">WhatsApp</MenuItem>
              <MenuItem value="Viber">Viber</MenuItem>
            </Select>
          </FormControl>

          <button className={css.submitBtn} type="submit">
            <MdEmail size={15} /> SEND A REQUEST
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default StillHaveQuestionsForm;
