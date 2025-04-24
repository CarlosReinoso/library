# Publishing to npm

To publish this package to npm, follow these steps:

1. Make sure you're logged in to npm:

   ```bash
   pnpm login
   ```

2. Build the package:

   ```bash
   pnpm run build
   ```

3. Before publishing, update the version in package.json if needed:

   ```bash
   pnpm version patch  # for bug fixes (1.0.1 -> 1.0.2)
   pnpm version minor  # for new features (1.0.1 -> 1.1.0)
   pnpm version major  # for breaking changes (1.0.1 -> 2.0.0)
   ```

4. Publish the package:
   ```bash
   pnpm publish
   ```

Current version: 1.0.1

---

# Development Guide
