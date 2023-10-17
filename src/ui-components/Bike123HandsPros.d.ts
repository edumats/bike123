/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123HandsProsOverridesProps = {
    Bike123HandsPros?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Sua bicicleta nas m\u00E3os de especialistas"?: PrimitiveOverrideProps<TextProps>;
    "Economize tempo e pedale mais"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123HandsProsProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: Bike123HandsProsOverridesProps | undefined | null;
}>;
export default function Bike123HandsPros(props: Bike123HandsProsProps): React.ReactElement;
