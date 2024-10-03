#!/usr/bin/env node

const { program } = require("commander");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

// Define the function to copy template files
async function createExtension(projectName, browsers) {
  const targetDir = path.join(process.cwd(), projectName);

  console.log(chalk.blue(`Creating project: ${projectName}`));

  try {
    // Copy the boilerplate template to the target directory
    await fs.copy(path.join(__dirname, "../templates"), targetDir);

    // Customize manifest files for selected browsers
    browsers.forEach(async (browser) => {
      const manifestPath = path.join(
        __dirname,
        `../templates/config/${browser}/manifest.json`
      );
      await fs.copy(
        manifestPath,
        path.join(targetDir, `config/manifest-${browser}.json`)
      );
    });

    console.log(chalk.green("Project created successfully!"));
    console.log(chalk.blue(`Navigate to your project with: cd ${projectName}`));
  } catch (err) {
    console.error(chalk.red("Error creating project:", err));
  }
}

// Set up the CLI commands
program
  .version("1.0.0")
  .description(
    "CLI to create cross-browser extensions with common codebase and HMR for Chrome"
  )
  .argument("<project-name>", "name of your project")
  .action(async (projectName) => {
    const answers = await inquirer.prompt([
      {
        type: "checkbox",
        name: "browsers",
        message: "Select browsers to support:",
        choices: ["chrome", "firefox"],
        default: ["chrome"],
      },
    ]);
    createExtension(projectName, answers.browsers);
  });

program.parse(process.argv);
