/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123NavBarOverridesProps = {
    Bike123NavBar?: PrimitiveOverrideProps<FlexProps>;
    Bike123?: PrimitiveOverrideProps<TextProps>;
    "Menu Items"?: PrimitiveOverrideProps<FlexProps>;
    Sobre?: PrimitiveOverrideProps<TextProps>;
    Products?: PrimitiveOverrideProps<TextProps>;
    Pricing?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    Contato?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: Bike123NavBarOverridesProps | undefined | null;
}>;
export default function Bike123NavBar(props: Bike123NavBarProps): React.ReactElement;
