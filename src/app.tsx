import { SelectPanel } from "./select-panel/index.js";

function App() {
  return (
    <div>
      <SelectPanel.Root>
        <SelectPanel.Trigger>
          <button type="button">Open</button>
        </SelectPanel.Trigger>
        <SelectPanel.Content>Content</SelectPanel.Content>
      </SelectPanel.Root>
    </div>
  );
}

export default App;
