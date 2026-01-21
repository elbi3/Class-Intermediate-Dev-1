# Understanding package.json

Goal: Revisit the structure and functionality of the `package.json` file in a Node.js project.

1. Use `npm init` to initialize a new Node.js project.
2. Add values for "project name", "version", "description", "entry point", "test command", "git repository", "keywords", "author", and "license"
3. Install a dependency (the Express.js framework, for instance)
4. Install a dev dependency (a testing framework, for instance)
5. Add custom scripts to `scripts` for starting the application and for running the test framework
6. Add an "engine" field specifying the version of Node.js and npm required for the project

# Write-up

1. Explain the difference between `dependences` and `devDependencies`.

Dependencies are packages that are required to run the application in a production space. Development dependencies are only required for development, and not meant to be included in the final build. For instance, you would not want to ship testing frameworks with a final product - the testing phase of development should already be complete at this point.

2. Discuss the importance of the version field in `package.json`.

The version field uses semantic versioning, the same way npm packages do (ultimately, the project can be an npm package in this way). It is essential to track this, as updates to a project and its dependencies are kept track of with SemVer. For instance, I have a very old project that uses outdated Vite and React code. I regularly get warning emails from Github that there are security issues with those outdated dependency versions. In an ideal world, I would upgrade my project to a "version 2" (2.0.0) that uses the newer and safer versions of Vite and React. My old version is kept in sync with old dependencies, and once a refactor happens, the versioning will indicate that we are on a newer version, and that will be reflected in the `package.json` both with the "version" key, and then by indicating in "dependencies" the updated versions of React and Vite dependencies.

3. Explain semantic versioning and how it applies to dependencies.

In addition to the above explanation, the more specific details of SemVer are as follows: the pattern is Major.Minor.Patch. The "major" digit is incremented for breaking changes that may affect existing code. The "minor" digit is incremented for backwards-compatible new features. The "patch" digit is incremented for backwards-compatible bug fixes.

4. Discuss how "repository", "keywords", "author", and "license" can be useful for package distribution and maintenance.

These fields point to source code location (usually Github), aid in keyword search (especially on npm), refer to original author as a point of contact, and provide a license to indicate in what way the project may be repurposed.

5. Explain the purpose of `package-lock.json`. Why is it important to include it in version control?

This is a lot like a "history of the project" file. It is a snapshot of the entire dependency tree. It is used for locking down dependencies and their sub-dependencies with approprate versions, for reproducability of a code space, to speed up installation, and its use is considered "best practice" in version control.