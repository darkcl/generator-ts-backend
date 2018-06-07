"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the ${chalk.red("ts-backend")} generator`));

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Project Name?",
        default: "my-project"
      },
      {
        type: "input",
        name: "dockerRegistry",
        message: "Docker Registry?",
        default: ""
      },
      {
        type: "input",
        name: "npmRegistry",
        message: "Use private NPM Registry?",
        default: ""
      },
      {
        type: "input",
        name: "nodeVersion",
        message: "Node Docker Image Name?",
        default: "node:8"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("docker-compose.itest.yml_t"),
      this.destinationPath(this.props.name + "/docker-compose.itest.yml"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("docker-compose.test.yml_t"),
      this.destinationPath(this.props.name + "/docker-compose.test.yml"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("docker-compose.yml_t"),
      this.destinationPath(this.props.name + "/docker-compose.yml"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("Dockerfile_t"),
      this.destinationPath(this.props.name + "/Dockerfile"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("Makefile_t"),
      this.destinationPath(this.props.name + "/Makefile"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath(".gitignore_t"),
      this.destinationPath(this.props.name + "/.gitignore"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("README.md_t"),
      this.destinationPath(this.props.name + "/README.md"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("sonar-project.properties_t"),
      this.destinationPath(this.props.name + "/sonar-project.properties"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("package.json_t"),
      this.destinationPath(this.props.name + "/package.json"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("tsconfig.json_t"),
      this.destinationPath(this.props.name + "/tsconfig.json"),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath("docs/"),
      this.destinationPath(this.props.name + "/docs/"),
      this.props
    );

    this.fs.copy(
      this.templatePath("app/"),
      this.destinationPath(this.props.name + "/app/"),
      this.props
    );

    this.fs.copy(
      this.templatePath(".vscode/"),
      this.destinationPath(this.props.name + "/.vscode/"),
      this.props
    );

    this.fs.copy(
      this.templatePath("report/"),
      this.destinationPath(this.props.name + "/report/"),
      this.props
    );

    this.fs.copy(
      this.templatePath("suport/"),
      this.destinationPath(this.props.name + "/suport/"),
      this.props
    );

    this.fs.copy(
      this.templatePath("tests/"),
      this.destinationPath(this.props.name + "/tests/"),
      this.props
    );
  }

  install() {
    process.chdir(`${this.props.name}/`);
    this.npmInstall();
  }
};
