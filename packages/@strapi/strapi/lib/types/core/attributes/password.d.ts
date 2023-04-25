import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  MinMaxLengthOption,
  PrivateOption,
  RequiredOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export type PasswordAttribute = Attribute<'password'> &
  // Options
  ConfigurableOption &
  DefaultOption<PasswordValue> &
  MinMaxLengthOption &
  PrivateOption &
  RequiredOption;

export type PasswordValue = string;

export type GetPasswordAttributeValue<T extends Attribute> = T extends PasswordAttribute
  ? PasswordValue
  : never;
