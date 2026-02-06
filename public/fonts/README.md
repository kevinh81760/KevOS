# Custom Fonts Setup

This directory contains the custom fonts used in your KevOS portfolio. To ensure fonts display correctly on all devices, please add your font files to the appropriate subdirectories.

## Required Font Files

### Helvetica Neue (`helvetica-neue/`)
Add the following files:
- `HelveticaNeue-Regular.woff2` (and `.woff` for fallback)
- `HelveticaNeue-Medium.woff2` (and `.woff` for fallback)
- `HelveticaNeue-Bold.woff2` (and `.woff` for fallback)

**Used in:** Body text, headings, main layout

### Akzidenz-Grotesk (`akzidenz-grotesk/`)
Add the following files:
- `AkzidenzGrotesk-Regular.woff2` (and `.woff` for fallback)
- `AkzidenzGrotesk-Medium.woff2` (and `.woff` for fallback)

**Used in:** About page paragraph text

### Bjork (`bjork/`)
Add the following files:
- `Bjork-Regular.woff2` (and `.woff` for fallback)

**Used in:** KevOS title animation

## Converting Font Files

If you have `.ttf` or `.otf` files instead of `.woff2`, use one of these free online converters:

1. **Transfonter** (https://transfonter.org/)
   - Upload your font files
   - Select "WOFF2" and "WOFF" formats
   - Click "Convert"
   - Download and extract to appropriate folders

2. **CloudConvert** (https://cloudconvert.com/ttf-to-woff2)
   - Simple TTF/OTF to WOFF2 conversion

3. **FontSquirrel Webfont Generator** (https://www.fontsquirrel.com/tools/webfont-generator)
   - More advanced options
   - Includes subsetting and optimization

## File Naming Convention

Make sure your font files match the exact names referenced in `src/app/globals.css`:
- Use the exact case (e.g., `HelveticaNeue-Regular`, not `helveticaneue-regular`)
- Include weight suffixes: `-Regular`, `-Medium`, `-Bold`
- Use `.woff2` as primary format (best compression)
- Include `.woff` as fallback for older browsers

## Testing

After adding your font files:
1. Restart your development server (`bun dev`)
2. Open the website in your browser
3. Check the Network tab in DevTools to verify fonts are loading
4. Test on different pages (Home, About, Experience)

## Fallbacks

If fonts fail to load, the following fallbacks are configured:
- **Helvetica Neue** → Helvetica → Arial → sans-serif
- **Akzidenz-Grotesk** → -apple-system → BlinkMacSystemFont → sans-serif
- **Bjork** → sans-serif
