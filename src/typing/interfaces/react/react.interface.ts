export interface ReactBaseProps {
  children?: React.ReactNode | React.ReactNode[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentRegistry = Record<string, React.ComponentType<any>>;
