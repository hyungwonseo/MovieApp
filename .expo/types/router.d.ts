/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/mypage` | `/mypage`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownInputParams; } | { pathname: `/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/login`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/mypage` | `/mypage`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownOutputParams; } | { pathname: `/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/login${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/mypage${`?${string}` | `#${string}` | ''}` | `/mypage${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/search${`?${string}` | `#${string}` | ''}` | `/search${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/mypage` | `/mypage`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownInputParams; } | `/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | { pathname: `/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
