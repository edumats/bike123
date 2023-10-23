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
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Servico } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NewServicoForm(props) {
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
    tipo: "",
    cliente_nome: "",
    bike_marca_modelo: "",
    cliente_email: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    referencia: "",
    observacoes: "",
    cliente_telefone: "",
  };
  const [tipo, setTipo] = React.useState(initialValues.tipo);
  const [cliente_nome, setCliente_nome] = React.useState(
    initialValues.cliente_nome
  );
  const [bike_marca_modelo, setBike_marca_modelo] = React.useState(
    initialValues.bike_marca_modelo
  );
  const [cliente_email, setCliente_email] = React.useState(
    initialValues.cliente_email
  );
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
  const [cliente_telefone, setCliente_telefone] = React.useState(
    initialValues.cliente_telefone
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTipo(initialValues.tipo);
    setCliente_nome(initialValues.cliente_nome);
    setBike_marca_modelo(initialValues.bike_marca_modelo);
    setCliente_email(initialValues.cliente_email);
    setCep(initialValues.cep);
    setEndereco(initialValues.endereco);
    setNumero(initialValues.numero);
    setComplemento(initialValues.complemento);
    setBairro(initialValues.bairro);
    setCidade(initialValues.cidade);
    setEstado(initialValues.estado);
    setReferencia(initialValues.referencia);
    setObservacoes(initialValues.observacoes);
    setCliente_telefone(initialValues.cliente_telefone);
    setErrors({});
  };
  const validations = {
    tipo: [{ type: "Required" }],
    cliente_nome: [],
    bike_marca_modelo: [{ type: "Required" }],
    cliente_email: [{ type: "Required" }, { type: "Email" }],
    cep: [{ type: "Required" }],
    endereco: [{ type: "Required" }],
    numero: [{ type: "Required" }],
    complemento: [],
    bairro: [{ type: "Required" }],
    cidade: [{ type: "Required" }],
    estado: [{ type: "Required" }],
    referencia: [],
    observacoes: [],
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
          cliente_nome,
          bike_marca_modelo,
          cliente_email,
          cep,
          endereco,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          referencia,
          observacoes,
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
      {...getOverrideProps(overrides, "NewServicoForm")}
      {...rest}
    >
      <SelectField
        label="Tipo"
        placeholder="Please select an option"
        isDisabled={false}
        value={tipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo: value,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
        label="Cliente nome"
        isRequired={false}
        isReadOnly={false}
        value={cliente_nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome: value,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
        label="Bike marca modelo"
        isRequired={true}
        isReadOnly={false}
        value={bike_marca_modelo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo: value,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
      <TextField
        label="Cliente email"
        isRequired={true}
        isReadOnly={false}
        value={cliente_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email: value,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
        label="Cep"
        isRequired={true}
        isReadOnly={false}
        value={cep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep: value,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
        label="Endereco"
        isRequired={true}
        isReadOnly={false}
        value={endereco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco: value,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
        label="Numero"
        isRequired={true}
        isReadOnly={false}
        value={numero}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero: value,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
        value={complemento}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento: value,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
        label="Bairro"
        isRequired={true}
        isReadOnly={false}
        value={bairro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro: value,
              cidade,
              estado,
              referencia,
              observacoes,
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
        label="Cidade"
        isRequired={true}
        isReadOnly={false}
        value={cidade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade: value,
              estado,
              referencia,
              observacoes,
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
        placeholder="Please select an option"
        isDisabled={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado: value,
              referencia,
              observacoes,
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
          children="Ac"
          value="AC"
          {...getOverrideProps(overrides, "estadooption0")}
        ></option>
        <option
          children="Al"
          value="AL"
          {...getOverrideProps(overrides, "estadooption1")}
        ></option>
        <option
          children="Am"
          value="AM"
          {...getOverrideProps(overrides, "estadooption2")}
        ></option>
        <option
          children="Ba"
          value="BA"
          {...getOverrideProps(overrides, "estadooption3")}
        ></option>
        <option
          children="Ce"
          value="CE"
          {...getOverrideProps(overrides, "estadooption4")}
        ></option>
        <option
          children="Df"
          value="DF"
          {...getOverrideProps(overrides, "estadooption5")}
        ></option>
        <option
          children="Es"
          value="ES"
          {...getOverrideProps(overrides, "estadooption6")}
        ></option>
        <option
          children="Go"
          value="GO"
          {...getOverrideProps(overrides, "estadooption7")}
        ></option>
        <option
          children="Ma"
          value="MA"
          {...getOverrideProps(overrides, "estadooption8")}
        ></option>
        <option
          children="Mt"
          value="MT"
          {...getOverrideProps(overrides, "estadooption9")}
        ></option>
        <option
          children="Ms"
          value="MS"
          {...getOverrideProps(overrides, "estadooption10")}
        ></option>
        <option
          children="Mg"
          value="MG"
          {...getOverrideProps(overrides, "estadooption11")}
        ></option>
        <option
          children="Pa"
          value="PA"
          {...getOverrideProps(overrides, "estadooption12")}
        ></option>
        <option
          children="Pb"
          value="PB"
          {...getOverrideProps(overrides, "estadooption13")}
        ></option>
        <option
          children="Pr"
          value="PR"
          {...getOverrideProps(overrides, "estadooption14")}
        ></option>
        <option
          children="Pe"
          value="PE"
          {...getOverrideProps(overrides, "estadooption15")}
        ></option>
        <option
          children="Pi"
          value="PI"
          {...getOverrideProps(overrides, "estadooption16")}
        ></option>
        <option
          children="Rj"
          value="RJ"
          {...getOverrideProps(overrides, "estadooption17")}
        ></option>
        <option
          children="Rn"
          value="RN"
          {...getOverrideProps(overrides, "estadooption18")}
        ></option>
        <option
          children="Rs"
          value="RS"
          {...getOverrideProps(overrides, "estadooption19")}
        ></option>
        <option
          children="Ro"
          value="RO"
          {...getOverrideProps(overrides, "estadooption20")}
        ></option>
        <option
          children="Rr"
          value="RR"
          {...getOverrideProps(overrides, "estadooption21")}
        ></option>
        <option
          children="Sc"
          value="SC"
          {...getOverrideProps(overrides, "estadooption22")}
        ></option>
        <option
          children="Sp"
          value="SP"
          {...getOverrideProps(overrides, "estadooption23")}
        ></option>
        <option
          children="Se"
          value="SE"
          {...getOverrideProps(overrides, "estadooption24")}
        ></option>
        <option
          children="To"
          value="TO"
          {...getOverrideProps(overrides, "estadooption25")}
        ></option>
      </SelectField>
      <TextField
        label="Referencia"
        isRequired={false}
        isReadOnly={false}
        value={referencia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia: value,
              observacoes,
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
      <TextField
        label="Observacoes"
        isRequired={false}
        isReadOnly={false}
        value={observacoes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes: value,
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
      ></TextField>
      <TextField
        label="Cliente telefone"
        isRequired={true}
        isReadOnly={false}
        value={cliente_telefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tipo,
              cliente_nome,
              bike_marca_modelo,
              cliente_email,
              cep,
              endereco,
              numero,
              complemento,
              bairro,
              cidade,
              estado,
              referencia,
              observacoes,
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
