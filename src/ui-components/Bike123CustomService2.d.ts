/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Bike123CustomService2OverridesProps = {
    Bike123CustomService2?: PrimitiveOverrideProps<FlexProps>;
    "Precisa de algo especial?"?: PrimitiveOverrideProps<TextProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    "Sua bicicleta est\u00E1 com um barulho estranho? Est\u00E1 querendo trocar algo na bike?"?: PrimitiveOverrideProps<TextProps>;
    "Fale com a gente e tenha um or\u00E7amento sob medida"?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "Name Field"?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38902257?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38902264?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Bike123CustomService2Props = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "medium" | "small";
} & {
    overrides?: Bike123CustomService2OverridesProps | undefined | null;
}>;
export default function Bike123CustomService2(props: Bike123CustomService2Props): React.ReactElement;
