import { BaseContext } from 'koa';
import { Strapi } from '@strapi/strapi';

interface PolicyContext extends BaseContext {
  type: string;
  is(name): boolean;
}

export type Policy<T = unknown> = (
  ctx: PolicyContext,
  cfg: T,
  { strapi: Strapi }
) => boolean | undefined;
