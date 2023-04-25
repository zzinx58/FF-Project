import {
  Attribute,
  ConfigurableOption,
  DefaultOption,
  MinMaxLengthOption,
  PrivateOption,
  RequiredOption,
} from '@strapi/strapi/lib/types/core/attributes/base';

export type RichTextAttribute = Attribute<'richtext'> &
  // Options
  ConfigurableOption &
  DefaultOption<RichTextValue> &
  MinMaxLengthOption &
  PrivateOption &
  RequiredOption;

export type RichTextValue = string;

export type GetRichTextAttributeValue<T extends Attribute> = T extends RichTextAttribute
  ? RichTextValue
  : never;
