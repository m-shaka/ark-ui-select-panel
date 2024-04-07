import { Combobox, Popover } from "@ark-ui/react";
import { XIcon } from "@primer/octicons-react";
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

type ContentProps = React.ComponentProps<typeof Combobox.Root>;

export const Content = ({ className, ...props }: ContentProps) => {
  return (
    <Popover.Positioner>
      <Popover.Content className={clsx("select-panel-content", className)}>
        <Combobox.Root {...props} />
      </Popover.Content>
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

type InputControlProps = React.ComponentProps<typeof Combobox.Control>;
export const InputControl = (props: InputControlProps) => <Combobox.Control className='select-panel-input-control' {...props} />

type InputProps = React.ComponentProps<typeof Combobox.Input>;
export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, ...props }, ref) {
    return (
      <Combobox.Input
        {...props}
        ref={ref}
        className={clsx("select-panel-input", className)}
      />
    );
  }
)

export const Separator = (props: React.ComponentProps<"div">) => (
  <div {...props} className='select-panel-separator' />
)

type ItemListProps = React.ComponentProps<typeof Combobox.Content>;

export const ItemList = ({ className, ...props }: ItemListProps) => (
  <Combobox.Content {...props} className={clsx("select-panel-item-list", className)} />
)
