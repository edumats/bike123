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
  useNavigateAction,
} from "./utils";
import {
  Button,
  Flex,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function Bike123OurServices(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Title: {},
        "Title Section": {},
        "Montagem de bicicleta nova": {},
        Price38881474: {},
        "Per bike38881475": {},
        Header38881472: {},
        "Bicicletas novas v\u00EAm desmontadas e necessitam de regulagem antes de rodar. Em at\u00E9 60 minutos ela fica pronta para voc\u00EA!38881477":
          {},
        "Sellling Point 138881476": {},
        "A bicicleta fica pronta para andar com seguran\u00E7a e sem o risco de quebras de pe\u00E7as por montagens descuidadas.38881481":
          {},
        "Selling Point 238881478": {},
        "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos3970701": {},
        "Selling Point 33970700": {},
        Button38881486: {},
        "Service 1": {},
        "Montagem de Ergom\u00E9trica": {},
        Price38515050: {},
        "Per bike38515051": {},
        Header38515048: {},
        "Bicicletas novas v\u00EAm desmontadas e necessitam de regulagem antes de rodar. Em at\u00E9 60 minutos ela fica pronta para voc\u00EA!38515055":
          {},
        "Sellling Point 138515052": {},
        MyIcon: {},
        "Frame 431": {},
        "A bicicleta fica pronta para andar com seguran\u00E7a e sem o risco de quebras de pe\u00E7as por montagens descuidadas.38515059":
          {},
        "Selling Point 238515056": {},
        "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos3970719": {},
        "Selling Point 33970716": {},
        Button38515064: {},
        "Service 2": {},
        "Revis\u00E3o Expert": {},
        "A partir de R$270,00": {},
        "Por bicicleta": {},
        Header38515066: {},
        "Lavagem da bicicleta a seco": {},
        "Frame 138": {},
        "Polimento especial": {},
        "Frame 139": {},
        "Calibragem dos pneus": {},
        "Frame 137": {},
        "Lubrifica\u00E7\u00E3o da corrente / Medi\u00E7\u00E3o de desgaste":
          {},
        "Frame 140": {},
        "Regulagem dos c\u00E2mbios e freios": {},
        "Frame 141": {},
        "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos38525263": {},
        "Frame 142": {},
        Button38515082: {},
        "Service 3": {},
        "Service Section": {},
        Bike123OurServices: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Title: {},
        "Title Section": {},
        "Montagem de bicicleta nova": {},
        Price38881474: {},
        "Per bike38881475": {},
        Header38881472: {},
        "Bicicletas novas v\u00EAm desmontadas e necessitam de regulagem antes de rodar. Em at\u00E9 60 minutos ela fica pronta para voc\u00EA!38881477":
          {},
        "Sellling Point 138881476": {},
        "A bicicleta fica pronta para andar com seguran\u00E7a e sem o risco de quebras de pe\u00E7as por montagens descuidadas.38881481":
          {},
        "Selling Point 238881478": {},
        "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos3970701": {},
        "Selling Point 33970700": {},
        Button38881486: {},
        "Service 1": { shrink: "0", alignSelf: "stretch" },
        "Montagem de Ergom\u00E9trica": {},
        Price38515050: {},
        "Per bike38515051": {},
        Header38515048: {},
        "Bicicletas novas v\u00EAm desmontadas e necessitam de regulagem antes de rodar. Em at\u00E9 60 minutos ela fica pronta para voc\u00EA!38515055":
          {},
        "Sellling Point 138515052": {},
        MyIcon: {},
        "Frame 431": {},
        "A bicicleta fica pronta para andar com seguran\u00E7a e sem o risco de quebras de pe\u00E7as por montagens descuidadas.38515059":
          {},
        "Selling Point 238515056": {},
        "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos3970719": {},
        "Selling Point 33970716": {},
        Button38515064: {},
        "Service 2": { shrink: "0", alignSelf: "stretch" },
        "Revis\u00E3o Expert": {},
        "A partir de R$270,00": {},
        "Por bicicleta": {},
        Header38515066: {},
        "Lavagem da bicicleta a seco": {},
        "Frame 138": {},
        "Polimento especial": {},
        "Frame 139": {},
        "Calibragem dos pneus": {},
        "Frame 137": {},
        "Lubrifica\u00E7\u00E3o da corrente / Medi\u00E7\u00E3o de desgaste":
          {},
        "Frame 140": {},
        "Regulagem dos c\u00E2mbios e freios": {},
        "Frame 141": {},
        "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos38525263": {},
        "Frame 142": {},
        Button38515082: {},
        "Service 3": { shrink: "0", alignSelf: "stretch" },
        "Service Section": { direction: "column" },
        Bike123OurServices: { width: "360px", padding: "48px 15px 48px 15px" },
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
  const buttonThreeEightEightEightOneFourEightSixOnClick = useNavigateAction({
    type: "url",
    url: "/servico?typeOfService=montagemBikeNova",
  });
  const buttonThreeEightFiveOneFiveZeroSixFourOnClick = useNavigateAction({
    type: "url",
    url: "/servico?typeOfService=montagemBikeErgo",
  });
  const buttonThreeEightFiveOneFiveZeroEightTwoOnClick = useNavigateAction({
    type: "url",
    url: "/servico?typeOfService=revisaoExpert",
  });
  return (
    <Flex
      gap="40px"
      direction="column"
      width="1279px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="48px 30px 48px 30px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123OurServices")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Title Section")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="32px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Nossos Serviços"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </Flex>
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
        {...getOverrideProps(overrides, "Service Section")}
      >
        <Flex
          gap="15px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          boxShadow="0px 2px 4px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.05000000074505806)"
          borderRadius="8px"
          padding="32px 32px 32px 32px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Service 1")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Header38881472")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="600"
              color="rgba(0,150,184,1)"
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
              children="Montagem de bicicleta nova"
              {...getOverrideProps(overrides, "Montagem de bicicleta nova")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
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
              children="A partir de R$235,00"
              {...getOverrideProps(overrides, "Price38881474")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(92,102,112,1)"
              lineHeight="25px"
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
              children="Por bicicleta"
              {...getOverrideProps(overrides, "Per bike38881475")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Sellling Point 138881476")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Bicicletas novas vêm desmontadas e necessitam de regulagem antes de rodar. Em até 60 minutos ela fica pronta para você!"
              {...getOverrideProps(
                overrides,
                "Bicicletas novas v\u00EAm desmontadas e necessitam de regulagem antes de rodar. Em at\u00E9 60 minutos ela fica pronta para voc\u00EA!38881477"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Selling Point 238881478")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="A bicicleta fica pronta para andar com segurança e sem o risco de quebras de peças por montagens descuidadas."
              {...getOverrideProps(
                overrides,
                "A bicicleta fica pronta para andar com seguran\u00E7a e sem o risco de quebras de pe\u00E7as por montagens descuidadas.38881481"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Selling Point 33970700")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Orientação de cuidados básicos"
              {...getOverrideProps(
                overrides,
                "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos3970701"
              )}
            ></Text>
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
            children="Contratar Agora"
            onClick={() => {
              buttonThreeEightEightEightOneFourEightSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button38881486")}
          ></Button>
        </Flex>
        <Flex
          gap="15px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          boxShadow="0px 2px 4px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.05000000074505806)"
          borderRadius="8px"
          padding="32px 32px 32px 32px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Service 2")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Header38515048")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="600"
              color="rgba(0,150,184,1)"
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
              children="Montagem de Ergométrica"
              {...getOverrideProps(overrides, "Montagem de Ergom\u00E9trica")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
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
              children="A partir de R$235,00"
              {...getOverrideProps(overrides, "Price38515050")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(92,102,112,1)"
              lineHeight="25px"
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
              children="Por bicicleta"
              {...getOverrideProps(overrides, "Per bike38515051")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Sellling Point 138515052")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Bicicletas novas vêm desmontadas e necessitam de regulagem antes de rodar. Em até 60 minutos ela fica pronta para você!"
              {...getOverrideProps(
                overrides,
                "Bicicletas novas v\u00EAm desmontadas e necessitam de regulagem antes de rodar. Em at\u00E9 60 minutos ela fica pronta para voc\u00EA!38515055"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Selling Point 238515056")}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              borderRadius="8px"
              padding="8px 8px 8px 8px"
              backgroundColor="rgba(129,222,243,1)"
              display="none"
              {...getOverrideProps(overrides, "Frame 431")}
            >
              <View
                width="24px"
                height="24px"
                {...getOverrideProps(overrides, "MyIcon")}
              ></View>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="A bicicleta fica pronta para andar com segurança e sem o risco de quebras de peças por montagens descuidadas."
              {...getOverrideProps(
                overrides,
                "A bicicleta fica pronta para andar com seguran\u00E7a e sem o risco de quebras de pe\u00E7as por montagens descuidadas.38515059"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Selling Point 33970716")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Orientação de cuidados básicos"
              {...getOverrideProps(
                overrides,
                "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos3970719"
              )}
            ></Text>
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
            children="Contratar Agora"
            onClick={() => {
              buttonThreeEightFiveOneFiveZeroSixFourOnClick();
            }}
            {...getOverrideProps(overrides, "Button38515064")}
          ></Button>
        </Flex>
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          boxShadow="0px 2px 4px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.05000000074505806)"
          borderRadius="8px"
          padding="32px 32px 32px 32px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Service 3")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Header38515066")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="600"
              color="rgba(0,150,184,1)"
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
              children="Revisão Expert"
              {...getOverrideProps(overrides, "Revis\u00E3o Expert")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
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
              children="A partir de R$270,00"
              {...getOverrideProps(overrides, "A partir de R$270,00")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(92,102,112,1)"
              lineHeight="25px"
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
              children="Por bicicleta"
              {...getOverrideProps(overrides, "Por bicicleta")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 138")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lavagem da bicicleta a seco"
              {...getOverrideProps(overrides, "Lavagem da bicicleta a seco")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 139")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Polimento especial"
              {...getOverrideProps(overrides, "Polimento especial")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 137")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Calibragem dos pneus"
              {...getOverrideProps(overrides, "Calibragem dos pneus")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 140")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lubrificação da corrente / Medição de desgaste"
              {...getOverrideProps(
                overrides,
                "Lubrifica\u00E7\u00E3o da corrente / Medi\u00E7\u00E3o de desgaste"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 141")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Regulagem dos câmbios e freios"
              {...getOverrideProps(
                overrides,
                "Regulagem dos c\u00E2mbios e freios"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 142")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Orientação de cuidados básicos"
              {...getOverrideProps(
                overrides,
                "Orienta\u00E7\u00E3o de cuidados b\u00E1sicos38525263"
              )}
            ></Text>
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
            children="Contratar Agora"
            onClick={() => {
              buttonThreeEightFiveOneFiveZeroEightTwoOnClick();
            }}
            {...getOverrideProps(overrides, "Button38515082")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
