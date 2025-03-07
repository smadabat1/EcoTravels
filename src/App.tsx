import { Outlet } from "@tanstack/react-router";

function App() {
  return (
    <div className="app-wrapper bg-background flex-1 h-dvh flex flex-col">
      <Outlet />
    </div>
  )
}

export default App;