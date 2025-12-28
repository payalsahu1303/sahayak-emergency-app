const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export async function getEmergencyGuidance(prompt: string) {
  const response = await fetch(
    `${GEMINI_API_URL}?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
You are an emergency response assistant.
Give calm, clear, step-by-step guidance.
Avoid medical diagnosis.
Emergency situation:
${prompt}
                `,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text;
}
