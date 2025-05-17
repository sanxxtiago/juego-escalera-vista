// types.ts
export type Edge = {
    target: string;
    weight: number;
  };
  
  export type Graph = {
    [node: string]: Edge[];
  };