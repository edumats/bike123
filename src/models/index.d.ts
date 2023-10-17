import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Estados {
  AC = "AC",
  AL = "AL",
  AM = "AM",
  BA = "BA",
  CE = "CE",
  DF = "DF",
  ES = "ES",
  GO = "GO",
  MA = "MA",
  MT = "MT",
  MS = "MS",
  MG = "MG",
  PA = "PA",
  PB = "PB",
  PR = "PR",
  PE = "PE",
  PI = "PI",
  RJ = "RJ",
  RN = "RN",
  RS = "RS",
  RO = "RO",
  RR = "RR",
  SC = "SC",
  SP = "SP",
  SE = "SE",
  TO = "TO"
}

export enum Servicos {
  MONTAGEM_BIKE_NOVA = "MONTAGEM_BIKE_NOVA",
  MONTAGEM_BIKE_ERGOMETRICA = "MONTAGEM_BIKE_ERGOMETRICA",
  REVISAO_EXPERT = "REVISAO_EXPERT",
  SERVICO_SELECT = "SERVICO_SELECT",
  PNEU_FURADO_CONVENCIONAL = "PNEU_FURADO_CONVENCIONAL",
  PNEU_FURADO_ELETRICA = "PNEU_FURADO_ELETRICA"
}



type EagerLojista = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lojista, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cnpj: string;
  readonly razao_social: string;
  readonly nome_fantasia: string;
  readonly nome_responsavel: string;
  readonly email: string;
  readonly telefone: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLojista = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lojista, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cnpj: string;
  readonly razao_social: string;
  readonly nome_fantasia: string;
  readonly nome_responsavel: string;
  readonly email: string;
  readonly telefone: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Lojista = LazyLoading extends LazyLoadingDisabled ? EagerLojista : LazyLojista

export declare const Lojista: (new (init: ModelInit<Lojista>) => Lojista) & {
  copyOf(source: Lojista, mutator: (draft: MutableModel<Lojista>) => MutableModel<Lojista> | void): Lojista;
}

type EagerMecanico = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mecanico, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly celular: string;
  readonly telefone: string;
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly cnh: string;
  readonly imagem_cnh?: string | null;
  readonly biografia?: string | null;
  readonly cep?: string | null;
  readonly Endereco?: string | null;
  readonly Numero?: string | null;
  readonly Complemento?: string | null;
  readonly Bairro?: string | null;
  readonly Cidade?: string | null;
  readonly Estado?: Estados | keyof typeof Estados | null;
  readonly Referencia?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMecanico = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mecanico, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly celular: string;
  readonly telefone: string;
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly cnh: string;
  readonly imagem_cnh?: string | null;
  readonly biografia?: string | null;
  readonly cep?: string | null;
  readonly Endereco?: string | null;
  readonly Numero?: string | null;
  readonly Complemento?: string | null;
  readonly Bairro?: string | null;
  readonly Cidade?: string | null;
  readonly Estado?: Estados | keyof typeof Estados | null;
  readonly Referencia?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mecanico = LazyLoading extends LazyLoadingDisabled ? EagerMecanico : LazyMecanico

export declare const Mecanico: (new (init: ModelInit<Mecanico>) => Mecanico) & {
  copyOf(source: Mecanico, mutator: (draft: MutableModel<Mecanico>) => MutableModel<Mecanico> | void): Mecanico;
}

type EagerServicoCustomizado = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServicoCustomizado, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly telefone: string;
  readonly mensagem: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServicoCustomizado = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServicoCustomizado, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly telefone: string;
  readonly mensagem: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServicoCustomizado = LazyLoading extends LazyLoadingDisabled ? EagerServicoCustomizado : LazyServicoCustomizado

export declare const ServicoCustomizado: (new (init: ModelInit<ServicoCustomizado>) => ServicoCustomizado) & {
  copyOf(source: ServicoCustomizado, mutator: (draft: MutableModel<ServicoCustomizado>) => MutableModel<ServicoCustomizado> | void): ServicoCustomizado;
}

type EagerServico = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Servico, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cep: string;
  readonly endereco: string;
  readonly numero: string;
  readonly complemento?: string | null;
  readonly bairro: string;
  readonly cidade: string;
  readonly estado: Estados | keyof typeof Estados;
  readonly referencia?: string | null;
  readonly observacoes?: string | null;
  readonly tipo: Servicos | keyof typeof Servicos;
  readonly bike_marca_modelo: string;
  readonly cliente_email: string;
  readonly cliente_telefone: string;
  readonly cliente_nome?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServico = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Servico, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cep: string;
  readonly endereco: string;
  readonly numero: string;
  readonly complemento?: string | null;
  readonly bairro: string;
  readonly cidade: string;
  readonly estado: Estados | keyof typeof Estados;
  readonly referencia?: string | null;
  readonly observacoes?: string | null;
  readonly tipo: Servicos | keyof typeof Servicos;
  readonly bike_marca_modelo: string;
  readonly cliente_email: string;
  readonly cliente_telefone: string;
  readonly cliente_nome?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Servico = LazyLoading extends LazyLoadingDisabled ? EagerServico : LazyServico

export declare const Servico: (new (init: ModelInit<Servico>) => Servico) & {
  copyOf(source: Servico, mutator: (draft: MutableModel<Servico>) => MutableModel<Servico> | void): Servico;
}