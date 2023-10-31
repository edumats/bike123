/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LojistaCreateFormInputValues = {
    cnpj?: string;
    razao_social?: string;
    nome_fantasia?: string;
    nome_responsavel?: string;
    email?: string;
    telefone?: string;
};
export declare type LojistaCreateFormValidationValues = {
    cnpj?: ValidationFunction<string>;
    razao_social?: ValidationFunction<string>;
    nome_fantasia?: ValidationFunction<string>;
    nome_responsavel?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LojistaCreateFormOverridesProps = {
    LojistaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cnpj?: PrimitiveOverrideProps<TextFieldProps>;
    razao_social?: PrimitiveOverrideProps<TextFieldProps>;
    nome_fantasia?: PrimitiveOverrideProps<TextFieldProps>;
    nome_responsavel?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telefone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LojistaCreateFormProps = React.PropsWithChildren<{
    overrides?: LojistaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LojistaCreateFormInputValues) => LojistaCreateFormInputValues;
    onSuccess?: (fields: LojistaCreateFormInputValues) => void;
    onError?: (fields: LojistaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LojistaCreateFormInputValues) => LojistaCreateFormInputValues;
    onValidate?: LojistaCreateFormValidationValues;
} & React.CSSProperties>;
export default function LojistaCreateForm(props: LojistaCreateFormProps): React.ReactElement;
