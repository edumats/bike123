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
} from "./utils";
import { Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import CalendarundefinedGlyphundefined from "./CalendarundefinedGlyphundefined";
import RibbonStarundefinedGlyphundefined from "./RibbonStarundefinedGlyphundefined";
import MoneyHandundefinedGlyphundefined from "./MoneyHandundefinedGlyphundefined";
import ShieldCheckmarkundefinedGlyphundefined from "./ShieldCheckmarkundefinedGlyphundefined";
export default function Bike123SellingPoints(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Por que Bike123?": {},
        "Calendar / undefined / Glyph: undefined": {},
        "Icon Container 239134156": {},
        "Pr\u00E1tico": {},
        "Temos a op\u00E7\u00E3o do t\u00E9cnico ir at\u00E9 voc\u00EA, com hor\u00E1rio agendado, muito mais pr\u00E1tico e f\u00E1cil!":
          {},
        "Reason 5": {},
        "Ribbon Star / undefined / Glyph: undefined": {},
        "Icon Container 238545642": {},
        Profissional: {},
        "Trabalhamos com os melhores t\u00E9cnicos, todos com ampla experi\u00EAncia e ferramentas profissionais":
          {},
        "Reason 2": {},
        "Money Hand / undefined / Glyph: undefined": {},
        "Icon Container 3": {},
        Pagamento: {},
        "Todos os pagamentos s\u00E3o feitos atrav\u00E9s do sistema Paypal e contam com prote\u00E7\u00E3o ao comprador. Mais seguran\u00E7a para voc\u00EA.":
          {},
        "Reason 3": {},
        "Shield Checkmark / undefined / Glyph: undefined": {},
        "Icon Container 4": {},
        Seguro: {},
        "Seguro de at\u00E9 R$7000 com cobertura durante a realiza\u00E7\u00E3o do servi\u00E7o":
          {},
        "Reason 4": {},
        "Features Container": {},
        Bike123SellingPoints: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Por que Bike123?": {},
        "Calendar / undefined / Glyph: undefined": {},
        "Icon Container 239134156": {},
        "Pr\u00E1tico": {},
        "Temos a op\u00E7\u00E3o do t\u00E9cnico ir at\u00E9 voc\u00EA, com hor\u00E1rio agendado, muito mais pr\u00E1tico e f\u00E1cil!":
          {},
        "Reason 5": { height: "356px", shrink: "0" },
        "Ribbon Star / undefined / Glyph: undefined": {},
        "Icon Container 238545642": {},
        Profissional: {},
        "Trabalhamos com os melhores t\u00E9cnicos, todos com ampla experi\u00EAncia e ferramentas profissionais":
          {},
        "Reason 2": { height: "356px", shrink: "0" },
        "Money Hand / undefined / Glyph: undefined": {},
        "Icon Container 3": {},
        Pagamento: {},
        "Todos os pagamentos s\u00E3o feitos atrav\u00E9s do sistema Paypal e contam com prote\u00E7\u00E3o ao comprador. Mais seguran\u00E7a para voc\u00EA.":
          {},
        "Reason 3": { height: "356px", shrink: "0" },
        "Shield Checkmark / undefined / Glyph: undefined": {},
        "Icon Container 4": {},
        Seguro: {},
        "Seguro de at\u00E9 R$7000 com cobertura durante a realiza\u00E7\u00E3o do servi\u00E7o":
          {},
        "Reason 4": { height: "356px", shrink: "0" },
        "Features Container": { direction: "column" },
        Bike123SellingPoints: {
          width: "360px",
          padding: "40px 10px 40px 10px",
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
      gap="21px"
      direction="column"
      width="1438px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="40px 30px 40px 30px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123SellingPoints")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.49px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Por que Bike123?"
        {...getOverrideProps(overrides, "Por que Bike123?")}
      ></Text>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Features Container")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
          padding="40px 40px 40px 40px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Reason 5")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(0,0,0,0)"
            display="flex"
            {...getOverrideProps(overrides, "Icon Container 239134156")}
          >
            <CalendarundefinedGlyphundefined
              width="54px"
              height="54px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Calendar / undefined / Glyph: undefined"
              )}
            ></CalendarundefinedGlyphundefined>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
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
            children="Prático"
            {...getOverrideProps(overrides, "Pr\u00E1tico")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            children="Temos a opção do técnico ir até você, com horário agendado, muito mais prático e fácil!"
            {...getOverrideProps(
              overrides,
              "Temos a op\u00E7\u00E3o do t\u00E9cnico ir at\u00E9 voc\u00EA, com hor\u00E1rio agendado, muito mais pr\u00E1tico e f\u00E1cil!"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
          padding="40px 40px 40px 40px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Reason 2")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(0,0,0,0)"
            display="flex"
            {...getOverrideProps(overrides, "Icon Container 238545642")}
          >
            <RibbonStarundefinedGlyphundefined
              width="54px"
              height="54px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Ribbon Star / undefined / Glyph: undefined"
              )}
            ></RibbonStarundefinedGlyphundefined>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
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
            children="Profissional"
            {...getOverrideProps(overrides, "Profissional")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            children="Trabalhamos com os melhores técnicos, todos com ampla experiência e ferramentas profissionais"
            {...getOverrideProps(
              overrides,
              "Trabalhamos com os melhores t\u00E9cnicos, todos com ampla experi\u00EAncia e ferramentas profissionais"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
          borderRadius="8px"
          padding="40px 40px 40px 40px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Reason 3")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(0,0,0,0)"
            display="flex"
            {...getOverrideProps(overrides, "Icon Container 3")}
          >
            <MoneyHandundefinedGlyphundefined
              width="54px"
              height="54px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Money Hand / undefined / Glyph: undefined"
              )}
            ></MoneyHandundefinedGlyphundefined>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
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
            children="Pagamento"
            {...getOverrideProps(overrides, "Pagamento")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            children="Todos os pagamentos são feitos através do sistema Paypal e contam com proteção ao comprador. Mais segurança para você."
            {...getOverrideProps(
              overrides,
              "Todos os pagamentos s\u00E3o feitos atrav\u00E9s do sistema Paypal e contam com prote\u00E7\u00E3o ao comprador. Mais seguran\u00E7a para voc\u00EA."
            )}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
          padding="40px 40px 40px 40px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Reason 4")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="8px"
            padding="8px 8px 8px 8px"
            backgroundColor="rgba(0,0,0,0)"
            display="flex"
            {...getOverrideProps(overrides, "Icon Container 4")}
          >
            <ShieldCheckmarkundefinedGlyphundefined
              width="54px"
              height="54px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Shield Checkmark / undefined / Glyph: undefined"
              )}
            ></ShieldCheckmarkundefinedGlyphundefined>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
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
            children="Seguro"
            {...getOverrideProps(overrides, "Seguro")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
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
            children="Seguro de até R$7000 com cobertura durante a realização do serviço"
            {...getOverrideProps(
              overrides,
              "Seguro de at\u00E9 R$7000 com cobertura durante a realiza\u00E7\u00E3o do servi\u00E7o"
            )}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
