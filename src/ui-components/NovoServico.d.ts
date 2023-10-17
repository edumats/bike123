/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, RadioGroupFieldProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NovoServicoInputValues = {
    tipo?: string;
    cliente_nome?: string;
    cep?: string;
    observacoes?: string;
    cidade?: string;
    cliente_telefone?: string;
    bairro?: string;
    estado?: string;
    referencia?: string;
    bike_marca_modelo?: string;
    numero?: string;
    complemento?: string;
    endereco?: string;
    cliente_email?: string;
};
export declare type NovoServicoValidationValues = {
    tipo?: ValidationFunction<string>;
    cliente_nome?: ValidationFunction<string>;
    cep?: ValidationFunction<string>;
    observacoes?: ValidationFunction<string>;
    cidade?: ValidationFunction<string>;
    cliente_telefone?: ValidationFunction<string>;
    bairro?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    referencia?: ValidationFunction<string>;
    bike_marca_modelo?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    complemento?: ValidationFunction<string>;
    endereco?: ValidationFunction<string>;
    cliente_email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NovoServicoOverridesProps = {
    NovoServicoGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    tipo?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    cliente_nome?: PrimitiveOverrideProps<TextFieldProps>;
    cep?: PrimitiveOverrideProps<TextFieldProps>;
    observacoes?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<DividerProps>;
    cidade?: PrimitiveOverrideProps<TextFieldProps>;
    cliente_telefone?: PrimitiveOverrideProps<TextFieldProps>;
    bairro?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SelectFieldProps>;
    referencia?: PrimitiveOverrideProps<TextFieldProps>;
    bike_marca_modelo?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    complemento?: PrimitiveOverrideProps<TextFieldProps>;
    endereco?: PrimitiveOverrideProps<TextFieldProps>;
    cliente_email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NovoServicoProps = React.PropsWithChildren<{
    overrides?: NovoServicoOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NovoServicoInputValues) => NovoServicoInputValues;
    onSuccess?: (fields: NovoServicoInputValues) => void;
    onError?: (fields: NovoServicoInputValues, errorMessage: string) => void;
    onChange?: (fields: NovoServicoInputValues) => NovoServicoInputValues;
    onValidate?: NovoServicoValidationValues;
} & React.CSSProperties>;
export default function NovoServico(props: NovoServicoProps): React.ReactElement;
