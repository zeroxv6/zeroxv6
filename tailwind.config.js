// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./index.html",
//         "./admin.html",
//         "./js/*.js"
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 primary: {
//                     DEFAULT: '#3b82f6',
//                     dark: '#1d4ed8',
//                     light: '#60a5fa'
//                 },
//                 secondary: {
//                     DEFAULT: '#10b981',
//                     dark: '#047857',
//                     light: '#34d399'
//                 },
//                 background: {
//                     dark: '#0f172a',
//                     light: '#1e293b'
//                 }
//             },
//             fontFamily: {
//                 'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
//             },
//             boxShadow: {
//                 'elegant': '0 10px 25px rgba(0, 0, 0, 0.1)',
//                 'hover': '0 15px 35px rgba(0, 0, 0, 0.2)'
//             },
//             animation: {
//                 'particle-move': 'particleMove 20s linear infinite',
//                 'float': 'float 3s ease-in-out infinite'
//             },
//             keyframes: {
//                 particleMove: {
//                     '0%': {
//                         transform: 'translateY(0) rotate(0deg)',
//                         opacity: '0.7'
//                     },
//                     '100%': {
//                         transform: 'translateY(-100vh) rotate(360deg)',
//                         opacity: '0'
//                     }
//                 },
//                 float: {
//                     '0%, 100%': { transform: 'translateY(0)' },
//                     '50%': { transform: 'translateY(-10px)' }
//                 }
//             }
//         }
//     },
//     plugins: []
// };

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3498db',
                    light: '#5dade2',
                    dark: '#2980b9'
                },
                secondary: {
                    DEFAULT: '#2ecc71',
                    light: '#58d68d',
                    dark: '#27ae60'
                },
                background: {
                    light: '#f4f6f9',
                    white: '#ffffff'
                }
            },
            boxShadow: {
                'vibrant': '0 10px 25px rgba(52, 152, 219, 0.2)',
                'soft': '0 4px 6px rgba(0, 0, 0, 0.1)'
            },
            animation: {
                'gradient-shift': 'gradient-shift 15s ease infinite'
            }
        },
    },
    plugins: [],
}