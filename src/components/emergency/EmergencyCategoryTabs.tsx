import { EMERGENCY_CATEGORIES, EmergencyType } from "@/constants/emergencyCategories";
import { Button } from "@/components/ui/button";

interface Props {
  active: EmergencyType;
  onChange: (category: EmergencyType) => void;
}

export function EmergencyCategoryTabs({ active, onChange }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {EMERGENCY_CATEGORIES.map((cat) => (
        <Button
          key={cat.value}
          variant={active === cat.value ? "default" : "outline"}
          onClick={() => onChange(cat.value)}
        >
          {cat.label}
        </Button>
      ))}
    </div>
  );
}
