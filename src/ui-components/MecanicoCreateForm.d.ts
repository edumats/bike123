/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MecanicoCreateFormInputValues = {
    nome?: string;
    email?: string;
    celular?: string;
    telefone?: string;
    facebook?: string;
    instagram?: string;
    cnh?: string;
    imagem_cnh?: string;
    biografia?: string;
    cep?: string;
    Endereco?: string;
    Numero?: string;
    Complemento?: string;
    Bairro?: string;
    Cidade?: string;
    Estado?: string;
    Referencia?: string;
};
export declare type MecanicoCreateFormValidationValues = {
    nome?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    celular?: ValidationFunction<string>;
    telefone?: ValidationFunction<string>;
    facebook?: ValidationFunction<string>;
    instagram?: ValidationFunction<string>;
    cnh?: ValidationFunction<string>;
    imagem_cnh?: ValidationFunction<string>;
    biografia?: ValidationFunction<string>;
    cep?: ValidationFunction<string>;
    Endereco?: ValidationFunction<string>;
    Numero?: ValidationFunction<string>;
    Complemento?: ValidationFunction<string>;
    Bairro?: ValidationFunction<string>;
    Cidade?: ValidationFunction<string>;
    Estado?: ValidationFunction<string>;
    Referencia?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MecanicoCreateFormOverridesProps = {
    MecanicoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    celular?: PrimitiveOverrideProps<TextFieldProps>;
    telefone?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
    instagram?: PrimitiveOverrideProps<TextFieldProps>;
    cnh?: PrimitiveOverrideProps<TextFieldProps>;
    imagem_cnh?: PrimitiveOverrideProps<TextFieldProps>;
    biografia?: PrimitiveOverrideProps<TextFieldProps>;
    cep?: PrimitiveOverrideProps<TextFieldProps>;
    Endereco?: PrimitiveOverrideProps<TextFieldProps>;
    Numero?: PrimitiveOverrideProps<TextFieldProps>;
    Complemento?: PrimitiveOverrideProps<TextFieldProps>;
    Bairro?: PrimitiveOverrideProps<TextFieldProps>;
    Cidade?: PrimitiveOverrideProps<TextFieldProps>;
    Estado?: PrimitiveOverrideProps<SelectFieldProps>;
    Referencia?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MecanicoCreateFormProps = React.PropsWithChildren<{
    overrides?: MecanicoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MecanicoCreateFormInputValues) => MecanicoCreateFormInputValues;
    onSuccess?: (fields: MecanicoCreateFormInputValues) => void;
    onError?: (fields: MecanicoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MecanicoCreateFormInputValues) => MecanicoCreateFormInputValues;
    onValidate?: MecanicoCreateFormValidationValues;
} & React.CSSProperties>;
export default function MecanicoCreateForm(props: MecanicoCreateFormProps): React.ReactElement;
