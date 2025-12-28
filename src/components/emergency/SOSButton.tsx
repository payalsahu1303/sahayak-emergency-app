import emailjs from "emailjs-com";

interface SOSButtonProps {
  latitude: number | null;
  longitude: number | null;
  contacts: string[];
}

export function SOSButton({ latitude, longitude }: SOSButtonProps) {
  const sendSOS = async () => {
    if (!latitude || !longitude) {
      alert("Location not available");
      return;
    }

    const templateParams = {
      user_name: "SOS User",
      user_email: "sos@app.com",
      message: "I am in an emergency. Please help immediately!",
      location: `https://www.google.com/maps?q=${latitude},${longitude}`,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("🚨 SOS Email Sent Successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send SOS email");
    }
  };

  return (
    <button
      onClick={sendSOS}
      className="
        fixed bottom-5 right-5 z-50
        w-16 h-16 md:w-20 md:h-20
        rounded-full bg-red-600 hover:bg-red-700
        text-white shadow-lg
        flex items-center justify-center
        animate-pulse
        transition-colors
      "
      aria-label="Send SOS"
    >
      🚨
    </button>
  );
}
