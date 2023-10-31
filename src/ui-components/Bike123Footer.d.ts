/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123FooterOverridesProps = {
    Bike123Footer?: PrimitiveOverrideProps<FlexProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    Bike123?: PrimitiveOverrideProps<TextProps>;
    "\u00A9 Copyright 2023. CNPJ 27.631.651/0001-36 BIKE123 TECNOLOGIA LTDA"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123FooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: Bike123FooterOverridesProps | undefined | null;
}>;
export default function Bike123Footer(props: Bike123FooterProps): React.ReactElement;
