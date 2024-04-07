import { Popover } from "@ark-ui/react";
import { clsx } from "clsx";
import "./select-panel.css";

type RootProps = Omit<
  React.ComponentProps<typeof Popover.Root>,
  "unmountOnExit" | "lazyMount"
>;
export const Root = ({ positioning, ...props }: RootProps) => {
  return (
    <Popover.Root
      {...props}
      unmountOnExit
      lazyMount
      positioning={positioning ?? { placement: "bottom-start" }}
    />
  );
};

export const Trigger = ({ children }: { children: React.ReactNode }) => (
  <Popover.Trigger asChild>{children}</Popover.Trigger>
);

type ContentProps = React.ComponentProps<typeof Popover.Content>;

export const Content = ({ className, ...props }: ContentProps) => {
  return (
    <Popover.Positioner>
      <Popover.Content
        {...props}
        className={clsx("select-panel-content", className)}
      />
    </Popover.Positioner>
  );
};
