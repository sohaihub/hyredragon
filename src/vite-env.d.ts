
/// <reference types="vite/client" />

interface Window {
  google?: {
    accounts: {
      id: {
        initialize: (config: {
          client_id: string;
          callback: (response: { credential: string }) => void;
          auto_prompt?: boolean;
        }) => void;
        prompt: () => void;
        renderButton: (element: HTMLElement, options: any) => void;
      };
    };
  };
}
