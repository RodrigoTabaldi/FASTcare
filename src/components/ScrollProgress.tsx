import { useScrollProgress } from "../hooks";
export default function ScrollProgress() {
  useScrollProgress();
  return <div id="progress" aria-hidden="true" />;
}
