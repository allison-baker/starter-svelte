import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': 'var(--color-surface-900)',
		'--theme-font-color-dark': 'var(--color-tertiary-50)',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #791400
		'--color-primary-50': '235 220 217', // #ebdcd9
		'--color-primary-100': '228 208 204', // #e4d0cc
		'--color-primary-200': '222 196 191', // #dec4bf
		'--color-primary-300': '201 161 153', // #c9a199
		'--color-primary-400': '161 91 77', // #a15b4d
		'--color-primary-500': '121 20 0', // #791400
		'--color-primary-600': '109 18 0', // #6d1200
		'--color-primary-700': '91 15 0', // #5b0f00
		'--color-primary-800': '73 12 0', // #490c00
		'--color-primary-900': '59 10 0', // #3b0a00
		// secondary | #184765
		'--color-secondary-50': '220 227 232', // #dce3e8
		'--color-secondary-100': '209 218 224', // #d1dae0
		'--color-secondary-200': '197 209 217', // #c5d1d9
		'--color-secondary-300': '163 181 193', // #a3b5c1
		'--color-secondary-400': '93 126 147', // #5d7e93
		'--color-secondary-500': '24 71 101', // #184765
		'--color-secondary-600': '22 64 91', // #16405b
		'--color-secondary-700': '18 53 76', // #12354c
		'--color-secondary-800': '14 43 61', // #0e2b3d
		'--color-secondary-900': '12 35 49', // #0c2331
		// tertiary | #0C2D42
		'--color-tertiary-50': '219 224 227', // #dbe0e3
		'--color-tertiary-100': '206 213 217', // #ced5d9
		'--color-tertiary-200': '194 203 208', // #c2cbd0
		'--color-tertiary-300': '158 171 179', // #9eabb3
		'--color-tertiary-400': '85 108 123', // #556c7b
		'--color-tertiary-500': '12 45 66', // #0C2D42
		'--color-tertiary-600': '11 41 59', // #0b293b
		'--color-tertiary-700': '9 34 50', // #092232
		'--color-tertiary-800': '7 27 40', // #071b28
		'--color-tertiary-900': '6 22 32', // #061620
		// success | #33664D
		'--color-success-50': '224 232 228', // #e0e8e4
		'--color-success-100': '214 224 219', // #d6e0db
		'--color-success-200': '204 217 211', // #ccd9d3
		'--color-success-300': '173 194 184', // #adc2b8
		'--color-success-400': '112 148 130', // #709482
		'--color-success-500': '51 102 77', // #33664D
		'--color-success-600': '46 92 69', // #2e5c45
		'--color-success-700': '38 77 58', // #264d3a
		'--color-success-800': '31 61 46', // #1f3d2e
		'--color-success-900': '25 50 38', // #193226
		// warning | #B98D4A
		'--color-warning-50': '245 238 228', // #f5eee4
		'--color-warning-100': '241 232 219', // #f1e8db
		'--color-warning-200': '238 227 210', // #eee3d2
		'--color-warning-300': '227 209 183', // #e3d1b7
		'--color-warning-400': '206 175 128', // #ceaf80
		'--color-warning-500': '185 141 74', // #B98D4A
		'--color-warning-600': '167 127 67', // #a77f43
		'--color-warning-700': '139 106 56', // #8b6a38
		'--color-warning-800': '111 85 44', // #6f552c
		'--color-warning-900': '91 69 36', // #5b4524
		// error | #663363
		'--color-error-50': '232 224 232', // #e8e0e8
		'--color-error-100': '224 214 224', // #e0d6e0
		'--color-error-200': '217 204 216', // #d9ccd8
		'--color-error-300': '194 173 193', // #c2adc1
		'--color-error-400': '148 112 146', // #947092
		'--color-error-500': '102 51 99', // #663363
		'--color-error-600': '92 46 89', // #5c2e59
		'--color-error-700': '77 38 74', // #4d264a
		'--color-error-800': '61 31 59', // #3d1f3b
		'--color-error-900': '50 25 49', // #321931
		// surface | #00121E
		'--color-surface-50': '217 219 221', // #d9dbdd
		'--color-surface-100': '204 208 210', // #ccd0d2
		'--color-surface-200': '191 196 199', // #bfc4c7
		'--color-surface-300': '153 160 165', // #99a0a5
		'--color-surface-400': '77 89 98', // #4d5962
		'--color-surface-500': '0 18 30', // #00121E
		'--color-surface-600': '0 16 27', // #00101b
		'--color-surface-700': '0 14 23', // #000e17
		'--color-surface-800': '0 11 18', // #000b12
		'--color-surface-900': '0 9 15' // #00090f
	}
};
