# 🚀 create-browser-extension-cli

A simple CLI tool to quickly scaffold boilerplate for Chrome and Firefox extensions, similar to `create-react-app`. Get a head start with an un-opinionated project structure and prebuilt templates for cross-browser support.

## ✨ Features

- ⚡ Generate boilerplate code for **Chrome** and **Firefox** extensions
- 🔄 **Hot Module Replacement (HMR)** for Chrome extensions, ensuring smooth development
- 🖥️ Single codebase for **multiple browsers**
- 📦 Preconfigured **Webpack** setup for both development and production environments
- 🛠️ Extendable and flexible project structure

## 📥 Installation

To install the CLI globally, run:

```sh
npm install -g create-browser-extension-cli
```

## 🛠️ Usage

To create a new browser extension project, run the following command:

```sh
create-browser-extension <project-name>
```

You will be prompted to choose the browsers you wish to support (Chrome, Firefox, or both).

### Example

```sh
create-browser-extension my-extension
```

This will generate a project in the `my-extension` folder.

## 🗂️ Project Structure

Once generated, your project will have the following structure:

```bash
<project-name>/
  ├── config/
  │   ├── manifest-chrome.json       # Chrome-specific manifest file
  │   └── manifest-firefox.json      # Firefox-specific manifest file
  ├── src/
  │   ├── background.js              # Background script for the extension
  │   └── popup/
  │       └── popup.js               # Popup script
  ├── webpack/
  │   ├── webpack.common.js          # Shared Webpack configuration
  │   ├── webpack.dev.js             # Development-specific Webpack configuration
  │   └── webpack.prod.js            # Production-specific Webpack configuration
  ├── package.json
  └── README.md                      # Project documentation
```

## 📜 Available Scripts

The following scripts are preconfigured in the generated `package.json`:

- **`dev:chrome`**: Starts the development server with HMR for Chrome 🔄
- **`build:chrome`**: Builds the extension for Chrome 🏗️
- **`build:firefox`**: Builds the extension for Firefox 🦊

### Running Scripts

To run the available scripts, navigate to your project directory and use `npm run` followed by the script name. For example, to start the development server for Chrome:

```bash
cd my-extension
npm run dev:chrome
```

## 🛠️ Development

During development, you can use the following command to start the development server with **Hot Module Replacement (HMR)** for Chrome:

```bash
npm run dev:chrome
```

This uses the configuration from `webpack/webpack.dev.js` to enable rapid development by automatically reloading code changes without manually refreshing the extension.

## 🏗️ Building

To create production-ready builds, use the following commands:

- Build for **Chrome**:

  ```bash
  npm run build:chrome
  ```

- Build for **Firefox**:

  ```bash
  npm run build:firefox
  ```

These commands will use the configuration from `webpack/webpack.prod.js` to create optimized builds for the respective browsers.

## 🌐 Browser Compatibility

The CLI supports both **Chrome** and **Firefox**, and the generated project structure allows you to share a common codebase for both browsers. You can still customize specific features by modifying the respective `manifest-chrome.json` and `manifest-firefox.json` files.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this CLI or fix any issues, feel free to submit a pull request or open an issue. Let's build together! 💪

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

Happy coding! 🚀🎉
