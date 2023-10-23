/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123MediaOverridesProps = {
    Bike123Media?: PrimitiveOverrideProps<FlexProps>;
    "Veja onde j\u00E1 aparecemos"?: PrimitiveOverrideProps<TextProps>;
    "Reference Container"?: PrimitiveOverrideProps<FlexProps>;
    "bike-e-legal 1"?: PrimitiveOverrideProps<ImageProps>;
    "brasil-cycle-fair 1"?: PrimitiveOverrideProps<ImageProps>;
    "catraca-livre 1"?: PrimitiveOverrideProps<ImageProps>;
    "uol 1"?: PrimitiveOverrideProps<ImageProps>;
    "pedal-logo 1"?: PrimitiveOverrideProps<ImageProps>;
    "transporte-ativo 1"?: PrimitiveOverrideProps<ImageProps>;
    "vamos-pedalar 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Bike123MediaProps = React.PropsWithChildren<Partial<FlexProps> & {
    src?: String;
} & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: Bike123MediaOverridesProps | undefined | null;
}>;
export default function Bike123Media(props: Bike123MediaProps): React.ReactElement;
