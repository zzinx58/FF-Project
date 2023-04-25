import { GetArrayValues } from '@strapi/strapi/lib/types/utils';
import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  PrivateOption,
  RequiredOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export interface EnumerationAttributeProperties<T extends string[] = []> {
  enum: T;
}

export type EnumerationAttribute<T extends string[] = []> = Attribute<'enumeration'> &
  EnumerationAttributeProperties<T> &
  // Options
  ConfigurableOption &
  DefaultOption<T> &
  PrivateOption &
  RequiredOption;

export type EnumerationValue<T extends string[]> = GetArrayValues<T>;

export type GetEnumerationAttributeValue<T extends Attribute> = T extends EnumerationAttribute<
  infer U
>
  ? EnumerationValue<U>
  : never;
