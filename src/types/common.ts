export type DetailItem = {
  id: string;
  title: string;
  description?: string;
  points?: string[];
  solutions?: string[];
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
};