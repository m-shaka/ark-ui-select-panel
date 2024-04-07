import { GearIcon } from "@primer/octicons-react";
import { useState } from "react";
import "./app.css";
import { SelectPanel } from "./select-panel/index.js";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
];

function App() {
  const [items, setItems] = useState(fruits);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <div className="container">
      <SelectPanel.Root>
        <SelectPanel.Trigger>
          <button type="button" className="trigger-button">
            <GearIcon />
          </button>
        </SelectPanel.Trigger>
        <SelectPanel.Content>
          <SelectPanel.ItemControl
            items={items}
            onInputValueChange={({ value }) => {
              setItems(
                fruits.filter((fruit) =>
                  fruit.toLowerCase().includes(value.toLowerCase()),
                ),
              );
            }}
            onOpenChange={({ open }) => {
              if (!open) {
                setItems(fruits);
              }
            }}
            onValueChange={({ value }) => void setSelectedValues(value)}
            value={selectedValues}
            multiple
            name="fruits"
            form="form"
          >
            <SelectPanel.Header>
              <SelectPanel.Title>Select an item</SelectPanel.Title>
              <SelectPanel.Close />
              <SelectPanel.Description>
                This is a description. This is a description. This is a
                description
              </SelectPanel.Description>
            </SelectPanel.Header>
            <SelectPanel.InputControl>
              <SelectPanel.Input />
            </SelectPanel.InputControl>
            <SelectPanel.Separator />
            <SelectPanel.ItemList>
              {items.map((fruit) => (
                <SelectPanel.Item key={fruit} item={fruit}>
                  <SelectPanel.ItemIndicator />
                  <SelectPanel.ItemText>{fruit}</SelectPanel.ItemText>
                </SelectPanel.Item>
              ))}
            </SelectPanel.ItemList>
          </SelectPanel.ItemControl>
        </SelectPanel.Content>
      </SelectPanel.Root>
      <button
        type="button"
        className="submit-button"
        onClick={() => {
          alert(selectedValues.join(", "));
        }}
        disabled={selectedValues.length === 0}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
