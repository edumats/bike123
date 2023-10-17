/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Servico } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServicoUpdateFormInputValues = {
    cep?: string;
    endereco?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    referencia?: string;
    observacoes?: string;
    tipo?: string;
    bike_marca_modelo?: string;
    cliente_email?: string;
    cliente_telefone?: string;
    cliente_nome?: string;
};
export declare type ServicoUpdateFormValidationValues = {
    cep?: ValidationFunction<string>;
    endereco?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    complemento?: ValidationFunction<string>;
    bairro?: ValidationFunction<string>;
    cidade?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    referencia?: ValidationFunction<string>;
    observacoes?: ValidationFunction<string>;
    tipo?: ValidationFunction<string>;
    bike_marca_modelo?: ValidationFunction<string>;
    cliente_email?: ValidationFunction<string>;
    cliente_telefone?: ValidationFunction<string>;
    cliente_nome?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicoUpdateFormOverridesProps = {
    ServicoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cep?: PrimitiveOverrideProps<TextFieldProps>;
    endereco?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    complemento?: PrimitiveOverrideProps<TextFieldProps>;
    bairro?: PrimitiveOverrideProps<TextFieldProps>;
    cidade?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SelectFieldProps>;
    referencia?: PrimitiveOverrideProps<TextFieldProps>;
    observacoes?: PrimitiveOverrideProps<TextFieldProps>;
    tipo?: PrimitiveOverrideProps<SelectFieldProps>;
    bike_marca_modelo?: PrimitiveOverrideProps<TextFieldProps>;
    cliente_email?: PrimitiveOverrideProps<TextFieldProps>;
    cliente_telefone?: PrimitiveOverrideProps<TextFieldProps>;
    cliente_nome?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServicoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServicoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    servico?: Servico;
    onSubmit?: (fields: ServicoUpdateFormInputValues) => ServicoUpdateFormInputValues;
    onSuccess?: (fields: ServicoUpdateFormInputValues) => void;
    onError?: (fields: ServicoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServicoUpdateFormInputValues) => ServicoUpdateFormInputValues;
    onValidate?: ServicoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServicoUpdateForm(props: ServicoUpdateFormProps): React.ReactElement;
