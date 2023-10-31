/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServicoCreateFormInputValues = {
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
export declare type ServicoCreateFormValidationValues = {
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
export declare type ServicoCreateFormOverridesProps = {
    ServicoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ServicoCreateFormProps = React.PropsWithChildren<{
    overrides?: ServicoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServicoCreateFormInputValues) => ServicoCreateFormInputValues;
    onSuccess?: (fields: ServicoCreateFormInputValues) => void;
    onError?: (fields: ServicoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServicoCreateFormInputValues) => ServicoCreateFormInputValues;
    onValidate?: ServicoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServicoCreateForm(props: ServicoCreateFormProps): React.ReactElement;
