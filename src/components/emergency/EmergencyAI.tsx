import { useState } from "react";
import { EMERGENCY_SCENARIOS, Scenario } from "@/constants/emergencyScenarios";
import { Button } from "@/components/ui/button";

// Placeholder for Gemini API call
async function fetchAIResponse(prompt: string): Promise<string> {
  // Replace this with actual Gemini API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`AI Guidance for: "${prompt}"\n\n1. Stay calm.\n2. Assess the situation.\n3. Follow proper steps carefully.`);
    }, 1000);
  });
}

export function EmergencyAI() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleScenarioClick = async (scenario: Scenario) => {
    setLoading(true);
    const aiResponse = await fetchAIResponse(scenario.prompt);
    setResponse(aiResponse);
    setLoading(false);
  };

  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-xl font-semibold">🧠 Emergency AI Guidance</h2>
      
      <div className="flex flex-wrap gap-2">
        {EMERGENCY_SCENARIOS.map((scenario) => (
          <Button key={scenario.label} onClick={() => handleScenarioClick(scenario)}>
            {scenario.label}
          </Button>
        ))}
      </div>

      <div className="mt-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 min-h-[80px]">
        {loading && <p>Loading AI instructions...</p>}
        {!loading && response && <pre className="whitespace-pre-wrap">{response}</pre>}
        {!loading && !response && <p>Select an emergency scenario to get guidance.</p>}
      </div>
    </div>
  );
}
