import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  MinMaxOption,
  PrivateOption,
  RequiredOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export type BigIntegerAttribute = Attribute<'biginteger'> &
  // Options
  ConfigurableOption &
  DefaultOption<BigIntegerValue> &
  MinMaxOption<string> &
  PrivateOption &
  RequiredOption;

export type BigIntegerValue = string;

export type GetBigIntegerAttributeValue<T extends Attribute> = T extends BigIntegerAttribute
  ? BigIntegerValue
  : never;
