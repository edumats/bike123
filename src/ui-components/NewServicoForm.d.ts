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
export declare type NewServicoFormInputValues = {
    tipo?: string;
    cliente_nome?: string;
    bike_marca_modelo?: string;
    cliente_email?: string;
    cep?: string;
    endereco?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    referencia?: string;
    observacoes?: string;
    cliente_telefone?: string;
};
export declare type NewServicoFormValidationValues = {
    tipo?: ValidationFunction<string>;
    cliente_nome?: ValidationFunction<string>;
    bike_marca_modelo?: ValidationFunction<string>;
    cliente_email?: ValidationFunction<string>;
    cep?: ValidationFunction<string>;
    endereco?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
    complemento?: ValidationFunction<string>;
    bairro?: ValidationFunction<string>;
    cidade?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    referencia?: ValidationFunction<string>;
    observacoes?: ValidationFunction<string>;
    cliente_telefone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewServicoFormOverridesProps = {
    NewServicoFormGrid?: PrimitiveOverrideProps<GridProps>;
    tipo?: PrimitiveOverrideProps<SelectFieldProps>;
    cliente_nome?: PrimitiveOverrideProps<TextFieldProps>;
    bike_marca_modelo?: PrimitiveOverrideProps<TextFieldProps>;
    cliente_email?: PrimitiveOverrideProps<TextFieldProps>;
    cep?: PrimitiveOverrideProps<TextFieldProps>;
    endereco?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
    complemento?: PrimitiveOverrideProps<TextFieldProps>;
    bairro?: PrimitiveOverrideProps<TextFieldProps>;
    cidade?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SelectFieldProps>;
    referencia?: PrimitiveOverrideProps<TextFieldProps>;
    observacoes?: PrimitiveOverrideProps<TextFieldProps>;
    cliente_telefone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewServicoFormProps = React.PropsWithChildren<{
    overrides?: NewServicoFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewServicoFormInputValues) => NewServicoFormInputValues;
    onSuccess?: (fields: NewServicoFormInputValues) => void;
    onError?: (fields: NewServicoFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewServicoFormInputValues) => NewServicoFormInputValues;
    onValidate?: NewServicoFormValidationValues;
} & React.CSSProperties>;
export default function NewServicoForm(props: NewServicoFormProps): React.ReactElement;
