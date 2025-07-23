// Make sure the Button component exists at the specified path.
// If not, update the import path or create the file.
import { Button } from "../components/ui/button";

export default async function Home() {
  return (
    <>
      <Button>Click me</Button>
    </>
  );
}
