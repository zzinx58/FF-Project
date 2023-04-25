import { Attribute, ConfigurableOption, PrivateOption, RequiredOption } from '@strapi/strapi/lib/types/core/attributes/base';
import { Media } from '@strapi/strapi/lib/types/core/attributes/common';

export type AllowedMediaTypes = 'images' | 'videos' | 'files' | 'audios';

export interface MediaAttributeProperties<
  // Media Type
  T extends AllowedMediaTypes = undefined,
  // Multiple
  U extends boolean = false
> {
  allowedTypes?: T;
  multiple?: U;
}

export type MediaAttribute<
  // Media Type
  T extends AllowedMediaTypes = undefined,
  // Multiple
  U extends boolean = false
> = Attribute<'media'> &
  // Properties
  MediaAttributeProperties<T, U> &
  // Options
  ConfigurableOption &
  RequiredOption &
  PrivateOption;

export type MediaValue<T extends boolean = false> = T extends true ? Media[] : Media;

export type GetMediaAttributeValue<T extends Attribute> = T extends MediaAttribute<
  infer _U,
  infer S
>
  ? MediaValue<S>
  : never;
