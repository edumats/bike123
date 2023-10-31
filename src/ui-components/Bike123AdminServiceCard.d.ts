/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Servico } from "../models";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type Bike123AdminServiceCardOverridesProps = {
    Bike123AdminServiceCard?: PrimitiveOverrideProps<FlexProps>;
    "Card Contents"?: PrimitiveOverrideProps<FlexProps>;
    CustomerName?: PrimitiveOverrideProps<TextProps>;
    ServiceAddedDate?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type Bike123AdminServiceCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    servicoCard?: Servico;
} & {
    overrides?: Bike123AdminServiceCardOverridesProps | undefined | null;
}>;
export default function Bike123AdminServiceCard(props: Bike123AdminServiceCardProps): React.ReactElement;
