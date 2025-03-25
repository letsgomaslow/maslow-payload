# Swap in Your Own React Components Overview

This guide explains how to customize the Payload Admin Panel by swapping in your own React components. It outlines the different types of components, how to define them in your Payload configuration, and various options to control behavior, styling, and localization.

## Overview

Payload CMS allows you to fully customize the Admin Panel by replacing its default components with your own React components. This approach provides extreme granularity and control over the UI, enabling you to adapt the system to your application’s needs. Components can be built as either Server Components or Client Components, depending on your requirements.

## Types of Custom Components

There are four main types of Custom Components in Payload:

- **Root Components:** Top-level UI elements that affect the entire panel.
- **Collection Components:** Components specific to collections.
- **Global Components:** Elements that are globally available in the Admin Panel.
- **Field Components:** Components for individual fields in forms and content types.

## Defining Custom Components

### Component Paths

- **Identification:** Components are specified by their file path rather than being directly imported.
- **Relative Paths:** By default, paths are relative to the project’s base directory (which can be configured via `config.admin.importMap.baseDir`).
- **Named Exports:** If your component uses a named export, you can append `#ExportName` to the file path or use the `exportName` property.

#### Example

```js
import { buildConfig } from 'payload';

const config = buildConfig({
  // ...
  admin: {
    components: {
      logout: {
        Button: '/src/components/Logout#MyComponent',
      },
    },
  },
});
```

### Component Config Object

You can also define a component using an object to pass additional options:

- **path:** The file path to the component.
- **exportName:** The name of the export if not provided in the path.
- **clientProps:** Props to pass if the component is a Client Component.
- **serverProps:** Props to pass if the component is a Server Component.

#### Example

```js
import { buildConfig } from 'payload';

const config = buildConfig({
  // ...
  admin: {
    components: {
      logout: {
        Button: {
          path: '/src/components/Logout',
          exportName: 'MyComponent',
          clientProps: {
            myCustomProp: 'Hello, World!',
          },
        },
      },
    },
  },
});
```

## Import Map

- **Purpose:** An Import Map is generated at `app/(payload)/admin/importMap.js` to map custom components by their file paths.
- **Regeneration:** It is automatically updated on startup and when Hot Module Replacement (HMR) occurs.
- **Custom Imports:** You can add additional imports using the `admin.dependencies` property, which is especially useful for plugin authors.

#### Custom Imports Example

```js
import { buildConfig } from 'payload';

export default buildConfig({
  // ...
  admin: {
    dependencies: {
      myTestComponent: {
        path: '/components/TestComponent.js#TestComponent',
        type: 'component',
        clientProps: {
          test: 'hello',
        },
      },
    },
  },
});
```

## Building Custom Components

### Default Behavior

- **React Server Components:** All custom components are React Server Components by default, allowing direct use of Payload’s Local API.
- **Automatic Prop Injection:** Payload automatically passes common props (e.g., `payload`, `i18n`) and additional props specific to the component type.

### Custom Props

- **Purpose:** Custom props allow you to pass additional data to your components.
- **Usage:** Use either `clientProps` or `serverProps` based on whether the component is a Client or Server Component.

#### Custom Props Example

```js
import { buildConfig } from 'payload';

const config = buildConfig({
  // ...
  admin: {
    components: {
      logout: {
        Button: {
          path: '/src/components/Logout#MyComponent',
          clientProps: {
            myCustomProp: 'Hello, World!',
          },
        },
      },
    },
  },
});
```

## Client vs. Server Components

### Server Components

- **Default:** Custom components are Server Components by default.
- **Capabilities:** They have direct access to the local API and full Payload Config.

### Client Components

- **Designation:** Add the `'use client'` directive at the top of your file to mark it as a Client Component.
- **Prop Serialization:** Client Components only receive serializable props; non-serializable ones are stripped out automatically.

#### Client Component Example

```js
'use client';

import React, { useState } from 'react';

export function MyClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

## Accessing the Payload Config

- **Server Components:** Can access the complete Payload Config via the `payload` prop.
- **Client Components:** Use the `useConfig` hook from `@payloadcms/ui` to access a serializable version of the config.

#### Example for Client Components

```js
'use client';

import React from 'react';
import { useConfig } from '@payloadcms/ui';

export function MyClientComponent() {
  const { config: { serverURL } } = useConfig();

  return (
    <a href={serverURL}>
      Go Home
    </a>
  );
}
```

## Localization and Internationalization

### Language Support

- **i18n Prop:** All components receive an `i18n` object to facilitate translations.
- **Server vs. Client:** Server Components get the `i18n` object directly, while Client Components can use hooks like `useTranslation` to access translation functions and current language data.

#### Client Localization Example

```js
'use client';

import React from 'react';
import { useTranslation } from '@payloadcms/ui';

export function MyClientComponent() {
  const { t, i18n } = useTranslation();

  return (
    <ul>
      <li>{t('namespace1:key', { variable: 'value' })}</li>
      <li>{t('namespace2:key', { variable: 'value' })}</li>
      <li>{i18n.language}</li>
    </ul>
  );
}
```

### Locale Handling

- **Server Components:** Automatically receive a `locale` prop for localized API requests.
- **Client Components:** Use the `useLocale` hook to determine the current locale.

## Styling Custom Components

- **CSS/SCSS Integration:** Import your own stylesheets into your component files to apply custom styling.
- **Payload CSS Library:** Use Payload’s built-in CSS/SCSS library to maintain consistency with the Admin Panel’s design system.

#### Styling Example

```js
import './index.scss';

export function MyComponent() {
  return (
    <div className="my-component">
      My Custom Component
    </div>
  );
}
```

And in your SCSS file:

```scss
.my-component {
  background-color: var(--theme-elevation-500);
}
```

Or using Payload’s SCSS library:

```scss
@import '~@payloadcms/ui/scss';

.my-component {
  @include mid-break {
    background-color: var(--theme-elevation-900);
  }
}
```

---

## Summary

- **Customization:** Payload allows deep customization of its Admin Panel via custom React components.
- **Flexibility:** Supports both Server and Client Components, with dedicated options for handling non-serializable data.
- **Configuration:** Components are referenced by file paths, integrated via an Import Map, and can be enhanced with additional props and custom imports.
- **Enhancements:** Built-in support for localization, theming, and styling ensures that your custom components integrate seamlessly with the rest of the Payload ecosystem.

For more detailed information, refer to the [Payload CMS Custom Components Documentation](https://payloadcms.com/docs/custom-components/overview).