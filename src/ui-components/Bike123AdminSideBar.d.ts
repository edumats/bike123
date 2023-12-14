/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
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
export declare type Bike123AdminSideBarOverridesProps = {
    Bike123AdminSideBar?: PrimitiveOverrideProps<FlexProps>;
    Servicos?: PrimitiveOverrideProps<ButtonProps>;
    "Servicos Customizados"?: PrimitiveOverrideProps<ButtonProps>;
    Lojistas?: PrimitiveOverrideProps<ButtonProps>;
    Mecanicos?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Bike123AdminSideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Bike123AdminSideBarOverridesProps | undefined | null;
}>;
export default function Bike123AdminSideBar(props: Bike123AdminSideBarProps): React.ReactElement;
