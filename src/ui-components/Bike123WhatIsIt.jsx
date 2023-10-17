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
export default function Bike123WhatIsIt(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "O que \u00E9 Bike123?": {},
        "Pedale tranquilo. Deixe sua bike redondinha! V\u00E1 mais longe. Sua bike vai te levar para novos lugares!":
          {},
        "Constru\u00EDmos uma rede de mec\u00E2nicos de bicicleta pronta para te atender. Quando uma pessoa informa a necessidade do servi\u00E7o mec\u00E2nico, o mec\u00E2nico parceiro da Bike123 recebe o chamado e agenda o servi\u00E7o com quem solicitou.":
          {},
        "Main Body": {},
        "Type Lock Up": {},
        Bike123WhatIsIt: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "O que \u00E9 Bike123?": {
          fontSize: "24px",
          lineHeight: "30px",
          letterSpacing: "-0.33px",
          height: "54px",
        },
        "Pedale tranquilo. Deixe sua bike redondinha! V\u00E1 mais longe. Sua bike vai te levar para novos lugares!":
          { fontSize: "20px", lineHeight: "30px" },
        "Constru\u00EDmos uma rede de mec\u00E2nicos de bicicleta pronta para te atender. Quando uma pessoa informa a necessidade do servi\u00E7o mec\u00E2nico, o mec\u00E2nico parceiro da Bike123 recebe o chamado e agenda o servi\u00E7o com quem solicitou.":
          { fontSize: "20px", lineHeight: "30px" },
        "Main Body": {},
        "Type Lock Up": {},
        Bike123WhatIsIt: { width: "360px", padding: "74px 10px 74px 10px" },
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
      gap="10px"
      direction="column"
      width="1460px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="74px 106px 74px 106px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123WhatIsIt")}
      {...rest}
    >
      <Flex
        gap="24px"
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
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Flex
          gap="50px"
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
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Text
            fontFamily="Inter"
            fontSize="48px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="48px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.81px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="O que é Bike123?"
            {...getOverrideProps(overrides, "O que \u00E9 Bike123?")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="48px"
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
            children="Pedale tranquilo. Deixe sua bike redondinha! Vá mais longe. Sua bike vai te levar para novos lugares!"
            {...getOverrideProps(
              overrides,
              "Pedale tranquilo. Deixe sua bike redondinha! V\u00E1 mais longe. Sua bike vai te levar para novos lugares!"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="48px"
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
            children="Construímos uma rede de mecânicos de bicicleta pronta para te atender. Quando uma pessoa informa a necessidade do serviço mecânico, o mecânico parceiro da Bike123 recebe o chamado e agenda o serviço com quem solicitou."
            {...getOverrideProps(
              overrides,
              "Constru\u00EDmos uma rede de mec\u00E2nicos de bicicleta pronta para te atender. Quando uma pessoa informa a necessidade do servi\u00E7o mec\u00E2nico, o mec\u00E2nico parceiro da Bike123 recebe o chamado e agenda o servi\u00E7o com quem solicitou."
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
