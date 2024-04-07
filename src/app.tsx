import { SelectPanel } from "./select-panel/index.js";

function App() {
  return (
    <div>
      <SelectPanel.Root>
        <SelectPanel.Trigger>
          <button type="button">Open</button>
        </SelectPanel.Trigger>
        <SelectPanel.Content items={[]}>
          <SelectPanel.Header>
            <SelectPanel.Title>Select an item</SelectPanel.Title>
            <SelectPanel.Close />
            <SelectPanel.Description>
              This is a description. This is a description. This is a
              description
            </SelectPanel.Description>
            <SelectPanel.Input />
          </SelectPanel.Header>
        </SelectPanel.Content>
      </SelectPanel.Root>
    </div>
  );
}

export default App;
