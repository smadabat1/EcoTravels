/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutFlightsImport } from './routes/_layout/flights'
import { Route as LayoutFaqImport } from './routes/_layout/faq'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutFlightsRoute = LayoutFlightsImport.update({
  id: '/flights',
  path: '/flights',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutFaqRoute = LayoutFaqImport.update({
  id: '/faq',
  path: '/faq',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/faq': {
      id: '/_layout/faq'
      path: '/faq'
      fullPath: '/faq'
      preLoaderRoute: typeof LayoutFaqImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/flights': {
      id: '/_layout/flights'
      path: '/flights'
      fullPath: '/flights'
      preLoaderRoute: typeof LayoutFlightsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutFaqRoute: typeof LayoutFaqRoute
  LayoutFlightsRoute: typeof LayoutFlightsRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutFaqRoute: LayoutFaqRoute,
  LayoutFlightsRoute: LayoutFlightsRoute,
  LayoutIndexRoute: LayoutIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/faq': typeof LayoutFaqRoute
  '/flights': typeof LayoutFlightsRoute
  '/': typeof LayoutIndexRoute
}

export interface FileRoutesByTo {
  '/faq': typeof LayoutFaqRoute
  '/flights': typeof LayoutFlightsRoute
  '/': typeof LayoutIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/faq': typeof LayoutFaqRoute
  '/_layout/flights': typeof LayoutFlightsRoute
  '/_layout/': typeof LayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/faq' | '/flights' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/faq' | '/flights' | '/'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/faq'
    | '/_layout/flights'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/faq",
        "/_layout/flights",
        "/_layout/"
      ]
    },
    "/_layout/faq": {
      "filePath": "_layout/faq.tsx",
      "parent": "/_layout"
    },
    "/_layout/flights": {
      "filePath": "_layout/flights.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
