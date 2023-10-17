/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ServicoCustomizado } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NewForm1(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  };
  const [nome, setNome] = React.useState(initialValues.nome);
  const [email, setEmail] = React.useState(initialValues.email);
  const [telefone, setTelefone] = React.useState(initialValues.telefone);
  const [mensagem, setMensagem] = React.useState(initialValues.mensagem);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNome(initialValues.nome);
    setEmail(initialValues.email);
    setTelefone(initialValues.telefone);
    setMensagem(initialValues.mensagem);
    setErrors({});
  };
  const validations = {
    nome: [],
    email: [{ type: "Email" }],
    telefone: [{ type: "Required" }],
    mensagem: [{ type: "Required" }],
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
          nome,
          email,
          telefone,
          mensagem,
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
          await DataStore.save(new ServicoCustomizado(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NewForm1")}
      {...rest}
    >
      <TextField
        label="Nome"
        isRequired={false}
        isReadOnly={false}
        value={nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome: value,
              email,
              telefone,
              mensagem,
            };
            const result = onChange(modelFields);
            value = result?.nome ?? value;
          }
          if (errors.nome?.hasError) {
            runValidationTasks("nome", value);
          }
          setNome(value);
        }}
        onBlur={() => runValidationTasks("nome", nome)}
        errorMessage={errors.nome?.errorMessage}
        hasError={errors.nome?.hasError}
        {...getOverrideProps(overrides, "nome")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email: value,
              telefone,
              mensagem,
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
        placeholder="(DDD) 12345-6789"
        value={telefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              telefone: value,
              mensagem,
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
      <TextAreaField
        label="Mensagem"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              telefone,
              mensagem: value,
            };
            const result = onChange(modelFields);
            value = result?.mensagem ?? value;
          }
          if (errors.mensagem?.hasError) {
            runValidationTasks("mensagem", value);
          }
          setMensagem(value);
        }}
        onBlur={() => runValidationTasks("mensagem", mensagem)}
        errorMessage={errors.mensagem?.errorMessage}
        hasError={errors.mensagem?.hasError}
        {...getOverrideProps(overrides, "mensagem")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
