import { Get, KeysBy, NeverGuard, PickBy, SchemaUID } from '@strapi/strapi/lib/types/utils';
import {
  Attribute,
  AttributeType,
  GetBigIntegerAttributeValue,
  GetBooleanAttributeValue,
  GetDecimalAttributeValue,
  GetDynamicZoneAttributeValue,
  GetEnumerationAttributeValue,
  GetFloatAttributeValue,
  GetIntegerAttributeValue,
  GetJsonAttributeValue,
  GetMediaAttributeValue,
  GetPasswordAttributeValue,
  GetRelationAttributeValue,
  GetRichTextAttributeValue,
  GetStringAttributeValue,
  GetTextAttributeValue,
  GetUIDAttributeValue,
  GetComponentAttributeValue,
  GetEmailAttributeValue,
} from '@strapi/strapi/lib/types/core/attributes';
import { GetDateAttributeValue } from '@strapi/strapi/lib/types/core/attributes/date';
import { GetDateTimeAttributeValue } from '@strapi/strapi/lib/types/core/attributes/date-time';
import { GetTimeAttributeValue } from '@strapi/strapi/lib/types/core/attributes/time';
import { GetTimestampAttributeValue } from '@strapi/strapi/lib/types/core/attributes/timestamp';

export type PickTypes<T extends AttributeType> = T;

export type GetAttributesKeysByType<
  T extends SchemaUID,
  U extends AttributeType,
  P = never
> = KeysBy<GetAttributes<T>, Attribute<U> & NeverGuard<P, unknown>>;

export type GetAttributesByType<T extends SchemaUID, U extends AttributeType, P = never> = PickBy<
  GetAttributes<T>,
  Attribute<U> & NeverGuard<P, unknown>
>;

export type GetAttribute<T extends SchemaUID, U extends GetAttributesKey<T>> = Get<
  GetAttributes<T>,
  U
>;

export type GetAttributes<T extends SchemaUID> = Get<Strapi.Schemas[T], 'attributes'>;

export type GetAttributesKey<T extends SchemaUID> = keyof GetAttributes<T>;

export type GetAttributeValue<T extends Attribute> =
  | GetBigIntegerAttributeValue<T>
  | GetBooleanAttributeValue<T>
  | GetComponentAttributeValue<T>
  | GetDecimalAttributeValue<T>
  | GetDynamicZoneAttributeValue<T>
  | GetEnumerationAttributeValue<T>
  | GetEmailAttributeValue<T>
  | GetFloatAttributeValue<T>
  | GetIntegerAttributeValue<T>
  | GetJsonAttributeValue<T>
  | GetMediaAttributeValue<T>
  | GetPasswordAttributeValue<T>
  | GetRelationAttributeValue<T>
  | GetRichTextAttributeValue<T>
  | GetStringAttributeValue<T>
  | GetTextAttributeValue<T>
  | GetUIDAttributeValue<T>
  | GetMediaAttributeValue<T>
  | GetDateAttributeValue<T>
  | GetDateTimeAttributeValue<T>
  | GetTimeAttributeValue<T>
  | GetTimestampAttributeValue<T>;

export type GetAttributeValueByKey<
  T extends SchemaUID,
  U extends GetAttributesKey<T>
> = GetAttribute<T, U> extends infer P
  ? P extends Attribute
    ? GetAttributeValue<P>
    : never
  : never;

export type GetAttributesValues<T extends SchemaUID> = {
  // Handle required attributes
  [key in GetAttributesRequiredKeys<T>]-?: GetAttributeValueByKey<T, key>;
} & {
  // Handle optional attributes
  [key in GetAttributesOptionalKeys<T>]?: GetAttributeValueByKey<T, key>;
};

export type GetAttributesRequiredKeys<T extends SchemaUID> = KeysBy<
  GetAttributes<T>,
  { required: true }
>;
export type GetAttributesOptionalKeys<T extends SchemaUID> = keyof Omit<
  GetAttributes<T>,
  GetAttributesRequiredKeys<T>
>;
