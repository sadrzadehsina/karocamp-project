import { type ReactElement, type ReactNode } from "react";

export function IconNew({ IconComponent }: { IconComponent: ReactNode}) {
  return <IconComponent className="w-20 h-20" />;
}
