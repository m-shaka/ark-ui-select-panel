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
  "Quince"
];


function App() {
  return (
    <div>
      <SelectPanel.Root>
        <SelectPanel.Trigger>
          <button type="button">Open</button>
        </SelectPanel.Trigger>
        <SelectPanel.Content>
          <SelectPanel.Header>
            <SelectPanel.Title>Select an item</SelectPanel.Title>
            <SelectPanel.Description>
              This is a description. This is a description. This is a
              description
            </SelectPanel.Description>
          </SelectPanel.Header>
          <SelectPanel.ItemControl items={fruits}>
            <SelectPanel.InputControl>
              <SelectPanel.Input />
            </SelectPanel.InputControl>
            <SelectPanel.Separator />
            <SelectPanel.ItemList>
              {fruits.map(fruit => (
                <SelectPanel.Item key={fruit} item={fruit}>
                  <SelectPanel.ItemIndicator />
                  <SelectPanel.ItemText>{fruit}</SelectPanel.ItemText>
                </SelectPanel.Item>
              ))}
            </SelectPanel.ItemList>
          </SelectPanel.ItemControl>
        </SelectPanel.Content>
      </SelectPanel.Root>
    </div>
  );
}

export default App;
