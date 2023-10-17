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
    cliente_email?: string;
    cliente_telefone?: string;
    cep?: string;
    endereco?: string;
    numero?: string;
    cidade?: string;
    estado?: string;
    referencia?: string;
    complemento?: string;
    bairro?: string;
    bike_marca_modelo?: string;
    observacoes?: string;
    cliente_nome?: string;
};
export declare type NovoServicoValidationValues = {
    tipo?: ValidationFunction<string>;
    cliente_email?: ValidationFunction<string>;
    cliente_telefone?: ValidationFunction<string>;
    cep?: ValidationFunction<string>;
    endereco?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    cidade?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    referencia?: ValidationFunction<string>;
    complemento?: ValidationFunction<string>;
    bairro?: ValidationFunction<string>;
    bike_marca_modelo?: ValidationFunction<string>;
    observacoes?: ValidationFunction<string>;
    cliente_nome?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NovoServicoOverridesProps = {
    NovoServicoGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    tipo?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    SectionalElement4?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    cliente_email?: PrimitiveOverrideProps<TextFieldProps>;
    cliente_telefone?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    cep?: PrimitiveOverrideProps<TextFieldProps>;
    endereco?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    cidade?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SelectFieldProps>;
    referencia?: PrimitiveOverrideProps<TextFieldProps>;
    complemento?: PrimitiveOverrideProps<TextFieldProps>;
    bairro?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement6?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement5?: PrimitiveOverrideProps<HeadingProps>;
    bike_marca_modelo?: PrimitiveOverrideProps<TextFieldProps>;
    observacoes?: PrimitiveOverrideProps<TextAreaFieldProps>;
    cliente_nome?: PrimitiveOverrideProps<TextFieldProps>;
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
