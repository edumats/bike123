/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Mecanico } from "../models";
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
export declare type Bike123AdminMechanicCardOverridesProps = {
    Bike123AdminMechanicCard?: PrimitiveOverrideProps<FlexProps>;
    "Card Contents"?: PrimitiveOverrideProps<FlexProps>;
    MechanicName?: PrimitiveOverrideProps<TextProps>;
    MechanicEmail?: PrimitiveOverrideProps<TextProps>;
    MechanicPhone?: PrimitiveOverrideProps<TextProps>;
    MechanicCityState?: PrimitiveOverrideProps<FlexProps>;
    "S\u00E3o Paulo"?: PrimitiveOverrideProps<TextProps>;
    SP?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123AdminMechanicCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    mecanico?: Mecanico;
} & {
    overrides?: Bike123AdminMechanicCardOverridesProps | undefined | null;
}>;
export default function Bike123AdminMechanicCard(props: Bike123AdminMechanicCardProps): React.ReactElement;
