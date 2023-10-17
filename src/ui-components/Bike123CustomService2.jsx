/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Text,
  TextAreaField,
  TextField,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function Bike123CustomService2(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Precisa de algo especial?": {},
        "Sua bicicleta est\u00E1 com um barulho estranho? Est\u00E1 querendo trocar algo na bike?":
          {},
        "Fale com a gente e tenha um or\u00E7amento sob medida": {},
        "Frame 438": {},
        "Name Field": {},
        TextField38902257: {},
        TextField38902264: {},
        TextAreaField: {},
        "Frame 437": {},
        Button: {},
        Bike123CustomService2: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Precisa de algo especial?": {},
        "Sua bicicleta est\u00E1 com um barulho estranho? Est\u00E1 querendo trocar algo na bike?":
          {},
        "Fale com a gente e tenha um or\u00E7amento sob medida": {},
        "Frame 438": {},
        "Name Field": {},
        TextField38902257: {},
        TextField38902264: {},
        TextAreaField: {},
        "Frame 437": {},
        Button: {},
        Bike123CustomService2: {
          width: "360px",
          padding: "66px 15px 66px 15px",
        },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="58px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="66px 100px 66px 100px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123CustomService2")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Precisa de algo  especial?"
        {...getOverrideProps(overrides, "Precisa de algo especial?")}
      ></Text>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 438")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sua bicicleta está com um barulho estranho? Está querendo trocar algo na bike?"
          {...getOverrideProps(
            overrides,
            "Sua bicicleta est\u00E1 com um barulho estranho? Est\u00E1 querendo trocar algo na bike?"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fale com a gente e tenha um orçamento sob medida"
          {...getOverrideProps(
            overrides,
            "Fale com a gente e tenha um or\u00E7amento sob medida"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="44px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <TextField
          width="unset"
          height="unset"
          placeholder="Seu nome"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "Name Field")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          placeholder="Seu e-mail"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38902257")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          placeholder="Seu telefone"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38902264")}
        ></TextField>
        <TextAreaField
          width="unset"
          height="unset"
          label="Mensagem"
          placeholder="Explique o que você precisa"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextAreaField")}
        ></TextAreaField>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        backgroundColor="rgba(230,119,0,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Enviar Mensagem"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
