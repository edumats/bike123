/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServicoCustomizadoCreateFormInputValues = {
    nome?: string;
    email?: string;
    telefone?: string;
    mensagem?: string;
};
export declare type ServicoCustomizadoCreateFormValidationValues = {
    nome?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefone?: ValidationFunction<string>;
    mensagem?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicoCustomizadoCreateFormOverridesProps = {
    ServicoCustomizadoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement1?: PrimitiveOverrideProps<TextProps>;
    SectionalElement2?: PrimitiveOverrideProps<TextProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telefone?: PrimitiveOverrideProps<TextFieldProps>;
    mensagem?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ServicoCustomizadoCreateFormProps = React.PropsWithChildren<{
    overrides?: ServicoCustomizadoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServicoCustomizadoCreateFormInputValues) => ServicoCustomizadoCreateFormInputValues;
    onSuccess?: (fields: ServicoCustomizadoCreateFormInputValues) => void;
    onError?: (fields: ServicoCustomizadoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServicoCustomizadoCreateFormInputValues) => ServicoCustomizadoCreateFormInputValues;
    onValidate?: ServicoCustomizadoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServicoCustomizadoCreateForm(props: ServicoCustomizadoCreateFormProps): React.ReactElement;
