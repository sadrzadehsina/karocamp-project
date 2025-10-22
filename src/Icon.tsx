import * as Icons from "react-icons/fa";

type IconName = keyof typeof Icons;

export function Icon({ name, color }: { name: IconName; color?: string }) {
  const IconComponent = Icons[name];
  return <IconComponent {...{ className: color }} />;
}
