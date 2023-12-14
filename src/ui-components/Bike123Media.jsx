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
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
export default function Bike123Media(props) {
  const { src, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Veja onde j\u00E1 aparecemos": {},
        "bike-e-legal 1": {},
        "brasil-cycle-fair 1": {},
        "catraca-livre 1": {},
        "uol 1": {},
        "pedal-logo 1": {},
        "transporte-ativo 1": {},
        "vamos-pedalar 1": {},
        "Reference Container": {},
        Bike123Media: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Veja onde j\u00E1 aparecemos": {},
        "bike-e-legal 1": {},
        "brasil-cycle-fair 1": {},
        "catraca-livre 1": {},
        "uol 1": {},
        "pedal-logo 1": {},
        "transporte-ativo 1": {},
        "vamos-pedalar 1": {},
        "Reference Container": {},
        Bike123Media: { width: "360px", padding: "40px 10px 40px 10px" },
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
  const bikeelegalOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://bikeelegal.com/2017/05/09/so-para-mulheres-concorra-a-10-bolsas-em-mecanica-de-bicicleta/",
  });
  const brasilcyclefairOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.youtube.com/watch?v=Twc7dWlkmYg",
  });
  const catracalivreOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://catracalivre.com.br/educacao/bolsas-de-estudo-para-mulheres-em-curso-sobre-mecanica-de-bikes/",
  });
  const uolOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://economia.uol.com.br/empreendedorismo/noticias/redacao/2017/06/27/por-r-220-cursos-profissionais-para-oficinas-ensinam-a-manter-sua-bike.htm",
  });
  const pedallogoOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.pedal.com.br/bike123-oferece-bolsas-integrais-em-cursos-profissionalizantes-para-mulheres_texto12019.html",
  });
  const transporteativoOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "http://transporteativo.org.br/ta/?p=9977",
  });
  const vamospedalarOneOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://www.youtube.com/watch?v=83WR8CXJjcc",
  });
  return (
    <Flex
      gap="40px"
      direction="column"
      width="1460px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="40px 90px 40px 90px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "Bike123Media")}
      {...rest}
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
        children="Veja onde já aparecemos"
        {...getOverrideProps(overrides, "Veja onde j\u00E1 aparecemos")}
      ></Text>
      <Flex
        gap="35px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Reference Container")}
      >
        <Image
          width="200px"
          height="82.47px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://bike123-storage-d5766407193218-staging.s3.amazonaws.com/public/bike-e-legal.webp"
          alt="logo bike é legal"
          onClick={() => {
            bikeelegalOneOnClick();
          }}
          {...getOverrideProps(overrides, "bike-e-legal 1")}
        ></Image>
        <Image
          width="200px"
          height="86px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://bike123-storage-d5766407193218-staging.s3.amazonaws.com/public/brasil-cycle-fair.webp"
          alt="Logo do Brasil Cycle Fair"
          onClick={() => {
            brasilcyclefairOneOnClick();
          }}
          {...getOverrideProps(overrides, "brasil-cycle-fair 1")}
        ></Image>
        <Image
          width="200px"
          height="109.33px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://bike123-storage-d5766407193218-staging.s3.amazonaws.com/public/catraca-livre.webp"
          alt="Logo da Catraca Livre"
          onClick={() => {
            catracalivreOneOnClick();
          }}
          {...getOverrideProps(overrides, "catraca-livre 1")}
        ></Image>
        <Image
          width="200px"
          height="82px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://bike123-storage-d5766407193218-staging.s3.amazonaws.com/public/uol.webp"
          alt="Logo do UOL"
          onClick={() => {
            uolOneOnClick();
          }}
          {...getOverrideProps(overrides, "uol 1")}
        ></Image>
        <Image
          width="200px"
          height="43.85px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://bike123-storage-d5766407193218-staging.s3.amazonaws.com/public/pedal-logo.webp"
          alt="Logo do Pedal.com.br"
          onClick={() => {
            pedallogoOneOnClick();
          }}
          {...getOverrideProps(overrides, "pedal-logo 1")}
        ></Image>
        <Image
          width="200px"
          height="128px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://bike123-storage-d5766407193218-staging.s3.amazonaws.com/public/transporte-ativo.webp"
          alt="Logo do Transporte Ativo"
          onClick={() => {
            transporteativoOneOnClick();
          }}
          {...getOverrideProps(overrides, "transporte-ativo 1")}
        ></Image>
        <Image
          width="200px"
          height="123.32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://bike123-storage-d5766407193218-staging.s3.amazonaws.com/public/vamos-pedalar.webp"
          alt="Logo do programa Vamos Pedalar"
          onClick={() => {
            vamospedalarOneOnClick();
          }}
          {...getOverrideProps(overrides, "vamos-pedalar 1")}
        ></Image>
      </Flex>
    </Flex>
  );
}
