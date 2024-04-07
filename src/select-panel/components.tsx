import { Popover } from "@ark-ui/react";
import { clsx } from "clsx";
import { forwardRef } from "react";
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

export const Content = forwardRef<
  React.ElementRef<typeof Popover.Content>,
  ContentProps
>(function Content({ className, ...props }, ref) {
  return (
    <Popover.Positioner>
      <Popover.Content
        {...props}
        ref={ref}
        className={clsx("select-panel-content", className)}
      />
    </Popover.Positioner>
  );
});
