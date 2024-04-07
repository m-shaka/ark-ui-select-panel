import {
  Combobox,
  Popover,
  useComboboxContext,
  usePopoverContext,
} from "@ark-ui/react";
import { CheckIcon } from "@primer/octicons-react";
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

type ContentProps = Omit<
  React.ComponentProps<typeof Combobox.Root>,
  | "openOnClick"
  | "closeOnSelect"
  | "allowCustomValue"
  | "present"
  | "selectionBehavior"
  | "inputBehavior"
>;

export const Content = ({ className, ...props }: ContentProps) => {
  return (
    <Popover.Positioner>
      <Popover.Content className="select-panel-content">
        <Combobox.Root
          {...props}
          className={clsx("select-panel-combobox-root", className)}
          openOnClick
          closeOnSelect={false}
          allowCustomValue
          present
          selectionBehavior="preserve"
          inputBehavior="autohighlight"
        />
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

type DescriptionProps = React.ComponentProps<typeof Popover.Description>;
export const Description = ({ className, ...props }: DescriptionProps) => (
  <Popover.Description
    {...props}
    className={clsx("select-panel-description", className)}
  />
);

type InputControlProps = React.ComponentProps<typeof Combobox.Control>;
export const InputControl = (props: InputControlProps) => (
  <Combobox.Control className="select-panel-input-control" {...props} />
);

type InputProps = React.ComponentProps<typeof Combobox.Input>;
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, onKeyDown, onFocus, ...props },
  ref,
) {
  const comboboxContext = useComboboxContext();
  const popoverContext = usePopoverContext();

  return (
    <Combobox.Input
      {...props}
      ref={ref}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          popoverContext.close();
        }
        onKeyDown?.(event);
      }}
      onFocus={(event) => {
        comboboxContext.open();
        event.target.value = "";
        onFocus?.(event);
      }}
      className={clsx("select-panel-input", className)}
    />
  );
});

export const Separator = (props: React.ComponentProps<"div">) => (
  <div {...props} className="select-panel-separator" />
);

type ItemListProps = React.ComponentProps<typeof Combobox.Content>;

export const ItemList = ({ className, ...props }: ItemListProps) => (
  <Combobox.Content
    {...props}
    className={clsx("select-panel-item-list", className)}
  />
);

type ItemProps = React.ComponentProps<typeof Combobox.Item>;
export const Item = ({ className, ...props }: ItemProps) => (
  <Combobox.Item {...props} className={clsx("select-panel-item", className)} />
);

type ItemIndicatorProps = Omit<
  React.ComponentProps<typeof Combobox.ItemIndicator>,
  "children" | "asChild"
>;
export const ItemIndicator = ({ className, ...props }: ItemIndicatorProps) => (
  <Combobox.ItemIndicator
    {...props}
    className={clsx("select-panel-item-indicator", className)}
  >
    <CheckIcon size={16} />
  </Combobox.ItemIndicator>
);

type ItemTextProps = React.ComponentProps<typeof Combobox.ItemText>;

export const ItemText = ({ className, ...props }: ItemTextProps) => (
  <Combobox.ItemText
    {...props}
    className={clsx("select-panel-item-text", className)}
  />
);
