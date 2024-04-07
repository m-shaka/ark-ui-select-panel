import { useState } from "react";
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
  return (
    <div>
      <SelectPanel.Root>
        <SelectPanel.Trigger>
          <button type="button">Open</button>
        </SelectPanel.Trigger>
        <SelectPanel.Content
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
          multiple
        >
          <SelectPanel.Header>
            <SelectPanel.Title>Select an item</SelectPanel.Title>
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
        </SelectPanel.Content>
      </SelectPanel.Root>
    </div>
  );
}

export default App;
