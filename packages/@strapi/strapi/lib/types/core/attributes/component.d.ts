import { Attribute, ConfigurableOption, MinMaxOption, PrivateOption, RequiredOption } from '@strapi/strapi/lib/types/core/attributes/base';
import { GetAttributesValues } from '@strapi/strapi/lib/types/core/attributes/utils';

export interface ComponentAttributeProperties<
  // Targeted component
  T extends Strapi.ComponentUIDs,
  // Repeatable
  R extends boolean = false
> {
  component: T;
  repeatable?: R;
}

export type ComponentAttribute<
  // Targeted component
  T extends Strapi.ComponentUIDs,
  // Repeatable
  R extends boolean = false
> = Attribute<'component'> &
  // Component Properties
  ComponentAttributeProperties<T, R> &
  // Options
  ConfigurableOption &
  MinMaxOption &
  PrivateOption &
  RequiredOption;

export type ComponentValue<
  T extends Strapi.ComponentUIDs,
  R extends boolean
> = GetAttributesValues<T> extends infer V ? (R extends true ? V[] : V) : never;

export type GetComponentAttributeValue<T extends Attribute> = T extends ComponentAttribute<
  infer U,
  infer R
>
  ? ComponentValue<U, R>
  : never;
