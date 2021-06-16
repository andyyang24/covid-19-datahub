import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <Switch.Label className="cursor-pointer m-6 text-gray-50 text-lg">
        Switch Tanggle
      </Switch.Label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-pink-400" : "bg-white"
        } relative shadow-md inline-flex items-center h-6 rounded-full w-11 transition transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        <span
          className={`${
            enabled ? "translate-x-6 bg-white" : "translate-x-1 bg-pink-400"
          } inline-block shadow-md  w-4 h-4 transform transform duration-200 rounded-full transition-transform`}
        />
      </Switch>
    </Switch.Group>
  );
}
