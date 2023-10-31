/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Lojista } from "../models";
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
export declare type Bike123AdminShopCardOverridesProps = {
    Bike123AdminShopCard?: PrimitiveOverrideProps<FlexProps>;
    "Card Contents"?: PrimitiveOverrideProps<FlexProps>;
    RazaoSocial?: PrimitiveOverrideProps<TextProps>;
    NomeFantasia?: PrimitiveOverrideProps<TextProps>;
    ShopEmail?: PrimitiveOverrideProps<TextProps>;
    ShopPhone?: PrimitiveOverrideProps<TextProps>;
    ShopCityState?: PrimitiveOverrideProps<FlexProps>;
    "S\u00E3o Paulo"?: PrimitiveOverrideProps<TextProps>;
    SP?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123AdminShopCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    lojista?: Lojista;
} & {
    overrides?: Bike123AdminShopCardOverridesProps | undefined | null;
}>;
export default function Bike123AdminShopCard(props: Bike123AdminShopCardProps): React.ReactElement;
