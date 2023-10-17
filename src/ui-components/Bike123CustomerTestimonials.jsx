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
import { Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function Bike123CustomerTestimonials(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Satisfa\u00E7\u00E3o do cliente \u00E9 o nosso maior objetivo": {},
        "\u201D\u00D3timo atendimento, super \u00E1gil, eficiente e de extrema confian\u00E7a! O servi\u00E7o na minha bike ficou sensacional, sem contar a comodidade da bike ser retirada e entregue em casa! Virei cliente com certeza! Parab\u00E9ns pelo \u00F3timo atendimento e servi\u00E7o equipe Bike 123!\u201D":
          {},
        "Marcelo Carvalho, Cliente da Revis\u00E3o Premium": {},
        "Frame 436": {},
        Bike123CustomerTestimonials: {},
      },
      variantValues: { breakpoint: "medium", content: "Marcelo" },
    },
    {
      overrides: {
        "Satisfa\u00E7\u00E3o do cliente \u00E9 o nosso maior objetivo": {},
        "\u201D\u00D3timo atendimento, super \u00E1gil, eficiente e de extrema confian\u00E7a! O servi\u00E7o na minha bike ficou sensacional, sem contar a comodidade da bike ser retirada e entregue em casa! Virei cliente com certeza! Parab\u00E9ns pelo \u00F3timo atendimento e servi\u00E7o equipe Bike 123!\u201D":
          {},
        "Marcelo Carvalho, Cliente da Revis\u00E3o Premium": {
          fontWeight: "400",
          lineHeight: "24px",
        },
        "Frame 436": {},
        Bike123CustomerTestimonials: {
          width: "360px",
          padding: "40px 30px 40px 30px",
        },
      },
      variantValues: { breakpoint: "small", content: "Marcelo" },
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
      gap="40px"
      direction="column"
      width="1348px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="40px 106px 40px 106px"
      backgroundColor="rgba(0,112,138,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123CustomerTestimonials")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.33px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Satisfação do cliente é o nosso maior objetivo"
        {...getOverrideProps(
          overrides,
          "Satisfa\u00E7\u00E3o do cliente \u00E9 o nosso maior objetivo"
        )}
      ></Text>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 436")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="”Ótimo atendimento, super ágil, eficiente e de extrema confiança! O serviço na minha bike ficou sensacional, sem contar a comodidade da bike ser retirada e entregue em casa! Virei cliente com certeza! Parabéns pelo ótimo atendimento e serviço equipe Bike 123!”"
          {...getOverrideProps(
            overrides,
            "\u201D\u00D3timo atendimento, super \u00E1gil, eficiente e de extrema confian\u00E7a! O servi\u00E7o na minha bike ficou sensacional, sem contar a comodidade da bike ser retirada e entregue em casa! Virei cliente com certeza! Parab\u00E9ns pelo \u00F3timo atendimento e servi\u00E7o equipe Bike 123!\u201D"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="22px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.17px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Marcelo Carvalho, Cliente da Revisão Premium"
          {...getOverrideProps(
            overrides,
            "Marcelo Carvalho, Cliente da Revis\u00E3o Premium"
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
