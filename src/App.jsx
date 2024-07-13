import "./App.css";
import { Link, Switch, Route } from "wouter";
import Index from "./pages/Index.jsx";
import Todos from "./pages/Todos.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex justify-around">
          <Link className="btn btn-ghost text-xl" href="/">
            Home
          </Link>
          <Link className="btn btn-ghost text-xl" href="/todos">
            Todos
          </Link>
        </div>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/todos" component={Todos} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </QueryClientProvider>
    </>
  );
}

export default App;
