"use client";

import { useContext } from "react";
import { ReducedMotionContext } from "@/components/system/ReducedMotionProvider";

export function useReducedMotion(): boolean {
  return useContext(ReducedMotionContext);
}
