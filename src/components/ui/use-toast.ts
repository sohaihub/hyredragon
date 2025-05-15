
import { useToast as useToastOriginal, toast as toastOriginal } from "@/hooks/use-toast";

// Custom toast with neon styling
const toast = {
  ...toastOriginal,
  neon: (title: string, description?: string) => {
    return toastOriginal({
      title,
      description,
      className: "neon-border bg-[#0F103E]/90 text-neon-green",
    });
  }
};

// Export the enhanced toast and original useToast
export { useToastOriginal as useToast, toast };
