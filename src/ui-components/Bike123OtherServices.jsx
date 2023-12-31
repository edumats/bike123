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
export default function Bike123OtherServices(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Title: {},
        "Title Section": {},
        "Pneu furado": {},
        Price39133605: {},
        "Per bike39133606": {},
        Header39133603: {},
        "Para bicicletas convencionais, que n\u00E3o s\u00E3o el\u00E9tricas":
          {},
        "Sellling Point 139133607": {},
        MyIcon39133611: {},
        "Frame 43139133610": {},
        "Text 2": {},
        "Selling Point 239133609": {},
        MyIcon39133615: {},
        "Frame 43139133614": {},
        "J\u00E1 est\u00E3o inclusas a c\u00E2mara de ar nova e a visita do t\u00E9cnico at\u00E9 a sua casa.39133616":
          {},
        "Selling Point 339133613": {},
        Button39133621: {},
        "Service 1": {},
        "Pneu furado em bicicleta el\u00E9trica": {},
        Price38525346: {},
        "Per bike38525347": {},
        Header38525344: {},
        "Para bicicletas el\u00E9tricas": {},
        "Sellling Point 138525348": {},
        MyIcon38525352: {},
        "Frame 43138525351": {},
        "N\u00E3o deixe que um pneu furado estrague seu dia. Consertamos o problema e cuidamos para que n\u00E3o fure mais.":
          {},
        "Selling Point 238525350": {},
        MyIcon38525458: {},
        "Frame 43138525457": {},
        "J\u00E1 est\u00E3o inclusas a c\u00E2mara de ar nova e a visita do t\u00E9cnico at\u00E9 a sua casa.38525459":
          {},
        "Selling Point 338525456": {},
        Button38525358: {},
        "Service 2": {},
        "Desmontagem e embalagem de bicicleta": {},
        "A partir de R$330,00": {},
        "Por bicicleta": {},
        Header38525360: {},
        "Desmontagem da bicicleta para transporte": {},
        "Frame 138": {},
        "Embalagem da bicicleta para uma viagem segura": {},
        "Frame 139": {},
        "Incluso caixa de papel\u00E3o para transporte da bicicleta": {},
        "Frame 137": {},
        Button38525376: {},
        "Service 3": {},
        "Service Section": {},
        Bike123OtherServices: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Title: {},
        "Title Section": {},
        "Pneu furado": {},
        Price39133605: {},
        "Per bike39133606": {},
        Header39133603: {},
        "Para bicicletas convencionais, que n\u00E3o s\u00E3o el\u00E9tricas":
          {},
        "Sellling Point 139133607": {},
        MyIcon39133611: {},
        "Frame 43139133610": {},
        "Text 2": {},
        "Selling Point 239133609": {},
        MyIcon39133615: {},
        "Frame 43139133614": {},
        "J\u00E1 est\u00E3o inclusas a c\u00E2mara de ar nova e a visita do t\u00E9cnico at\u00E9 a sua casa.39133616":
          {},
        "Selling Point 339133613": {},
        Button39133621: {},
        "Service 1": { height: "559px", shrink: "0" },
        "Pneu furado em bicicleta el\u00E9trica": {},
        Price38525346: {},
        "Per bike38525347": {},
        Header38525344: {},
        "Para bicicletas el\u00E9tricas": {},
        "Sellling Point 138525348": {},
        MyIcon38525352: {},
        "Frame 43138525351": {},
        "N\u00E3o deixe que um pneu furado estrague seu dia. Consertamos o problema e cuidamos para que n\u00E3o fure mais.":
          {},
        "Selling Point 238525350": {},
        MyIcon38525458: {},
        "Frame 43138525457": {},
        "J\u00E1 est\u00E3o inclusas a c\u00E2mara de ar nova e a visita do t\u00E9cnico at\u00E9 a sua casa.38525459":
          {},
        "Selling Point 338525456": {},
        Button38525358: {},
        "Service 2": { height: "559px", shrink: "0" },
        "Desmontagem e embalagem de bicicleta": {},
        "A partir de R$330,00": {},
        "Por bicicleta": {},
        Header38525360: {},
        "Desmontagem da bicicleta para transporte": {},
        "Frame 138": {},
        "Embalagem da bicicleta para uma viagem segura": {},
        "Frame 139": {},
        "Incluso caixa de papel\u00E3o para transporte da bicicleta": {},
        "Frame 137": {},
        Button38525376: {},
        "Service 3": { height: "559px", shrink: "0" },
        "Service Section": { direction: "column" },
        Bike123OtherServices: { width: "360px" },
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
  const buttonThreeNineOneThreeThreeSixTwoOneOnClick = useNavigateAction({
    type: "url",
    url: "/servico?typeOfService=pneuFurado",
  });
  const buttonThreeEightFiveTwoFiveThreeFiveEightOnClick = useNavigateAction({
    type: "url",
    url: "/servico?typeOfService=pneuFuradoEletrica",
  });
  const buttonThreeEightFiveTwoFiveThreeSevenSixOnClick = useNavigateAction({
    type: "url",
    url: "/servico?typeOfService=desmontaBike",
  });
  return (
    <Flex
      gap="40px"
      direction="column"
      width="1140px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="48px 30px 48px 30px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123OtherServices")}
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
          children="Outros Serviços"
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
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
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
            {...getOverrideProps(overrides, "Header39133603")}
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
              children="Pneu furado"
              {...getOverrideProps(overrides, "Pneu furado")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="32px"
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
              children="A partir de R$130,00"
              {...getOverrideProps(overrides, "Price39133605")}
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
              {...getOverrideProps(overrides, "Per bike39133606")}
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
            {...getOverrideProps(overrides, "Sellling Point 139133607")}
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
              children="Para bicicletas convencionais, que não são elétricas"
              {...getOverrideProps(
                overrides,
                "Para bicicletas convencionais, que n\u00E3o s\u00E3o el\u00E9tricas"
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
            {...getOverrideProps(overrides, "Selling Point 239133609")}
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
              {...getOverrideProps(overrides, "Frame 43139133610")}
            >
              <View
                width="24px"
                height="24px"
                {...getOverrideProps(overrides, "MyIcon39133611")}
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
              children="Não deixe que um pneu furado estrague seu dia. Consertamos o problema e cuidamos para que não fure mais."
              {...getOverrideProps(overrides, "Text 2")}
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
            {...getOverrideProps(overrides, "Selling Point 339133613")}
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
              {...getOverrideProps(overrides, "Frame 43139133614")}
            >
              <View
                width="24px"
                height="24px"
                {...getOverrideProps(overrides, "MyIcon39133615")}
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
              children="Já estão inclusas a câmara de ar nova e a visita do técnico até a sua casa."
              {...getOverrideProps(
                overrides,
                "J\u00E1 est\u00E3o inclusas a c\u00E2mara de ar nova e a visita do t\u00E9cnico at\u00E9 a sua casa.39133616"
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
              buttonThreeNineOneThreeThreeSixTwoOneOnClick();
            }}
            {...getOverrideProps(overrides, "Button39133621")}
          ></Button>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
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
            {...getOverrideProps(overrides, "Header38525344")}
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
              children="Pneu furado em bicicleta elétrica"
              {...getOverrideProps(
                overrides,
                "Pneu furado em bicicleta el\u00E9trica"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="32px"
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
              children="A partir de R$235,00"
              {...getOverrideProps(overrides, "Price38525346")}
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
              {...getOverrideProps(overrides, "Per bike38525347")}
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
            {...getOverrideProps(overrides, "Sellling Point 138525348")}
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
              children="Para bicicletas elétricas"
              {...getOverrideProps(overrides, "Para bicicletas el\u00E9tricas")}
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
            {...getOverrideProps(overrides, "Selling Point 238525350")}
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
              {...getOverrideProps(overrides, "Frame 43138525351")}
            >
              <View
                width="24px"
                height="24px"
                {...getOverrideProps(overrides, "MyIcon38525352")}
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
              children="Não deixe que um pneu furado estrague seu dia. Consertamos o problema e cuidamos para que não fure mais."
              {...getOverrideProps(
                overrides,
                "N\u00E3o deixe que um pneu furado estrague seu dia. Consertamos o problema e cuidamos para que n\u00E3o fure mais."
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
            {...getOverrideProps(overrides, "Selling Point 338525456")}
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
              {...getOverrideProps(overrides, "Frame 43138525457")}
            >
              <View
                width="24px"
                height="24px"
                {...getOverrideProps(overrides, "MyIcon38525458")}
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
              children="Já estão inclusas a câmara de ar nova e a visita do técnico até a sua casa."
              {...getOverrideProps(
                overrides,
                "J\u00E1 est\u00E3o inclusas a c\u00E2mara de ar nova e a visita do t\u00E9cnico at\u00E9 a sua casa.38525459"
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
              buttonThreeEightFiveTwoFiveThreeFiveEightOnClick();
            }}
            {...getOverrideProps(overrides, "Button38525358")}
          ></Button>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
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
            {...getOverrideProps(overrides, "Header38525360")}
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
              children="Desmontagem e embalagem de bicicleta"
              {...getOverrideProps(
                overrides,
                "Desmontagem e embalagem de bicicleta"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="32px"
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
              children="A partir de R$330,00"
              {...getOverrideProps(overrides, "A partir de R$330,00")}
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
              children="Desmontagem da bicicleta para transporte"
              {...getOverrideProps(
                overrides,
                "Desmontagem da bicicleta para transporte"
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
              children="Embalagem da bicicleta para uma viagem segura"
              {...getOverrideProps(
                overrides,
                "Embalagem da bicicleta para uma viagem segura"
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
              children="Incluso caixa de papelão para transporte da bicicleta"
              {...getOverrideProps(
                overrides,
                "Incluso caixa de papel\u00E3o para transporte da bicicleta"
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
              buttonThreeEightFiveTwoFiveThreeSevenSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button38525376")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
