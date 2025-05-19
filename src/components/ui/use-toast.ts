
import { useToast as useToastOriginal, toast as toastOriginal } from "@/hooks/use-toast";

// Custom toast with neon styling
// Create a function that maintains the original toast functionality while adding neon method
const toast = Object.assign(
  // Preserve the original toast function
  (props: Parameters<typeof toastOriginal>[0]) => toastOriginal(props),
  {
    // Add all the original toast properties
    ...toastOriginal,
    // Add our custom neon method
    neon: (title: string, description?: string) => {
      return toastOriginal({
        title,
        description,
        className: "neon-border bg-[#0F103E]/90 text-neon-green",
      });
    },
    // Add custom error method with enhanced visibility
    error: (title: string, description?: string) => {
      return toastOriginal({
        title,
        description,
        variant: "destructive",
        className: "border-red-500 bg-red-950/90 text-white",
      });
    },
    // Add custom success method
    success: (title: string, description?: string) => {
      return toastOriginal({
        title,
        description,
        className: "border-green-500 bg-green-950/90 text-white",
      });
    }
  }
);

// Export the enhanced toast and original useToast
export { useToastOriginal as useToast, toast };
