import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  PrivateOption,
  RequiredOption,
  UniqueOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export type TimeAttribute = Attribute<'time'> &
  // Options
  ConfigurableOption &
  DefaultOption<TimeValue> &
  PrivateOption &
  RequiredOption &
  UniqueOption;

export type TimeValue = string;

export type GetTimeAttributeValue<T extends Attribute> = T extends TimeAttribute
  ? TimeValue
  : never;
