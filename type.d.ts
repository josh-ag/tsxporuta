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

export type ProductPropType = {
  item: any;
  activeSlide: number;
  isExpanded: Boolean;
  setIsExpanded: (arg: Boolean) => void;
  setActiveSlide: (arg: number) => void;
};

type AccordionPropTypes = {
  title: string;
  children: React.ReactNode;
  expanded?: Boolean;
  style?: any;
  index?: number;
  setExpanded?: () => void;
};
