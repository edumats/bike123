/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Lojista } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LojistaUpdateForm(props) {
  const {
    id: idProp,
    lojista: lojistaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cnpj: "",
    razao_social: "",
    nome_fantasia: "",
    nome_responsavel: "",
    email: "",
    telefone: "",
  };
  const [cnpj, setCnpj] = React.useState(initialValues.cnpj);
  const [razao_social, setRazao_social] = React.useState(
    initialValues.razao_social
  );
  const [nome_fantasia, setNome_fantasia] = React.useState(
    initialValues.nome_fantasia
  );
  const [nome_responsavel, setNome_responsavel] = React.useState(
    initialValues.nome_responsavel
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [telefone, setTelefone] = React.useState(initialValues.telefone);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = lojistaRecord
      ? { ...initialValues, ...lojistaRecord }
      : initialValues;
    setCnpj(cleanValues.cnpj);
    setRazao_social(cleanValues.razao_social);
    setNome_fantasia(cleanValues.nome_fantasia);
    setNome_responsavel(cleanValues.nome_responsavel);
    setEmail(cleanValues.email);
    setTelefone(cleanValues.telefone);
    setErrors({});
  };
  const [lojistaRecord, setLojistaRecord] = React.useState(lojistaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Lojista, idProp)
        : lojistaModelProp;
      setLojistaRecord(record);
    };
    queryData();
  }, [idProp, lojistaModelProp]);
  React.useEffect(resetStateValues, [lojistaRecord]);
  const validations = {
    cnpj: [{ type: "Required" }],
    razao_social: [{ type: "Required" }],
    nome_fantasia: [{ type: "Required" }],
    nome_responsavel: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    telefone: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          cnpj,
          razao_social,
          nome_fantasia,
          nome_responsavel,
          email,
          telefone,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Lojista.copyOf(lojistaRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LojistaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cnpj"
        isRequired={true}
        isReadOnly={false}
        value={cnpj}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj: value,
              razao_social,
              nome_fantasia,
              nome_responsavel,
              email,
              telefone,
            };
            const result = onChange(modelFields);
            value = result?.cnpj ?? value;
          }
          if (errors.cnpj?.hasError) {
            runValidationTasks("cnpj", value);
          }
          setCnpj(value);
        }}
        onBlur={() => runValidationTasks("cnpj", cnpj)}
        errorMessage={errors.cnpj?.errorMessage}
        hasError={errors.cnpj?.hasError}
        {...getOverrideProps(overrides, "cnpj")}
      ></TextField>
      <TextField
        label="Razao social"
        isRequired={true}
        isReadOnly={false}
        value={razao_social}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              razao_social: value,
              nome_fantasia,
              nome_responsavel,
              email,
              telefone,
            };
            const result = onChange(modelFields);
            value = result?.razao_social ?? value;
          }
          if (errors.razao_social?.hasError) {
            runValidationTasks("razao_social", value);
          }
          setRazao_social(value);
        }}
        onBlur={() => runValidationTasks("razao_social", razao_social)}
        errorMessage={errors.razao_social?.errorMessage}
        hasError={errors.razao_social?.hasError}
        {...getOverrideProps(overrides, "razao_social")}
      ></TextField>
      <TextField
        label="Nome fantasia"
        isRequired={true}
        isReadOnly={false}
        value={nome_fantasia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              razao_social,
              nome_fantasia: value,
              nome_responsavel,
              email,
              telefone,
            };
            const result = onChange(modelFields);
            value = result?.nome_fantasia ?? value;
          }
          if (errors.nome_fantasia?.hasError) {
            runValidationTasks("nome_fantasia", value);
          }
          setNome_fantasia(value);
        }}
        onBlur={() => runValidationTasks("nome_fantasia", nome_fantasia)}
        errorMessage={errors.nome_fantasia?.errorMessage}
        hasError={errors.nome_fantasia?.hasError}
        {...getOverrideProps(overrides, "nome_fantasia")}
      ></TextField>
      <TextField
        label="Nome responsavel"
        isRequired={true}
        isReadOnly={false}
        value={nome_responsavel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              razao_social,
              nome_fantasia,
              nome_responsavel: value,
              email,
              telefone,
            };
            const result = onChange(modelFields);
            value = result?.nome_responsavel ?? value;
          }
          if (errors.nome_responsavel?.hasError) {
            runValidationTasks("nome_responsavel", value);
          }
          setNome_responsavel(value);
        }}
        onBlur={() => runValidationTasks("nome_responsavel", nome_responsavel)}
        errorMessage={errors.nome_responsavel?.errorMessage}
        hasError={errors.nome_responsavel?.hasError}
        {...getOverrideProps(overrides, "nome_responsavel")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              razao_social,
              nome_fantasia,
              nome_responsavel,
              email: value,
              telefone,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Telefone"
        isRequired={true}
        isReadOnly={false}
        value={telefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cnpj,
              razao_social,
              nome_fantasia,
              nome_responsavel,
              email,
              telefone: value,
            };
            const result = onChange(modelFields);
            value = result?.telefone ?? value;
          }
          if (errors.telefone?.hasError) {
            runValidationTasks("telefone", value);
          }
          setTelefone(value);
        }}
        onBlur={() => runValidationTasks("telefone", telefone)}
        errorMessage={errors.telefone?.errorMessage}
        hasError={errors.telefone?.hasError}
        {...getOverrideProps(overrides, "telefone")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || lojistaModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || lojistaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
