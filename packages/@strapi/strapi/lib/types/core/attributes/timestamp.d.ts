import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  PrivateOption,
  RequiredOption,
  UniqueOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export type TimestampAttribute = Attribute<'timestamp'> &
  // Options
  ConfigurableOption &
  DefaultOption<TimestampValue> &
  PrivateOption &
  RequiredOption &
  UniqueOption;

export type TimestampValue = string;

export type GetTimestampAttributeValue<T extends Attribute> = T extends TimestampAttribute
  ? TimestampValue
  : never;
