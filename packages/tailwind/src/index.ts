import type { Config } from 'tailwindcss'

// We want each package to be responsible for its own content.
const preset: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#fcfdfa',
          2: '#f9fcee',
          3: '#f1fcc7',
          4: '#e8f6aa',
          5: '#deee8f',
          6: '#d0df83',
          7: '#c0ce79',
          8: '#a9b953',
          9: '#dbf23c',
          10: '#d2e748',
          11: '#727e15',
          12: '#3a3f22',

          a1: '#66990005',
          a2: '#a5d20011',
          a3: '#c0f20038',
          a4: '#bae40055',
          a5: '#b4d90070',
          a6: '#9fbe007c',
          a7: '#88a20086',
          a8: '#809700ac',
          a9: '#d0ee00c3',
          a10: '#c0de00b7',
          a11: '#657200ea',
          a12: '#1c2200dd',

          contrast: '#20240c',
          surface: '#f8fbeacc',
          indicator: '#dbf23c',
          track: '#dbf23c',
        },
        gray: {
          1: '#fbfdfc',
          2: '#f7f9f8',
          3: '#eef0ef',
          4: '#e6e9e7',
          5: '#dfe1e0',
          6: '#d7dad8',
          7: '#cccfcd',
          8: '#b8bcba',
          9: '#878e8b',
          10: '#7d8481',
          11: '#606563',
          12: '#1b211f',
          a1: '#00804004',
          a2: '#00402008',
          a3: '#001e0f11',
          a4: '#001f0b19',
          a5: '#00100820',
          a6: '#00140728',
          a7: '#000f0533',
          a8: '#000f0847',
          a9: '#000f0978',
          a10: '#000e0882',
          a11: '#0008059f',
          a12: '#000705e4',
          contrast: '#ffffff',
          surface: '#ffffffcc',
          indicator: '#878e8b',
          track: '#878e8b',
        },
      },
    },
  },
  plugins: [],
}
export default preset
