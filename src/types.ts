export interface LazyOptions {
  error?: string
  loading?: string
  observerOptions?: IntersectionObserverInit
  log?: boolean
  logLevel?: 'error' | 'warn' | 'info' | 'debug' | 'log'
  lifecycle?: Lifecycle
  delay?: number
  attempt: number
}

export interface ValueFormatterObject {
  src: string
  error?: string
  loading?: string
  lifecycle?: Lifecycle
  delay?: number
}

export enum LifecycleEnum {
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
}

export type Lifecycle = {
  [x in LifecycleEnum]?: (el?: HTMLElement) => void;
}
