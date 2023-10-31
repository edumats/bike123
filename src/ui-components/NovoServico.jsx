/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Radio,
  RadioGroupField,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { Servico } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NovoServico(props) {
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
    tipo: undefined,
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    referencia: "",
    bike_marca_modelo: "",
    observacoes: "",
    cliente_nome: "",
    cliente_email: "",
    cliente_telefone: "",
  };
  const [tipo, setTipo] = React.useState(initialValues.tipo);
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
  const [bike_marca_modelo, setBike_marca_modelo] = React.useState(
    initialValues.bike_marca_modelo
  );
  const [observacoes, setObservacoes] = React.useState(
    initialValues.observacoes
  );
  const [cliente_nome, setCliente_nome] = React.useState(
    initialValues.cliente_nome
  );
  const [cliente_email, setCliente_email] = React.useState(
    initialValues.cliente_email
  );
  const [cliente_telefone, setCliente_telefone] = React.useState(
    initialValues.cliente_telefone
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTipo(initialValues.tipo);
    setCep(initialValues.cep);
    setEndereco(initialValues.endereco);
    setNumero(initialValues.numero);
    setComplemento(initialValues.complemento);
    setBairro(initialValues.bairro);
    setCidade(initialValues.cidade);
    setEstado(initialValues.estado);
    setReferencia(initialValues.referencia);
    setBike_marca_modelo(initialValues.bike_marca_modelo);
    setObservacoes(initialValues.observacoes);
    setCliente_nome(initialValues.cliente_nome);
    setCliente_email(initialValues.cliente_email);
    setCliente_telefone(initialValues.cliente_telefone);
    setErrors({});
  };
  const validations = {
    tipo: [{ type: "Required" }],
    cep: [{ type: "Required" }],
    endereco: [{ type: "Required" }],
    numero: [{ type: "Required" }],
    complemento: [],
    bairro: [{ type: "Required" }],
    cidade: [{ type: "Required" }],
    estado: [{ type: "Required" }],
    referencia: [],
    bike_marca_modelo: [{ type: "Required" }],
    observacoes: [],
    cliente_nome: [],
    cliente_email: [{ type: "Required" }, { type: "Email" }],
    cliente_telefone: [{ type: "Required" }],
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
          tipo,
          cep,
          endereco,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          referencia,
          bike_marca_modelo,
          observacoes,
          cliente_nome,
          cliente_email,
          cliente_telefone,
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
      {...getOverrideProps(overrides, "NovoServico")}
      {...rest}
    >
      <Heading
        level={3}
        children="Solicitação de Serviço"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <RadioGroupField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Tipo de serviço</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        name="tipo"
        isReadOnly={false}
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo: value,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
        <Radio
          children="Montagem Bike Nova"
          value="MONTAGEM_BIKE_NOVA"
          {...getOverrideProps(overrides, "tipoRadio0")}
        ></Radio>
        <Radio
          children="Montagem Bike Ergométrica"
          value="MONTAGEM_BIKE_ERGOMETRICA"
          {...getOverrideProps(overrides, "tipoRadio1")}
        ></Radio>
        <Radio
          children="Revisão Expert"
          value="REVISAO_EXPERT"
          {...getOverrideProps(overrides, "tipoRadio2")}
        ></Radio>
        <Radio
          children="Serviço Select"
          value="SERVICO_SELECT"
          {...getOverrideProps(overrides, "tipoRadio3")}
        ></Radio>
        <Radio
          children="Pneu Furado Bike Convencional"
          value="PNEU_FURADO_CONVENCIONAL"
          {...getOverrideProps(overrides, "tipoRadio4")}
        ></Radio>
        <Radio
          children="Pneu Furado Bike Elétrica"
          value="PNEU_FURADO_ELETRICA"
          {...getOverrideProps(overrides, "tipoRadio5")}
        ></Radio>
      </RadioGroupField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Divider>
      <Heading
        level={5}
        children="Onde realizaremos o serviço?"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>CEP</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="CEP de onde será realizado o serviço"
        value={cep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep: value,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
        placeholder="Endereço de onde será realizado o serviço"
        value={endereco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco: value,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
              tipo,
              cep,
              endereco,
              numero: value,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
        placeholder="Número do apartamento, casa, bloco"
        value={complemento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco,
              numero,
              complemento: value,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro: value,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade: value,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
        placeholder="Selecione uma opção"
        isDisabled={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado: value,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
          children="AC"
          value="AC"
          {...getOverrideProps(overrides, "estadooption0")}
        ></option>
        <option
          children="AL"
          value="AL"
          {...getOverrideProps(overrides, "estadooption1")}
        ></option>
        <option
          children="AM"
          value="AM"
          {...getOverrideProps(overrides, "estadooption2")}
        ></option>
        <option
          children="BA"
          value="BA"
          {...getOverrideProps(overrides, "estadooption3")}
        ></option>
        <option
          children="CE"
          value="CE"
          {...getOverrideProps(overrides, "estadooption4")}
        ></option>
        <option
          children="DF"
          value="DF"
          {...getOverrideProps(overrides, "estadooption5")}
        ></option>
        <option
          children="ES"
          value="ES"
          {...getOverrideProps(overrides, "estadooption6")}
        ></option>
        <option
          children="GO"
          value="GO"
          {...getOverrideProps(overrides, "estadooption7")}
        ></option>
        <option
          children="MA"
          value="MA"
          {...getOverrideProps(overrides, "estadooption8")}
        ></option>
        <option
          children="MT"
          value="MT"
          {...getOverrideProps(overrides, "estadooption9")}
        ></option>
        <option
          children="MS"
          value="MS"
          {...getOverrideProps(overrides, "estadooption10")}
        ></option>
        <option
          children="MG"
          value="MG"
          {...getOverrideProps(overrides, "estadooption11")}
        ></option>
        <option
          children="PA"
          value="PA"
          {...getOverrideProps(overrides, "estadooption12")}
        ></option>
        <option
          children="PB"
          value="PB"
          {...getOverrideProps(overrides, "estadooption13")}
        ></option>
        <option
          children="PR"
          value="PR"
          {...getOverrideProps(overrides, "estadooption14")}
        ></option>
        <option
          children="PE"
          value="PE"
          {...getOverrideProps(overrides, "estadooption15")}
        ></option>
        <option
          children="PI"
          value="PI"
          {...getOverrideProps(overrides, "estadooption16")}
        ></option>
        <option
          children="RJ"
          value="RJ"
          {...getOverrideProps(overrides, "estadooption17")}
        ></option>
        <option
          children="RN"
          value="RN"
          {...getOverrideProps(overrides, "estadooption18")}
        ></option>
        <option
          children="RS"
          value="RS"
          {...getOverrideProps(overrides, "estadooption19")}
        ></option>
        <option
          children="RO"
          value="RO"
          {...getOverrideProps(overrides, "estadooption20")}
        ></option>
        <option
          children="RR"
          value="RR"
          {...getOverrideProps(overrides, "estadooption21")}
        ></option>
        <option
          children="SC"
          value="SC"
          {...getOverrideProps(overrides, "estadooption22")}
        ></option>
        <option
          children="SP"
          value="SP"
          {...getOverrideProps(overrides, "estadooption23")}
        ></option>
        <option
          children="SE"
          value="SE"
          {...getOverrideProps(overrides, "estadooption24")}
        ></option>
        <option
          children="TO"
          value="TO"
          {...getOverrideProps(overrides, "estadooption25")}
        ></option>
      </SelectField>
      <TextField
        label="Referência"
        isRequired={false}
        isReadOnly={false}
        placeholder="Ex: Próximo à Rua Exemplo"
        value={referencia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia: value,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Divider>
      <Heading
        children="Dados da bicicleta"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Marca e modelo da bicicleta</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="Caloi Urban 700"
        value={bike_marca_modelo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo: value,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
      <TextAreaField
        label="Observações"
        isRequired={false}
        isReadOnly={false}
        placeholder="Adicione comentários que são importantes para nós ou para o técnico"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes: value,
              cliente_nome,
              cliente_email,
              cliente_telefone,
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
      ></TextAreaField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Divider>
      <Heading
        children="Dados de quem irá receber o técnico"
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Heading>
      <TextField
        label="Nome"
        isRequired={false}
        isReadOnly={false}
        placeholder="Nome de quem irá receber o técnico"
        value={cliente_nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome: value,
              cliente_email,
              cliente_telefone,
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
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>E-mail</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="Seu e-mail"
        value={cliente_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email: value,
              cliente_telefone,
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
            <span>Telefone</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="(DDD) 12345-6789"
        value={cliente_telefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              bike_marca_modelo,
              observacoes,
              cliente_nome,
              cliente_email,
              cliente_telefone: value,
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
