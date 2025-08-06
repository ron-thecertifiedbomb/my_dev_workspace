import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APK_PATH = path.resolve(
  __dirname,
  "../android/app/build/outputs/apk/release/app-release.apk"
);
const ADB_CMD = "adb";

function installApk() {
  if (!fs.existsSync(APK_PATH)) {
    console.error(
      "Release APK not found. Please build it first (./gradlew assembleRelease)."
    );
    process.exit(1);
  }
  console.log("Installing release APK...");
  execSync(`${ADB_CMD} install -r "${APK_PATH}"`, { stdio: "inherit" });
  console.log("APK installed.");
}

installApk();
