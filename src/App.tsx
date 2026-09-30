import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCatalog from "./components/TechCatalog";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Page load hole JSON file theke data ana
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch(() => toast.error("Failed to load technologies"))
      .finally(() => setLoading(false));
  }, []);

  // Add to Stack
  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  // Ekta item remove
  const handleRemove = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack`);
  };

  // Shob remove
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared");
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechCatalog
          technologies={technologies}
          stack={stack}
          loading={loading}
          onAdd={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;