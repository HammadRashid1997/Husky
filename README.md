# Husky

## Table of Contents
- [Overview](#overview)
- [Tools](#tools)
- [Approach](#approach)
- [Setup](#setup)

## Overview

Husky Ag develops innovative biofertilizers from upcycled coffee by-products, boosting nitrogen-use efficiency, enhancing soil health, and increasing crop yields—all with a commitment to circular economies and sustainability. They harness unique coffee-fruit microbes and amino acids to reduce chemical fertilizer usage, optimize nutrient release, and drive both farm profitability and positive environmental impact.

## Tools

- ✅ **Cypress** for robust and scalable E2E test automation
- ✅ **JavaScript** as the scripting language
- ✅ **Visual Studio Code** as the scripting IDE

## Approach

- ✅ **Page Object Model (POM)** structure to keep the tests modular, reusable, and maintainable

## Setup

The first step is to initialize a folder for cypress related projects. This step is optional but recommended.
```
mkdir cypress-e2e-tests
cd cypress-e2e-tests
```

After this you need to initialize a node.js project in your selected direcotry.
```
npm init -y
```

Open a separate terminal and run the following command:
```
npm install cypress --save-dev
```

This command will install all the cypress related modules and dependencies in the project. 

After this command, you need to start the cypress tool. The command to start cypress is:
```
npx cypress open
```


