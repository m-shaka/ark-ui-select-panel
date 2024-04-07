import { Popover } from "@ark-ui/react";
import { XIcon } from "@primer/octicons-react";
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

export const Header = ({
  className,
  ...props
}: React.ComponentProps<"header">) => (
  <header {...props} className={clsx("select-panel-header", className)} />
);

type TitleProps = React.ComponentProps<typeof Popover.Title>;
export const Title = ({ className, ...props }: TitleProps) => (
  <Popover.Title {...props} className={clsx("select-panel-title", className)} />
);

type CloseProps = React.ComponentProps<typeof Popover.CloseTrigger>;
export const Close = ({ className, ...props }: CloseProps) => (
  <Popover.CloseTrigger
    className={clsx("select-panel-close", className)}
    {...props}
  >
    <XIcon size={16} />
  </Popover.CloseTrigger>
);

type DescriptionProps = React.ComponentProps<typeof Popover.Description>;
export const Description = ({ className, ...props }: DescriptionProps) => (
  <Popover.Description
    {...props}
    className={clsx("select-panel-description", className)}
  />
);
