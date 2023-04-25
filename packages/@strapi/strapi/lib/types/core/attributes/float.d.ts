import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  MinMaxOption,
  PrivateOption,
  RequiredOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export type FloatAttribute = Attribute<'float'> &
  // Options
  ConfigurableOption &
  DefaultOption<FloatValue> &
  MinMaxOption &
  PrivateOption &
  RequiredOption;

export type FloatValue = number;

export type GetFloatAttributeValue<T extends Attribute> = T extends FloatAttribute
  ? FloatValue
  : never;
