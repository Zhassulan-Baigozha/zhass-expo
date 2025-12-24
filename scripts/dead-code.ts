#!/usr/bin/env node
// scripts/dead-code.ts
import { execSync } from "node:child_process";

const IGNORED_PATTERNS = [
  " - default",
  "unstable_settings",
];

type ExecError = Error & {
  stdout?: Buffer | string;
};

function isExecError(error: unknown): error is ExecError {
  return (
    typeof error === "object" &&
    error !== null &&
    "stdout" in error
  );
}

function run() {
  let output = "";

  try {
    output = execSync("ts-prune -p tsconfig.json", {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });
  } catch (error: unknown) {
    // ts-prune может завершаться с кодом 1 — это ожидаемо
    if (isExecError(error)) {
      output = error.stdout?.toString() ?? "";
    } else {
      throw error; // реальная неожиданная ошибка
    }
  }

  const lines = output
    .split("\n")
    .filter(Boolean)
    .filter(
      (line) => !IGNORED_PATTERNS.some((pattern) => line.includes(pattern)),
    );

  if (lines.length > 0) {
    console.log(lines.join("\n"));
    process.exit(1);
  }

  console.log("✅ No dead code found");
}

run();
