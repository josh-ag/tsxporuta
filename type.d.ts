import React from "react";

export interface AppContextInterface {}

export type ContextPropType = {
  children: React.ReactNode;
};

export type MenuType = {
  name: string;
  amount: number;
  id: string;
  images: string[];
  variant?: string;
  details: string;
};
