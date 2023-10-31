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
export declare type Bike123WhatIsItOverridesProps = {
    Bike123WhatIsIt?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "O que \u00E9 Bike123?"?: PrimitiveOverrideProps<TextProps>;
    "Pedale tranquilo. Deixe sua bike redondinha! V\u00E1 mais longe. Sua bike vai te levar para novos lugares!"?: PrimitiveOverrideProps<TextProps>;
    "Constru\u00EDmos uma rede de mec\u00E2nicos de bicicleta pronta para te atender. Quando uma pessoa informa a necessidade do servi\u00E7o mec\u00E2nico, o mec\u00E2nico parceiro da Bike123 recebe o chamado e agenda o servi\u00E7o com quem solicitou."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Bike123WhatIsItProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: Bike123WhatIsItOverridesProps | undefined | null;
}>;
export default function Bike123WhatIsIt(props: Bike123WhatIsItProps): React.ReactElement;
