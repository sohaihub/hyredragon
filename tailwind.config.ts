
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
				// Custom Hyregram colors
				hyregram: {
					'dark-bg': '#1A1F2C',
					'darker-bg': '#141824',
					'neon': '#F2FCE2',
					'purple': '#9b87f5',
					'purple-dark': '#7E69AB',
					'purple-vivid': '#8B5CF6',
				},
				// New neon theme colors
				neon: {
					'green': '#E2FF55',
					'green-glow': 'rgba(226, 255, 85, 0.6)',
					'purple': '#9b87f5',
					'purple-glow': 'rgba(155, 135, 245, 0.6)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-light': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.7' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
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
					'50%': { transform: 'translateY(-4px)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.8)', opacity: '0.8' },
					'50%': { transform: 'scale(1.2)', opacity: '0' },
					'100%': { transform: 'scale(0.8)', opacity: '0' },
				},
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(226, 255, 85, 0.2), 0 0 10px rgba(226, 255, 85, 0.1)'
					},
					'50%': { 
						boxShadow: '0 0 10px rgba(226, 255, 85, 0.3), 0 0 20px rgba(226, 255, 85, 0.2)'
					}
				},
				'neon-click': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.5)', opacity: '0.5' },
					'100%': { transform: 'scale(2)', opacity: '0' }
				},
				'subtle-pulse': {
					'0%, 100%': { 
						opacity: '0.7',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.01)'
					}
				},
				'subtle-glow': {
					'0%, 100%': {
						textShadow: '0 0 3px rgba(226, 255, 85, 0.3)'
					},
					'50%': {
						textShadow: '0 0 8px rgba(226, 255, 85, 0.5)'
					}
				},
				'line-appear': {
					'0%': {
						width: '0%',
						opacity: '0'
					},
					'100%': {
						width: '100%',
						opacity: '0.5'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite',
				'pulse-light': 'pulse-light 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'marquee': 'marquee 30s linear infinite',
				'shine': 'shine 2s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.24, 0, 0.38, 1) infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'neon-click': 'neon-click 0.6s ease-out',
				'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
				'subtle-glow': 'subtle-glow 2.5s ease-in-out infinite',
				'line-appear': 'line-appear 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
			},
			backgroundImage: {
				'hyregram-gradient': 'linear-gradient(135deg, #1A1F2C 0%, #141824 100%)',
				'neon-gradient': 'linear-gradient(135deg, #F2FCE2 0%, #D4FCBD 100%)',
				'purple-neon-gradient': 'linear-gradient(135deg, #9b87f5 0%, #8B5CF6 100%)',
				'dragon-gradient': 'linear-gradient(135deg, #E2FF55 0%, #7B78FF 100%)',
				'shine-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
				'premium-dark': 'linear-gradient(135deg, #080820 0%, #1A1A3D 100%)',
				'premium-button': 'linear-gradient(135deg, #191932 0%, #252547 100%)',
				'premium-card': 'linear-gradient(135deg, #0F103E 0%, #191932 100%)',
			},
			transitionTimingFunction: {
				'premium': 'cubic-bezier(0.22, 1, 0.36, 1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
