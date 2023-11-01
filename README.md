<!---->

<div align="center">
    <h1>API-VIDEOLOAD</h1>
    <h3>◦ Unlock boundless streaming with api-videoload</h3>
    <h3>◦ Developed with the software and tools below</h3>
</div>

<p align="center">
  <a href="https://skillicons.dev">
    <img src=https://skillicons.dev/icons?i=css,html,js,ts,react,prisma,nodejs,vite,ai />
  </a>
</p>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running api-videoload](#-running-api-videoload)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a video AI completion application that allows users to upload videos and generate AI-generated content based on the selected video. It provides functionalities such as selecting prompts, adjusting temperature, and handling API communication. The project's core value proposition is to augment video content creation by leveraging AI capabilities, saving users time and effort in generating engaging and creative content.

---

## 📂 Repository Structure

```sh
└── api-videoload/
    ├── Backend/
    │   ├── .gitignore
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── prisma/
    │   └── src/
    └── Frontend/
        ├── .gitignore
        ├── components.json
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── prettier.config.cjs
        ├── src/
        ├── tailwind.config.js
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts
```


---

## ⚙️ Modules

<details closed><summary>Frontend</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                            | ---                                                                                                                                                                                                                                                                                                                          |
| [vite.config.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/vite.config.ts)           | This code is a Vite configuration file for a React project. It sets up the development server port as 3000, specifies dependencies to exclude from optimization, adds the React plugin, and defines an alias for the "src" directory.                                                                                        |
| [postcss.config.js](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/postcss.config.js)     | This code contains the configuration for PostCSS, a tool to transform CSS files in the frontend. It includes plugins for tailwindcss, a utility-first CSS framework, and autoprefixer, a tool to add vendor prefixes.                                                                                                        |
| [prettier.config.cjs](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/prettier.config.cjs) | The code in this file configures the Prettier tool for the frontend. It adds a plugin called "prettier-plugin-tailwindcss" to enhance Prettier's formatting capabilities.                                                                                                                                                    |
| [tailwind.config.js](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/tailwind.config.js)   | This code is a configuration file for the Tailwind CSS framework. It defines the theme, colors, animations, and plugins used in the project. It also specifies the files that should be included for styling.                                                                                                                |
| [index.html](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/index.html)                   | The index.html file is the main entry point for the frontend of the application. It includes the necessary meta tags and sets the title of the page. The root div is where the frontend content will be rendered. The main.tsx script, written in TypeScript, is responsible for initializing and running the frontend code. |

</details>

<details closed><summary>Src</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                    | ---                                                                                                                                                                                                                                                                                                                          |
| [main.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/main.tsx)           | Exception:                                                                                                                                                                                                                                                                                                                   |
| [app.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/app.tsx)             | The code in app.tsx file sets up the main functionality for a video AI completion application. It includes components for selecting prompts, adjusting temperature, and generating AI-generated content based on the selected video. The code also handles API communication and user interactions.                          |
| [vite-env.d.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/vite-env.d.ts) | The file "vite-env.d.ts" in the frontend directory references the Vite client types, allowing TypeScript to recognize and provide autocomplete assistance for Vite-specific functionality within the project.                                                                                                                |
| [index.css](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/index.css)         | The code in the given file defines the base styling and colors used in the app's user interface. It sets the background, foreground, card, popover, primary, secondary, muted, accent, destructive, and various other color variables. It also applies a border to all elements and sets the body background and text color. |
| [server.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/src/server.ts)          | Exception:                                                                                                                                                                                                                                                                                                                   |

</details>

<details closed><summary>Ffmpeg</summary>

| File                                                                                                                | Summary                   |
| ---                                                                                                                 | ---                       |
| [ffmpeg-worker.js](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/ffmpeg/ffmpeg-worker.js) | Exception:                |
| [ffmpeg-core.js](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/ffmpeg/ffmpeg-core.js)     | HTTPStatus Exception: 400 |

</details>

<details closed><summary>Components</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [prompt-select.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/components/prompt-select.tsx)       | The code is a React component called PromptSelect. It renders a select dropdown menu populated with prompts fetched from an API. When a prompt is selected, the onPromptSelected function is called, passing the selected prompt's template to the parent component.                                                                                                                                                                                                                                                                                                                             |
| [video-input-form.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/components/video-input-form.tsx) | The code in video-input-form.tsx is a React component that handles the functionality of uploading a video file, converting it to audio, and performing various tasks like generating a transcription. It also includes UI elements such as buttons, labels, and text areas for user interaction. The component uses external libraries like Lucide and ffmpeg for video manipulation and file handling. The status variable tracks the progress of the file conversion and upload process. After successful completion, the component triggers a callback function to handle the uploaded video. |

</details>

<details closed><summary>Ui</summary>

| File                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                        |
| [slider.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/components/ui/slider.tsx)       | This code defines a custom slider component in React, using the SliderPrimitive component from the @radix-ui/react-slider library. The Slider component includes a track and a thumb, with various styles and properties. It is exported as a named export.                                                                                                                                |
| [select.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/components/ui/select.tsx)       | This code provides a collection of reusable components for creating select dropdown menus in React applications. These components handle various functionalities like triggering the dropdown, displaying options, handling selection, and separating options.                                                                                                                             |
| [textarea.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/components/ui/textarea.tsx)   | The code defines a reusable Textarea component in React that extends the HTML textarea element. It accepts various props, applies CSS classes, and handles references. The component ensures consistent styling and behavior for textarea inputs.                                                                                                                                          |
| [separator.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/components/ui/separator.tsx) | The code is a React component called `Separator` that renders a horizontal or vertical separator. It uses the `@radix-ui/react-separator` package and has options to make it decorative or not. The component accepts any additional props and forwards them to the underlying `SeparatorPrimitive.Root` component. The component's display name is set to match the underlying component. |
| [label.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/components/ui/label.tsx)         | The code defines a React component called "Label" that uses the Radix-UI library. It provides a forwardRef wrapper around the Radix label component, allowing for additional variant props to be passed. It applies specific CSS classes based on the variant props, and exports the Label component for use in other parts of the application.                                            |
| [button.tsx](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/components/ui/button.tsx)       | The code in this file defines a Button component in React. It utilizes class-variance-authority to manage different button styles and sizes through variants. The Button component can be customized with different variants and sizes and can be rendered as a button or a child component. It also includes a buttonVariants object that holds the styles for different button variants. |

</details>

<details closed><summary>Lib</summary>

| File                                                                                               | Summary                                                                                                                                                                                                                                          |
| ---                                                                                                | ---                                                                                                                                                                                                                                              |
| [ffmpeg.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/lib/ffmpeg.ts) | The code uses the FFmpeg library for video processing. It initializes FFmpeg and loads the required core, wasm, and worker files if they have not been previously loaded. It provides a function to get an instance of FFmpeg.                   |
| [axios.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/lib/axios.ts)   | This code exports an instance of axios with a predefined baseURL, allowing for simplified HTTP requests to a specific server address.                                                                                                            |
| [utils.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Frontend/src/lib/utils.ts)   | The code in the utils.ts file defines a function cn that combines multiple class values using clsx and applies tailwind CSS utility classes using twMerge. This allows for streamlined management and usage of class names in the frontend code. |
| [openai.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/src/lib/openai.ts)  | The code in `openai.ts` establishes a connection to the OpenAI API by creating an instance of the OpenAI class. The API key is retrieved from the environment variables using the `dotenv` package.                                              |
| [prisma.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/src/lib/prisma.ts)  | The code imports the PrismaClient from the'@prisma/client' package and exports a new instance of PrismaClient, which provides an interface for connecting and interacting with the database.                                                     |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                  |
| [get-all-videos.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/src/routes/get-all-videos.ts)                 | The code defines a route'/videos' that retrieves all videos from the database using Prisma and returns them as a response. It is designed to work with a Fastify server.                                                                                                                                                             |
| [get-all-prompts.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/src/routes/get-all-prompts.ts)               | This code defines a route handler for a GET request to "/prompts". It uses the Prisma client to retrieve all prompts from the database and sends them in the response if available.                                                                                                                                                  |
| [generate-ai-completion.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/src/routes/generate-ai-completion.ts) | This code defines a route that handles requests to generate AI completions. It validates the request body, retrieves a video from the database, prepares a prompt using the video's transcription, and interacts with the GPT-3.5 Turbo model to generate AI responses. The responses are then streamed back to the client.          |
| [upload-video.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/src/routes/upload-video.ts)                     | This code is responsible for handling the file upload functionality for videos. It validates the file size, extension, and avoids duplicate file names. It saves the uploaded file to a specific destination folder and registers it in the database.                                                                                |
| [create-transcription.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/src/routes/create-transcription.ts)     | This code defines an API endpoint for creating transcriptions of videos. It expects a video ID and a prompt in the request body. It retrieves the video from the database, reads its audio file, and sends it to OpenAI's transcription API. The resulting transcription is then saved in the database and returned as the response. |

</details>

<details closed><summary>Prisma</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [schema.prisma](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/prisma/schema.prisma) | The code defines the schema for a video application backend using Prisma. It includes models for videos with their name, path, transcription, and creation date, as well as prompts with their title and template. This schema enables the management of video data and prompts in a database.                                                                                                                                                                                   |
| [seed.ts](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/prisma/seed.ts)             | The code in `seed.ts` is responsible for seeding prompts into the database using Prisma.It creates two prompts: one for generating YouTube video titles and another for generating YouTube video descriptions.The prompts contain templates with specific instructions and placeholders for transcriptions.The `main` function uses the Prisma client to delete existing prompts and create new ones.Finally, it connects to the database and handles any errors that may occur. |

</details>

<details closed><summary>Migrations</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                 |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                     |
| [migration_lock.toml](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/prisma/migrations/migration_lock.toml) | The file "migration_lock.toml" is used in the Prisma migrations framework to lock the database provider, specifically in this case, SQLite. It is important to not manually edit this file and ensure it is added to version control systems, like Git. |

</details>

<details closed><summary>20230913002114_schema_criado</summary>

| File                                                                                                                                             | Summary                                                                                                                                                                                                     |
| ---                                                                                                                                              | ---                                                                                                                                                                                                         |
| [migration.sql](https://github.com/kaiquecamposdev/api-videoload/blob/main/Backend/prisma/migrations/20230913002114_schema_criado/migration.sql) | The code creates two tables in a database schema. "Video" stores video metadata such as ID, name, path, transcription, and creation timestamp. "Prompt" stores prompt details like ID, title, and template. |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the api-videoload repository:
```sh
git clone https://github.com/kaiquecamposdev/api-videoload
```

2. Change to the project directory:
```sh
cd api-videoload
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running api-videoload

```sh
npm run build && node dist/main.js
```

### 🧪 Tests
```sh
npm test
```

---


## 🛣 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ List any resources, contributors, inspiration, etc.`

---
[↑ Return](#Top)
