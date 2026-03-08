#!/usr/bin/env node

import degit from "degit";
import prompts from "prompts";

const REPO = "MotionComplex/agent-boilerplate#v1.1.0";

let projectName = process.argv[2]?.trim();

if (!projectName) {
  const res = await prompts({
    type: "text",
    name: "projectName",
    message: "Project name?",
    initial: "my-app",
    validate: (v) => (v?.trim() ? true : "Required"),
  });
  projectName = res.projectName?.trim();
  if (!projectName) process.exit(1);
}

const emitter = degit(REPO, { cache: true });
emitter.on("info", (info) => console.log(info.message));

try {
  await emitter.clone(projectName);
  console.log(
    `\nDone! Next steps:\n  cd ${projectName}\n  Fill docs/idea.md, then run /generate-spec in Cursor`,
  );
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
