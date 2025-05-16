
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom Hyregram colors - simplified
				hyregram: {
					'dark-bg': '#0A0A29',
					'darker-bg': '#080820',
					'neon': '#7B78FF',
					'purple': '#9b87f5',
					'purple-dark': '#7E69AB',
					'purple-vivid': '#7B78FF',
				},
				// Updated neon theme colors - more subtle
				neon: {
					'green': '#E2FF55',
					'green-glow': 'rgba(226, 255, 85, 0.25)',
					'purple': '#7B78FF',
					'purple-glow': 'rgba(123, 120, 255, 0.25)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [
					'Inter',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'sans-serif'
				]
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' },
				},
				'pulse-light': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.6' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(8px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'marquee': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-33.33%)' },
				},
				'shine': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '200% 0%' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.8)', opacity: '0.6' },
					'50%': { transform: 'scale(1.1)', opacity: '0' },
					'100%': { transform: 'scale(0.8)', opacity: '0' },
				},
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(123, 120, 255, 0.15), 0 0 10px rgba(123, 120, 255, 0.1)'
					},
					'50%': { 
						boxShadow: '0 0 8px rgba(123, 120, 255, 0.25), 0 0 15px rgba(123, 120, 255, 0.15)'
					}
				},
				'neon-click': {
					'0%': { transform: 'scale(1)', opacity: '0.5' },
					'50%': { transform: 'scale(1.3)', opacity: '0.3' },
					'100%': { transform: 'scale(1.6)', opacity: '0' }
				},
				'subtle-pulse': {
					'0%, 100%': { 
						opacity: '0.7',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.9',
						transform: 'scale(1.01)'
					}
				},
				'subtle-glow': {
					'0%, 100%': {
						textShadow: '0 0 2px rgba(123, 120, 255, 0.2)'
					},
					'50%': {
						textShadow: '0 0 6px rgba(123, 120, 255, 0.3)'
					}
				},
				'line-appear': {
					'0%': {
						width: '0%',
						opacity: '0'
					},
					'100%': {
						width: '100%',
						opacity: '0.3'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
				'accordion-up': 'accordion-up 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
				'float': 'float 5s cubic-bezier(0.45, 0, 0.55, 1) infinite',
				'pulse-light': 'pulse-light 2.5s cubic-bezier(0.22, 1, 0.36, 1) infinite',
				'fade-in': 'fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'marquee': 'marquee 25s linear infinite',
				'shine': 'shine 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite',
				'bounce-subtle': 'bounce-subtle 1.8s cubic-bezier(0.22, 1, 0.36, 1) infinite',
				'spin-slow': 'spin-slow 7s linear infinite',
				'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.22, 1, 0.36, 1) infinite',
				'neon-pulse': 'neon-pulse 2.5s cubic-bezier(0.22, 1, 0.36, 1) infinite',
				'neon-click': 'neon-click 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'subtle-pulse': 'subtle-pulse 2.5s cubic-bezier(0.22, 1, 0.36, 1) infinite',
				'subtle-glow': 'subtle-glow 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite',
				'line-appear': 'line-appear 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
			},
			backgroundImage: {
				'hyregram-gradient': 'linear-gradient(135deg, #0A0A29 0%, #080820 100%)',
				'neon-gradient': 'linear-gradient(135deg, #7B78FF 0%, #6A67EE 100%)',
				'purple-neon-gradient': 'linear-gradient(135deg, #9b87f5 0%, #7B78FF 100%)',
				'dragon-gradient': 'linear-gradient(135deg, #7B78FF 0%, #E2FF55 100%)',
				'shine-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0) 100%)',
				'premium-dark': 'linear-gradient(135deg, #080820 0%, #0A0A29 100%)',
				'premium-button': 'linear-gradient(135deg, #191932 0%, #232347 100%)',
				'premium-card': 'linear-gradient(135deg, #0F103E 0%, #191932 100%)',
				'subtle-glow': 'radial-gradient(circle, rgba(123, 120, 255, 0.1) 0%, transparent 70%)',
			},
			transitionTimingFunction: {
				'premium': 'cubic-bezier(0.22, 1, 0.36, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
