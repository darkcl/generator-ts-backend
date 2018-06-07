# Typescript Backend Project Generator

## What is included?

- Basic VSCode settings
- Basic Typescript settings
- Hot reload (nodemon)
- Unit test with coverage report (mocha)
- Integration test (dredd)
- Sonar Qube with typescript plugin
- Bamboo Test Reporter
- Docker Ready
- Makefile with bamboo build number support

## Running The Code

In VSCode, press `F5`

In console, run `make dev`

## Testing Code

```sh
npm run watch-test
```

## Sonar Qube

Scan your code

```sh
npm run sonar-report-local
```

You can access test results in `http://localhost:9000`

## Integration Tests

```sh
make itest
```

## Bamboo Pipeline

### Build Phrase

The makefile include support for bamboo build number.

You can select `variables.txt` as your bamboo artifact and inject variable into bamboo after running `make build`.

The variables will include `version`, so bamboo can generate version number according to `package.json` version and bamboo build number.

### Test Phrase

Run `make test` and `make itest`

## Release Phrase

Run `make push` and `make push-latest`
