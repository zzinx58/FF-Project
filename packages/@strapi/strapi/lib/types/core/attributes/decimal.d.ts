import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  MinMaxOption,
  PrivateOption,
  RequiredOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export type DecimalAttribute = Attribute<'decimal'> &
  // Options
  ConfigurableOption &
  DefaultOption<DecimalValue> &
  MinMaxOption &
  PrivateOption &
  RequiredOption;

export type DecimalValue = number;

export type GetDecimalAttributeValue<T extends Attribute> = T extends DecimalAttribute
  ? DecimalValue
  : never;
