/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type Bike123AdminNavBarOverridesProps = {
    Bike123AdminNavBar?: PrimitiveOverrideProps<FlexProps>;
    Bike123?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Bike123AdminNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    logged?: "false" | "true";
} & {
    overrides?: Bike123AdminNavBarOverridesProps | undefined | null;
}>;
export default function Bike123AdminNavBar(props: Bike123AdminNavBarProps): React.ReactElement;
