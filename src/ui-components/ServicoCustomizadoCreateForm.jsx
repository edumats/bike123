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
  Heading,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { ServicoCustomizado } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ServicoCustomizadoCreateForm(props) {
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
    nome: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
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
      {...getOverrideProps(overrides, "ServicoCustomizadoCreateForm")}
      {...rest}
    >
      <Heading
        level={3}
        children="Precisa de algo especial?"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Text
        children=" Sua bicicleta está com um barulho estranho? Está querendo trocar algo na bike?"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Text>
      <Text
        children=" Fale com a gente e tenha um orçamento sob medida "
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Text>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Nome</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Email</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Telefone</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Mensagem</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
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
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Enviar"
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
