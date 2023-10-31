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
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { Mecanico } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MecanicoCreateForm(props) {
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
    celular: "",
    telefone: "",
    cep: "",
    Endereco: "",
    Numero: "",
    Complemento: "",
    Bairro: "",
    Cidade: "",
    Estado: "",
    cnh: "",
    imagem_cnh: "",
    Referencia: "",
    facebook: "",
    instagram: "",
    biografia: "",
  };
  const [nome, setNome] = React.useState(initialValues.nome);
  const [email, setEmail] = React.useState(initialValues.email);
  const [celular, setCelular] = React.useState(initialValues.celular);
  const [telefone, setTelefone] = React.useState(initialValues.telefone);
  const [cep, setCep] = React.useState(initialValues.cep);
  const [Endereco, setEndereco] = React.useState(initialValues.Endereco);
  const [Numero, setNumero] = React.useState(initialValues.Numero);
  const [Complemento, setComplemento] = React.useState(
    initialValues.Complemento
  );
  const [Bairro, setBairro] = React.useState(initialValues.Bairro);
  const [Cidade, setCidade] = React.useState(initialValues.Cidade);
  const [Estado, setEstado] = React.useState(initialValues.Estado);
  const [cnh, setCnh] = React.useState(initialValues.cnh);
  const [imagem_cnh, setImagem_cnh] = React.useState(initialValues.imagem_cnh);
  const [Referencia, setReferencia] = React.useState(initialValues.Referencia);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [biografia, setBiografia] = React.useState(initialValues.biografia);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNome(initialValues.nome);
    setEmail(initialValues.email);
    setCelular(initialValues.celular);
    setTelefone(initialValues.telefone);
    setCep(initialValues.cep);
    setEndereco(initialValues.Endereco);
    setNumero(initialValues.Numero);
    setComplemento(initialValues.Complemento);
    setBairro(initialValues.Bairro);
    setCidade(initialValues.Cidade);
    setEstado(initialValues.Estado);
    setCnh(initialValues.cnh);
    setImagem_cnh(initialValues.imagem_cnh);
    setReferencia(initialValues.Referencia);
    setFacebook(initialValues.facebook);
    setInstagram(initialValues.instagram);
    setBiografia(initialValues.biografia);
    setErrors({});
  };
  const validations = {
    nome: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    celular: [{ type: "Required" }],
    telefone: [],
    cep: [],
    Endereco: [],
    Numero: [],
    Complemento: [],
    Bairro: [],
    Cidade: [],
    Estado: [],
    cnh: [{ type: "Required" }],
    imagem_cnh: [{ type: "URL" }],
    Referencia: [],
    facebook: [{ type: "URL" }],
    instagram: [{ type: "URL" }],
    biografia: [],
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
          celular,
          telefone,
          cep,
          Endereco,
          Numero,
          Complemento,
          Bairro,
          Cidade,
          Estado,
          cnh,
          imagem_cnh,
          Referencia,
          facebook,
          instagram,
          biografia,
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
          await DataStore.save(new Mecanico(modelFields));
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
      {...getOverrideProps(overrides, "MecanicoCreateForm")}
      {...rest}
    >
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
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
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
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
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
            <span>Celular</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={celular}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular: value,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.celular ?? value;
          }
          if (errors.celular?.hasError) {
            runValidationTasks("celular", value);
          }
          setCelular(value);
        }}
        onBlur={() => runValidationTasks("celular", celular)}
        errorMessage={errors.celular?.errorMessage}
        hasError={errors.celular?.hasError}
        {...getOverrideProps(overrides, "celular")}
      ></TextField>
      <TextField
        label="Telefone"
        isRequired={false}
        isReadOnly={false}
        value={telefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone: value,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
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
      <TextField
        label="Cep"
        isRequired={false}
        isReadOnly={false}
        value={cep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep: value,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.cep ?? value;
          }
          if (errors.cep?.hasError) {
            runValidationTasks("cep", value);
          }
          setCep(value);
        }}
        onBlur={() => runValidationTasks("cep", cep)}
        errorMessage={errors.cep?.errorMessage}
        hasError={errors.cep?.hasError}
        {...getOverrideProps(overrides, "cep")}
      ></TextField>
      <TextField
        label="Endereco"
        isRequired={false}
        isReadOnly={false}
        value={Endereco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco: value,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.Endereco ?? value;
          }
          if (errors.Endereco?.hasError) {
            runValidationTasks("Endereco", value);
          }
          setEndereco(value);
        }}
        onBlur={() => runValidationTasks("Endereco", Endereco)}
        errorMessage={errors.Endereco?.errorMessage}
        hasError={errors.Endereco?.hasError}
        {...getOverrideProps(overrides, "Endereco")}
      ></TextField>
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        value={Numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero: value,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.Numero ?? value;
          }
          if (errors.Numero?.hasError) {
            runValidationTasks("Numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("Numero", Numero)}
        errorMessage={errors.Numero?.errorMessage}
        hasError={errors.Numero?.hasError}
        {...getOverrideProps(overrides, "Numero")}
      ></TextField>
      <TextField
        label="Complemento"
        isRequired={false}
        isReadOnly={false}
        value={Complemento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento: value,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.Complemento ?? value;
          }
          if (errors.Complemento?.hasError) {
            runValidationTasks("Complemento", value);
          }
          setComplemento(value);
        }}
        onBlur={() => runValidationTasks("Complemento", Complemento)}
        errorMessage={errors.Complemento?.errorMessage}
        hasError={errors.Complemento?.hasError}
        {...getOverrideProps(overrides, "Complemento")}
      ></TextField>
      <TextField
        label="Bairro"
        isRequired={false}
        isReadOnly={false}
        value={Bairro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro: value,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.Bairro ?? value;
          }
          if (errors.Bairro?.hasError) {
            runValidationTasks("Bairro", value);
          }
          setBairro(value);
        }}
        onBlur={() => runValidationTasks("Bairro", Bairro)}
        errorMessage={errors.Bairro?.errorMessage}
        hasError={errors.Bairro?.hasError}
        {...getOverrideProps(overrides, "Bairro")}
      ></TextField>
      <TextField
        label="Cidade"
        isRequired={false}
        isReadOnly={false}
        value={Cidade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade: value,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.Cidade ?? value;
          }
          if (errors.Cidade?.hasError) {
            runValidationTasks("Cidade", value);
          }
          setCidade(value);
        }}
        onBlur={() => runValidationTasks("Cidade", Cidade)}
        errorMessage={errors.Cidade?.errorMessage}
        hasError={errors.Cidade?.hasError}
        {...getOverrideProps(overrides, "Cidade")}
      ></TextField>
      <SelectField
        label="Estado"
        placeholder="Please select an option"
        isDisabled={false}
        value={Estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado: value,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.Estado ?? value;
          }
          if (errors.Estado?.hasError) {
            runValidationTasks("Estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("Estado", Estado)}
        errorMessage={errors.Estado?.errorMessage}
        hasError={errors.Estado?.hasError}
        {...getOverrideProps(overrides, "Estado")}
      >
        <option
          children="Ac"
          value="AC"
          {...getOverrideProps(overrides, "Estadooption0")}
        ></option>
        <option
          children="Al"
          value="AL"
          {...getOverrideProps(overrides, "Estadooption1")}
        ></option>
        <option
          children="Am"
          value="AM"
          {...getOverrideProps(overrides, "Estadooption2")}
        ></option>
        <option
          children="Ba"
          value="BA"
          {...getOverrideProps(overrides, "Estadooption3")}
        ></option>
        <option
          children="Ce"
          value="CE"
          {...getOverrideProps(overrides, "Estadooption4")}
        ></option>
        <option
          children="Df"
          value="DF"
          {...getOverrideProps(overrides, "Estadooption5")}
        ></option>
        <option
          children="Es"
          value="ES"
          {...getOverrideProps(overrides, "Estadooption6")}
        ></option>
        <option
          children="Go"
          value="GO"
          {...getOverrideProps(overrides, "Estadooption7")}
        ></option>
        <option
          children="Ma"
          value="MA"
          {...getOverrideProps(overrides, "Estadooption8")}
        ></option>
        <option
          children="Mt"
          value="MT"
          {...getOverrideProps(overrides, "Estadooption9")}
        ></option>
        <option
          children="Ms"
          value="MS"
          {...getOverrideProps(overrides, "Estadooption10")}
        ></option>
        <option
          children="Mg"
          value="MG"
          {...getOverrideProps(overrides, "Estadooption11")}
        ></option>
        <option
          children="Pa"
          value="PA"
          {...getOverrideProps(overrides, "Estadooption12")}
        ></option>
        <option
          children="Pb"
          value="PB"
          {...getOverrideProps(overrides, "Estadooption13")}
        ></option>
        <option
          children="Pr"
          value="PR"
          {...getOverrideProps(overrides, "Estadooption14")}
        ></option>
        <option
          children="Pe"
          value="PE"
          {...getOverrideProps(overrides, "Estadooption15")}
        ></option>
        <option
          children="Pi"
          value="PI"
          {...getOverrideProps(overrides, "Estadooption16")}
        ></option>
        <option
          children="Rj"
          value="RJ"
          {...getOverrideProps(overrides, "Estadooption17")}
        ></option>
        <option
          children="Rn"
          value="RN"
          {...getOverrideProps(overrides, "Estadooption18")}
        ></option>
        <option
          children="Rs"
          value="RS"
          {...getOverrideProps(overrides, "Estadooption19")}
        ></option>
        <option
          children="Ro"
          value="RO"
          {...getOverrideProps(overrides, "Estadooption20")}
        ></option>
        <option
          children="Rr"
          value="RR"
          {...getOverrideProps(overrides, "Estadooption21")}
        ></option>
        <option
          children="Sc"
          value="SC"
          {...getOverrideProps(overrides, "Estadooption22")}
        ></option>
        <option
          children="Sp"
          value="SP"
          {...getOverrideProps(overrides, "Estadooption23")}
        ></option>
        <option
          children="Se"
          value="SE"
          {...getOverrideProps(overrides, "Estadooption24")}
        ></option>
        <option
          children="To"
          value="TO"
          {...getOverrideProps(overrides, "Estadooption25")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Cnh</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={cnh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh: value,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.cnh ?? value;
          }
          if (errors.cnh?.hasError) {
            runValidationTasks("cnh", value);
          }
          setCnh(value);
        }}
        onBlur={() => runValidationTasks("cnh", cnh)}
        errorMessage={errors.cnh?.errorMessage}
        hasError={errors.cnh?.hasError}
        {...getOverrideProps(overrides, "cnh")}
      ></TextField>
      <TextField
        label="Imagem cnh"
        isRequired={false}
        isReadOnly={false}
        value={imagem_cnh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh: value,
              Referencia,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.imagem_cnh ?? value;
          }
          if (errors.imagem_cnh?.hasError) {
            runValidationTasks("imagem_cnh", value);
          }
          setImagem_cnh(value);
        }}
        onBlur={() => runValidationTasks("imagem_cnh", imagem_cnh)}
        errorMessage={errors.imagem_cnh?.errorMessage}
        hasError={errors.imagem_cnh?.hasError}
        {...getOverrideProps(overrides, "imagem_cnh")}
      ></TextField>
      <TextField
        label="Referencia"
        isRequired={false}
        isReadOnly={false}
        value={Referencia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia: value,
              facebook,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.Referencia ?? value;
          }
          if (errors.Referencia?.hasError) {
            runValidationTasks("Referencia", value);
          }
          setReferencia(value);
        }}
        onBlur={() => runValidationTasks("Referencia", Referencia)}
        errorMessage={errors.Referencia?.errorMessage}
        hasError={errors.Referencia?.hasError}
        {...getOverrideProps(overrides, "Referencia")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook: value,
              instagram,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram: value,
              biografia,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextAreaField
        label="Biografia"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nome,
              email,
              celular,
              telefone,
              cep,
              Endereco,
              Numero,
              Complemento,
              Bairro,
              Cidade,
              Estado,
              cnh,
              imagem_cnh,
              Referencia,
              facebook,
              instagram,
              biografia: value,
            };
            const result = onChange(modelFields);
            value = result?.biografia ?? value;
          }
          if (errors.biografia?.hasError) {
            runValidationTasks("biografia", value);
          }
          setBiografia(value);
        }}
        onBlur={() => runValidationTasks("biografia", biografia)}
        errorMessage={errors.biografia?.errorMessage}
        hasError={errors.biografia?.hasError}
        {...getOverrideProps(overrides, "biografia")}
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
