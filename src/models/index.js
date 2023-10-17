// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Estados = {
  "AC": "AC",
  "AL": "AL",
  "AM": "AM",
  "BA": "BA",
  "CE": "CE",
  "DF": "DF",
  "ES": "ES",
  "GO": "GO",
  "MA": "MA",
  "MT": "MT",
  "MS": "MS",
  "MG": "MG",
  "PA": "PA",
  "PB": "PB",
  "PR": "PR",
  "PE": "PE",
  "PI": "PI",
  "RJ": "RJ",
  "RN": "RN",
  "RS": "RS",
  "RO": "RO",
  "RR": "RR",
  "SC": "SC",
  "SP": "SP",
  "SE": "SE",
  "TO": "TO"
};

const Servicos = {
  "MONTAGEM_BIKE_NOVA": "MONTAGEM_BIKE_NOVA",
  "MONTAGEM_BIKE_ERGOMETRICA": "MONTAGEM_BIKE_ERGOMETRICA",
  "REVISAO_EXPERT": "REVISAO_EXPERT",
  "SERVICO_SELECT": "SERVICO_SELECT",
  "PNEU_FURADO_CONVENCIONAL": "PNEU_FURADO_CONVENCIONAL",
  "PNEU_FURADO_ELETRICA": "PNEU_FURADO_ELETRICA"
};

const { Lojista, Mecanico, ServicoCustomizado, Servico } = initSchema(schema);

export {
  Lojista,
  Mecanico,
  ServicoCustomizado,
  Servico,
  Estados,
  Servicos
};