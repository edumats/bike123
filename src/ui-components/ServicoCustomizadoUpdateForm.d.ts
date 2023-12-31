/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ServicoCustomizado } from "../models";
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
export declare type ServicoCustomizadoUpdateFormInputValues = {
    nome?: string;
    email?: string;
    telefone?: string;
    mensagem?: string;
};
export declare type ServicoCustomizadoUpdateFormValidationValues = {
    nome?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefone?: ValidationFunction<string>;
    mensagem?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServicoCustomizadoUpdateFormOverridesProps = {
    ServicoCustomizadoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telefone?: PrimitiveOverrideProps<TextFieldProps>;
    mensagem?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServicoCustomizadoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServicoCustomizadoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    servicoCustomizado?: ServicoCustomizado;
    onSubmit?: (fields: ServicoCustomizadoUpdateFormInputValues) => ServicoCustomizadoUpdateFormInputValues;
    onSuccess?: (fields: ServicoCustomizadoUpdateFormInputValues) => void;
    onError?: (fields: ServicoCustomizadoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServicoCustomizadoUpdateFormInputValues) => ServicoCustomizadoUpdateFormInputValues;
    onValidate?: ServicoCustomizadoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServicoCustomizadoUpdateForm(props: ServicoCustomizadoUpdateFormProps): React.ReactElement;
