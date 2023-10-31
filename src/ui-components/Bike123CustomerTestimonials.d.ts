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
export declare type Bike123CustomerTestimonialsOverridesProps = {
    Bike123CustomerTestimonials?: PrimitiveOverrideProps<FlexProps>;
    "Satisfa\u00E7\u00E3o do cliente \u00E9 o nosso maior objetivo"?: PrimitiveOverrideProps<TextProps>;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    "\u201D\u00D3timo atendimento, super \u00E1gil, eficiente e de extrema confian\u00E7a! O servi\u00E7o na minha bike ficou sensacional, sem contar a comodidade da bike ser retirada e entregue em casa! Virei cliente com certeza! Parab\u00E9ns pelo \u00F3timo atendimento e servi\u00E7o equipe Bike 123!\u201D"?: PrimitiveOverrideProps<TextProps>;
    "Marcelo Carvalho, Cliente da Revis\u00E3o Premium"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123CustomerTestimonialsProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
    content?: "Marcelo";
} & {
    overrides?: Bike123CustomerTestimonialsOverridesProps | undefined | null;
}>;
export default function Bike123CustomerTestimonials(props: Bike123CustomerTestimonialsProps): React.ReactElement;
