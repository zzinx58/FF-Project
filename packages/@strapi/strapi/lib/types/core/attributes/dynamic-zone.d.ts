import { SchemaUID, GetArrayValues } from '@strapi/strapi/lib/types/utils';
import { Attribute, ConfigurableOption, MinMaxOption, RequiredOption } from '@strapi/strapi/lib/types/core/attributes/base';
import { GetAttributesValues } from '@strapi/strapi/lib/types/core/attributes/utils';

export interface DynamicZoneAttributeProperties<T extends Strapi.ComponentUIDs[] = []> {
  components: T;
}

export type DynamicZoneAttribute<T extends Strapi.ComponentUIDs[] = []> = Attribute<'dynamiczone'> &
  // Properties
  DynamicZoneAttributeProperties<T> &
  // Options
  ConfigurableOption &
  MinMaxOption &
  RequiredOption;

type DynamicZoneValue<T extends Strapi.ComponentUIDs[]> = Array<
  GetArrayValues<T> extends infer P
    ? P extends SchemaUID
      ? GetAttributesValues<P> & { __component: P }
      : never
    : never
>;

export type GetDynamicZoneAttributeValue<T extends Attribute> = T extends DynamicZoneAttribute<
  infer U
>
  ? DynamicZoneValue<U>
  : never;
