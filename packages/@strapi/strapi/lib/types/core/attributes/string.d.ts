import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  MinMaxLengthOption,
  PrivateOption,
  RequiredOption,
  UniqueOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export interface StringAttributeProperties {
  regex?: RegExp;
}

export type StringAttribute = Attribute<'string'> &
  // Properties
  StringAttributeProperties &
  // Options
  ConfigurableOption &
  DefaultOption<StringValue> &
  MinMaxLengthOption &
  PrivateOption &
  UniqueOption &
  RequiredOption;

export type StringValue = string;

export type GetStringAttributeValue<T extends Attribute> = T extends StringAttribute
  ? StringValue
  : never;
