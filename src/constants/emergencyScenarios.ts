export interface Scenario {
  label: string;
  prompt: string;
}

export const EMERGENCY_SCENARIOS: Scenario[] = [
  {
    label: "Fainting",
    prompt: "Provide step-by-step instructions for helping a person who has fainted, including laying them down and checking for breathing.",
  },
  {
    label: "Burn",
    prompt: "Provide first-aid instructions for treating a minor burn, including cooling, covering, and pain relief tips.",
  },
  {
    label: "Choking",
    prompt: "Provide first-aid instructions for a choking emergency, including Heimlich maneuver or back blows depending on age.",
  },
  {
    label: "Heart Attack",
    prompt: "Provide immediate guidance for someone experiencing a heart attack, including calling emergency services, administering aspirin, and CPR if necessary.",
  },
  {
    label: "Fracture",
    prompt: "Provide instructions to immobilize a suspected broken bone and reduce pain before professional help arrives.",
  },
  {
    label: "Severe Bleeding",
    prompt: "Provide instructions to stop severe bleeding using direct pressure, elevation, and tourniquet if needed.",
  },
  {
    label: "Stroke",
    prompt: "Provide urgent steps to recognize a stroke using FAST method and ensure immediate hospital transfer.",
  },
  {
    label: "Electric Shock",
    prompt: "Provide first-aid steps after an electric shock, including turning off power, checking breathing, and seeking help.",
  },
  {
    label: "Allergic Reaction",
    prompt: "Provide guidance for a severe allergic reaction, including using an epinephrine auto-injector and calling emergency services.",
  },
  {
    label: "Drowning",
    prompt: "Provide immediate steps for helping someone who is drowning, including rescue, CPR, and keeping airway clear.",
  },
  {
    label: "Snake Bite",
    prompt: "Provide first-aid instructions for a snake bite, including immobilization, keeping calm, and seeking urgent medical attention.",
  },
  {
    label: "Hypothermia",
    prompt: "Provide instructions to treat hypothermia, including warming, removing wet clothes, and monitoring vital signs.",
  },
  {
    label: "Heat Stroke",
    prompt: "Provide immediate steps to treat heat stroke, including moving to shade, cooling body, and hydration.",
  },
];
