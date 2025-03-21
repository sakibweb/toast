# Toast - Easy Tailwind CSS Supported Toast Notifications

**Simple & Stylish Toast Notifications with Tailwind CSS** ✨  Easily add beautiful and functional toast notifications to your website using pure Tailwind CSS.  Display info, warnings, errors, and success messages with just a few lines of JavaScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repo](https://img.shields.io/github/stars/sakibweb/toast?style=social)](https://github.com/sakibweb/toast)

## ✨ Key Features

*   **Tailwind CSS Powered:**  Built entirely with Tailwind CSS for easy customization and seamless integration with your Tailwind projects.
*   **Simple API:**  Easy-to-use JavaScript API for displaying various types of toast notifications.
*   **Multiple Toast Types:**  Supports `info`, `warning`, `danger`, `error`, `success`, `light`, `dark`, and `auto` themes.
*   **Flexible Locations:**  Position toasts in 9 different screen locations: top-left, top-center, top-right, middle-left, middle-center, middle-right, bottom-left, bottom-center, bottom-right.
*   **Automatic Dismissal:**  Toasts automatically disappear after a set time, with hover-pause functionality.
*   **Manual Close Button:**  Each toast includes a close button for manual dismissal.
*   **Lightweight & Fast:**  Minimal JavaScript with no external CSS dependencies.
*   **Pure JavaScript:**  No framework dependencies.
*   **MIT License:**  Free for personal and commercial use.

## 📦 Installation

### CDN (Content Delivery Network)

The quickest way to get started is using the CDN link. Include this script tag in your HTML file, ideally before the closing `</body>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/sakibweb/toast@latest/toast.min.js"></script>
```

> **Note:**  The provided CDN link is a placeholder for development. For production use, it's recommended to:
>
> 1.  **Release on GitHub:** Create a tagged release of your `toast` repository on GitHub.
> 2.  **Use a CDN service:** Services like jsDelivr or unpkg can serve files directly from GitHub Releases.  A stable jsDelivr link would look like: `https://cdn.jsdelivr.net/gh/username/toast@vX.X.X/toast.min.js` (replace `username` with your GitHub username, `toast` with your repository name, and `vX.X.X` with the release version tag).

### Local Installation

1.  **Download Files:** Download `toast.js` and `toast.min.js` from the [GitHub repository](https://github.com/sakibweb/toast).
2.  **Include in Project:** Place the files in your project's JavaScript directory.
3.  **Add to HTML:**  Link either `toast.min.js` (for production) or `toast.js` (for development) in your HTML:

    ```html
    <script src="path/to/toast.min.js"></script>
    ```

## 🚀 Usage

Using `toast` is straightforward and intuitive.

### Basic Toast

To show a simple toast message, use the `toast()` function:

```javascript
toast("Your message here.");
```

This will display a default toast message in the bottom-right corner with an "auto" theme.

### Toast with Header, Type, Location, and Timeout

For more control, you can use the `toast.show()` method or its type-specific shortcuts:

```javascript
// Using toast.info() shortcut
toast.info("Account updated successfully.", "Success!", 'top-right', 3); // Message, Header, Location, Timeout (seconds)

// Using toast.show() for full control
toast.show("Warning: Data might be lost.", "Warning", 'warning', 'top-center', 5);
```

**Syntax Options:**

`toast` provides flexible syntax for different use cases:

*   **Type-specific methods:** `toast.info()`, `toast.warning()`, `toast.danger()`, `toast.error()`, `toast.success()`, `toast.light()`, `toast.dark()`, `toast.auto()`. These methods accept parameters in the order: `(message, header, location, timeSec)`.
*   **Location-specific shortcuts:** `toast.tl()`, `toast.tc()`, `toast.tr()`, `toast.ml()`, `toast.mc()`, `toast.mr()`, `toast.bl()`, `toast.bc()`, `toast.br()`. These accept: `(message, header, type, timeSec)`.
*   **Short type aliases:**  `toast.i()`, `toast.w()`, `toast.d()`, `toast.e()`, `toast.s()`, `toast.l()`, `toast.dk()`, `toast.a()`. These also accept: `(message, header, location, timeSec)`.

**Example Usage:**

```javascript
// Info toast at top-left for 5 seconds
toast.tl("Informative message.", "Info", 'info', 5);

// Success toast at bottom-center with a short timeout
toast.s("Operation completed!", "Success", 'bottom-center', 2);

// Danger toast at top-right with no header, auto-dismisses in 7 seconds
toast.tr("Something went wrong!", null, 'danger', 7);

// Warning toast at middle-center, dark theme, with header
toast.mc("Please double-check your input.", "Attention", 'dark');

// Auto theme toast in default bottom-right location
toast.auto("Default auto-themed toast.");
```

**Available Types:**

*   `info`
*   `warning`
*   `danger` / `error`
*   `success`
*   `light`
*   `dark`
*   `auto` (theme based on body/documentElement `dark` class)

**Available Locations:**

*   `tl` / `top-left`
*   `tc` / `top-center`
*   `tr` / `top-right`
*   `ml` / `middle-left`
*   `mc` / `middle-center`
*   `mr` / `middle-right`
*   `bl` / `bottom-left`
*   `bc` / `bottom-center`
*   `br` / `bottom-right` (default)

## 📄 License

`toast` is released under the [MIT License](LICENSE).

## 🤝 Contribute

Contributions are highly welcome! If you have suggestions, bug reports, or want to add features, please open an issue or submit a pull request on the [GitHub repository](https://github.com/sakibweb/toast).

## ⭐ Show Your Support

If you find `toast` useful, please consider giving it a star on [GitHub](https://github.com/sakibweb/toast) to show your support!

**Crafted with ❤️ by [sakibweb](https://github.com/sakibweb)**
