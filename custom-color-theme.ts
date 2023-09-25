import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': 'var(--color-surface-900)',
		'--theme-font-color-dark': 'var(--color-tertiary-50)',
		'--theme-rounded-base': '24px',
		'--theme-rounded-container': '12px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #aa4c4b
		'--color-primary-50': '242 228 228', // #f2e4e4
		'--color-primary-100': '238 219 219', // #eedbdb
		'--color-primary-200': '234 210 210', // #ead2d2
		'--color-primary-300': '221 183 183', // #ddb7b7
		'--color-primary-400': '196 130 129', // #c48281
		'--color-primary-500': '170 76 75', // #aa4c4b
		'--color-primary-600': '153 68 68', // #994444
		'--color-primary-700': '128 57 56', // #803938
		'--color-primary-800': '102 46 45', // #662e2d
		'--color-primary-900': '83 37 37', // #532525
		// secondary | #324f4d
		'--color-secondary-50': '224 229 228', // #e0e5e4
		'--color-secondary-100': '214 220 219', // #d6dcdb
		'--color-secondary-200': '204 211 211', // #ccd3d3
		'--color-secondary-300': '173 185 184', // #adb9b8
		'--color-secondary-400': '112 132 130', // #708482
		'--color-secondary-500': '50 79 77', // #324f4d
		'--color-secondary-600': '45 71 69', // #2d4745
		'--color-secondary-700': '38 59 58', // #263b3a
		'--color-secondary-800': '30 47 46', // #1e2f2e
		'--color-secondary-900': '25 39 38', // #192726
		// tertiary | #404e5c
		'--color-tertiary-50': '226 228 231', // #e2e4e7
		'--color-tertiary-100': '217 220 222', // #d9dcde
		'--color-tertiary-200': '207 211 214', // #cfd3d6
		'--color-tertiary-300': '179 184 190', // #b3b8be
		'--color-tertiary-400': '121 131 141', // #79838d
		'--color-tertiary-500': '64 78 92', // #404e5c
		'--color-tertiary-600': '58 70 83', // #3a4653
		'--color-tertiary-700': '48 59 69', // #303b45
		'--color-tertiary-800': '38 47 55', // #262f37
		'--color-tertiary-900': '31 38 45', // #1f262d
		// success | #e5969c
		'--color-success-50': '251 239 240', // #fbeff0
		'--color-success-100': '250 234 235', // #faeaeb
		'--color-success-200': '249 229 230', // #f9e5e6
		'--color-success-300': '245 213 215', // #f5d5d7
		'--color-success-400': '237 182 186', // #edb6ba
		'--color-success-500': '229 150 156', // #e5969c
		'--color-success-600': '206 135 140', // #ce878c
		'--color-success-700': '172 113 117', // #ac7175
		'--color-success-800': '137 90 94', // #895a5e
		'--color-success-900': '112 74 76', // #704a4c
		// warning | #b8804c
		'--color-warning-50': '244 236 228', // #f4ece4
		'--color-warning-100': '241 230 219', // #f1e6db
		'--color-warning-200': '237 223 210', // #eddfd2
		'--color-warning-300': '227 204 183', // #e3ccb7
		'--color-warning-400': '205 166 130', // #cda682
		'--color-warning-500': '184 128 76', // #b8804c
		'--color-warning-600': '166 115 68', // #a67344
		'--color-warning-700': '138 96 57', // #8a6039
		'--color-warning-800': '110 77 46', // #6e4d2e
		'--color-warning-900': '90 63 37', // #5a3f25
		// error | #7d4a63
		'--color-error-50': '236 228 232', // #ece4e8
		'--color-error-100': '229 219 224', // #e5dbe0
		'--color-error-200': '223 210 216', // #dfd2d8
		'--color-error-300': '203 183 193', // #cbb7c1
		'--color-error-400': '164 128 146', // #a48092
		'--color-error-500': '125 74 99', // #7d4a63
		'--color-error-600': '113 67 89', // #714359
		'--color-error-700': '94 56 74', // #5e384a
		'--color-error-800': '75 44 59', // #4b2c3b
		'--color-error-900': '61 36 49', // #3d2431
		// surface | #535050
		'--color-surface-50': '229 229 229', // #e5e5e5
		'--color-surface-100': '221 220 220', // #dddcdc
		'--color-surface-200': '212 211 211', // #d4d3d3
		'--color-surface-300': '186 185 185', // #bab9b9
		'--color-surface-400': '135 133 133', // #878585
		'--color-surface-500': '83 80 80', // #535050
		'--color-surface-600': '75 72 72', // #4b4848
		'--color-surface-700': '62 60 60', // #3e3c3c
		'--color-surface-800': '50 48 48', // #323030
		'--color-surface-900': '41 39 39' // #292727
	}
};
