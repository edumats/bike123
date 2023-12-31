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
  TextField,
} from "@aws-amplify/ui-react";
import { Servico } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ServicoCreateForm(props) {
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
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    referencia: "",
    observacoes: "",
    tipo: "",
    bike_marca_modelo: "",
    cliente_email: "",
    cliente_telefone: "",
    cliente_nome: "",
  };
  const [cep, setCep] = React.useState(initialValues.cep);
  const [endereco, setEndereco] = React.useState(initialValues.endereco);
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [complemento, setComplemento] = React.useState(
    initialValues.complemento
  );
  const [bairro, setBairro] = React.useState(initialValues.bairro);
  const [cidade, setCidade] = React.useState(initialValues.cidade);
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [referencia, setReferencia] = React.useState(initialValues.referencia);
  const [observacoes, setObservacoes] = React.useState(
    initialValues.observacoes
  );
  const [tipo, setTipo] = React.useState(initialValues.tipo);
  const [bike_marca_modelo, setBike_marca_modelo] = React.useState(
    initialValues.bike_marca_modelo
  );
  const [cliente_email, setCliente_email] = React.useState(
    initialValues.cliente_email
  );
  const [cliente_telefone, setCliente_telefone] = React.useState(
    initialValues.cliente_telefone
  );
  const [cliente_nome, setCliente_nome] = React.useState(
    initialValues.cliente_nome
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCep(initialValues.cep);
    setEndereco(initialValues.endereco);
    setNumero(initialValues.numero);
    setComplemento(initialValues.complemento);
    setBairro(initialValues.bairro);
    setCidade(initialValues.cidade);
    setEstado(initialValues.estado);
    setReferencia(initialValues.referencia);
    setObservacoes(initialValues.observacoes);
    setTipo(initialValues.tipo);
    setBike_marca_modelo(initialValues.bike_marca_modelo);
    setCliente_email(initialValues.cliente_email);
    setCliente_telefone(initialValues.cliente_telefone);
    setCliente_nome(initialValues.cliente_nome);
    setErrors({});
  };
  const validations = {
    cep: [{ type: "Required" }],
    endereco: [{ type: "Required" }],
    numero: [{ type: "Required" }],
    complemento: [],
    bairro: [{ type: "Required" }],
    cidade: [{ type: "Required" }],
    estado: [{ type: "Required" }],
    referencia: [],
    observacoes: [],
    tipo: [{ type: "Required" }],
    bike_marca_modelo: [{ type: "Required" }],
    cliente_email: [{ type: "Required" }, { type: "Email" }],
    cliente_telefone: [{ type: "Required" }],
    cliente_nome: [],
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
          cep,
          endereco,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          referencia,
          observacoes,
          tipo,
          bike_marca_modelo,
          cliente_email,
          cliente_telefone,
          cliente_nome,
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
          await DataStore.save(new Servico(modelFields));
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
      {...getOverrideProps(overrides, "ServicoCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Cep</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={cep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep: value,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
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
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Endereço</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={endereco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco: value,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.endereco ?? value;
          }
          if (errors.endereco?.hasError) {
            runValidationTasks("endereco", value);
          }
          setEndereco(value);
        }}
        onBlur={() => runValidationTasks("endereco", endereco)}
        errorMessage={errors.endereco?.errorMessage}
        hasError={errors.endereco?.hasError}
        {...getOverrideProps(overrides, "endereco")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Número</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero: value,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.numero ?? value;
          }
          if (errors.numero?.hasError) {
            runValidationTasks("numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("numero", numero)}
        errorMessage={errors.numero?.errorMessage}
        hasError={errors.numero?.hasError}
        {...getOverrideProps(overrides, "numero")}
      ></TextField>
      <TextField
        label="Complemento"
        isRequired={false}
        isReadOnly={false}
        value={complemento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento: value,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.complemento ?? value;
          }
          if (errors.complemento?.hasError) {
            runValidationTasks("complemento", value);
          }
          setComplemento(value);
        }}
        onBlur={() => runValidationTasks("complemento", complemento)}
        errorMessage={errors.complemento?.errorMessage}
        hasError={errors.complemento?.hasError}
        {...getOverrideProps(overrides, "complemento")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Bairro</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={bairro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro: value,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.bairro ?? value;
          }
          if (errors.bairro?.hasError) {
            runValidationTasks("bairro", value);
          }
          setBairro(value);
        }}
        onBlur={() => runValidationTasks("bairro", bairro)}
        errorMessage={errors.bairro?.errorMessage}
        hasError={errors.bairro?.hasError}
        {...getOverrideProps(overrides, "bairro")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Cidade</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={cidade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade: value,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.cidade ?? value;
          }
          if (errors.cidade?.hasError) {
            runValidationTasks("cidade", value);
          }
          setCidade(value);
        }}
        onBlur={() => runValidationTasks("cidade", cidade)}
        errorMessage={errors.cidade?.errorMessage}
        hasError={errors.cidade?.hasError}
        {...getOverrideProps(overrides, "cidade")}
      ></TextField>
      <SelectField
        label="Estado"
        placeholder="Escolha um Estado"
        isDisabled={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado: value,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.estado ?? value;
          }
          if (errors.estado?.hasError) {
            runValidationTasks("estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("estado", estado)}
        errorMessage={errors.estado?.errorMessage}
        hasError={errors.estado?.hasError}
        {...getOverrideProps(overrides, "estado")}
      >
        <option
          children="Acre"
          value="AC"
          {...getOverrideProps(overrides, "estadooption0")}
        ></option>
        <option
          children="Alagoas"
          value="AL"
          {...getOverrideProps(overrides, "estadooption1")}
        ></option>
        <option
          children="Amazonas"
          value="AM"
          {...getOverrideProps(overrides, "estadooption2")}
        ></option>
        <option
          children="Bahia"
          value="BA"
          {...getOverrideProps(overrides, "estadooption3")}
        ></option>
        <option
          children="Ceará"
          value="CE"
          {...getOverrideProps(overrides, "estadooption4")}
        ></option>
        <option
          children="Distrito Federal"
          value="DF"
          {...getOverrideProps(overrides, "estadooption5")}
        ></option>
        <option
          children="Espírito Santo"
          value="ES"
          {...getOverrideProps(overrides, "estadooption6")}
        ></option>
        <option
          children="Goiás"
          value="GO"
          {...getOverrideProps(overrides, "estadooption7")}
        ></option>
        <option
          children="Maranhão"
          value="MA"
          {...getOverrideProps(overrides, "estadooption8")}
        ></option>
        <option
          children="Mato Grosso"
          value="MT"
          {...getOverrideProps(overrides, "estadooption9")}
        ></option>
        <option
          children="Mato Grosso do Sul"
          value="MS"
          {...getOverrideProps(overrides, "estadooption10")}
        ></option>
        <option
          children="Minas Gerais"
          value="MG"
          {...getOverrideProps(overrides, "estadooption11")}
        ></option>
        <option
          children="Pará"
          value="PA"
          {...getOverrideProps(overrides, "estadooption12")}
        ></option>
        <option
          children="Paraíba"
          value="PB"
          {...getOverrideProps(overrides, "estadooption13")}
        ></option>
        <option
          children="Paraná"
          value="PR"
          {...getOverrideProps(overrides, "estadooption14")}
        ></option>
        <option
          children="Pernambuco"
          value="PE"
          {...getOverrideProps(overrides, "estadooption15")}
        ></option>
        <option
          children="Piauí"
          value="PI"
          {...getOverrideProps(overrides, "estadooption16")}
        ></option>
        <option
          children="Rio de Janeiro"
          value="RJ"
          {...getOverrideProps(overrides, "estadooption17")}
        ></option>
        <option
          children="Rio Grande do Norte"
          value="RN"
          {...getOverrideProps(overrides, "estadooption18")}
        ></option>
        <option
          children="Rio Grande do Sul"
          value="RS"
          {...getOverrideProps(overrides, "estadooption19")}
        ></option>
        <option
          children="Rondônia"
          value="RO"
          {...getOverrideProps(overrides, "estadooption20")}
        ></option>
        <option
          children="Roraima"
          value="RR"
          {...getOverrideProps(overrides, "estadooption21")}
        ></option>
        <option
          children="Santa Catarina"
          value="SC"
          {...getOverrideProps(overrides, "estadooption22")}
        ></option>
        <option
          children="São Paulo"
          value="SP"
          {...getOverrideProps(overrides, "estadooption23")}
        ></option>
        <option
          children="Sergipe"
          value="SE"
          {...getOverrideProps(overrides, "estadooption24")}
        ></option>
        <option
          children="Tocantins"
          value="TO"
          {...getOverrideProps(overrides, "estadooption25")}
        ></option>
      </SelectField>
      <TextField
        label="Referência"
        isRequired={false}
        isReadOnly={false}
        value={referencia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia: value,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.referencia ?? value;
          }
          if (errors.referencia?.hasError) {
            runValidationTasks("referencia", value);
          }
          setReferencia(value);
        }}
        onBlur={() => runValidationTasks("referencia", referencia)}
        errorMessage={errors.referencia?.errorMessage}
        hasError={errors.referencia?.hasError}
        {...getOverrideProps(overrides, "referencia")}
      ></TextField>
      <TextField
        label="Observações"
        isRequired={false}
        isReadOnly={false}
        value={observacoes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes: value,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.observacoes ?? value;
          }
          if (errors.observacoes?.hasError) {
            runValidationTasks("observacoes", value);
          }
          setObservacoes(value);
        }}
        onBlur={() => runValidationTasks("observacoes", observacoes)}
        errorMessage={errors.observacoes?.errorMessage}
        hasError={errors.observacoes?.hasError}
        {...getOverrideProps(overrides, "observacoes")}
      ></TextField>
      <SelectField
        label="Tipo"
        placeholder="Selecione um tipo de Serviço"
        isDisabled={false}
        value={tipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo: value,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.tipo ?? value;
          }
          if (errors.tipo?.hasError) {
            runValidationTasks("tipo", value);
          }
          setTipo(value);
        }}
        onBlur={() => runValidationTasks("tipo", tipo)}
        errorMessage={errors.tipo?.errorMessage}
        hasError={errors.tipo?.hasError}
        {...getOverrideProps(overrides, "tipo")}
      >
        <option
          children="Montagem bike nova"
          value="MONTAGEM_BIKE_NOVA"
          {...getOverrideProps(overrides, "tipooption0")}
        ></option>
        <option
          children="Montagem bike ergometrica"
          value="MONTAGEM_BIKE_ERGOMETRICA"
          {...getOverrideProps(overrides, "tipooption1")}
        ></option>
        <option
          children="Revisao expert"
          value="REVISAO_EXPERT"
          {...getOverrideProps(overrides, "tipooption2")}
        ></option>
        <option
          children="Servico select"
          value="SERVICO_SELECT"
          {...getOverrideProps(overrides, "tipooption3")}
        ></option>
        <option
          children="Pneu furado convencional"
          value="PNEU_FURADO_CONVENCIONAL"
          {...getOverrideProps(overrides, "tipooption4")}
        ></option>
        <option
          children="Pneu furado eletrica"
          value="PNEU_FURADO_ELETRICA"
          {...getOverrideProps(overrides, "tipooption5")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Bike marca modelo</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={bike_marca_modelo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo: value,
              cliente_email,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.bike_marca_modelo ?? value;
          }
          if (errors.bike_marca_modelo?.hasError) {
            runValidationTasks("bike_marca_modelo", value);
          }
          setBike_marca_modelo(value);
        }}
        onBlur={() =>
          runValidationTasks("bike_marca_modelo", bike_marca_modelo)
        }
        errorMessage={errors.bike_marca_modelo?.errorMessage}
        hasError={errors.bike_marca_modelo?.hasError}
        {...getOverrideProps(overrides, "bike_marca_modelo")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Cliente email</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={cliente_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email: value,
              cliente_telefone,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.cliente_email ?? value;
          }
          if (errors.cliente_email?.hasError) {
            runValidationTasks("cliente_email", value);
          }
          setCliente_email(value);
        }}
        onBlur={() => runValidationTasks("cliente_email", cliente_email)}
        errorMessage={errors.cliente_email?.errorMessage}
        hasError={errors.cliente_email?.hasError}
        {...getOverrideProps(overrides, "cliente_email")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Cliente telefone</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={cliente_telefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone: value,
              cliente_nome,
            };
            const result = onChange(modelFields);
            value = result?.cliente_telefone ?? value;
          }
          if (errors.cliente_telefone?.hasError) {
            runValidationTasks("cliente_telefone", value);
          }
          setCliente_telefone(value);
        }}
        onBlur={() => runValidationTasks("cliente_telefone", cliente_telefone)}
        errorMessage={errors.cliente_telefone?.errorMessage}
        hasError={errors.cliente_telefone?.hasError}
        {...getOverrideProps(overrides, "cliente_telefone")}
      ></TextField>
      <TextField
        label="Cliente nome"
        isRequired={false}
        isReadOnly={false}
        value={cliente_nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
              tipo,
              bike_marca_modelo,
              cliente_email,
              cliente_telefone,
              cliente_nome: value,
            };
            const result = onChange(modelFields);
            value = result?.cliente_nome ?? value;
          }
          if (errors.cliente_nome?.hasError) {
            runValidationTasks("cliente_nome", value);
          }
          setCliente_nome(value);
        }}
        onBlur={() => runValidationTasks("cliente_nome", cliente_nome)}
        errorMessage={errors.cliente_nome?.errorMessage}
        hasError={errors.cliente_nome?.hasError}
        {...getOverrideProps(overrides, "cliente_nome")}
      ></TextField>
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
