import { Attribute, ConfigurableOption, PrivateOption, RequiredOption } from '@strapi/strapi/lib/types/core/attributes/base';
import { JSON } from '@strapi/strapi/lib/types/core/attributes/common';

export type JSONAttribute = Attribute<'json'> &
  //Options
  ConfigurableOption &
  RequiredOption &
  PrivateOption;

export type JsonValue = JSON;

export type GetJsonAttributeValue<T extends Attribute> = T extends JSONAttribute
  ? JsonValue
  : never;
