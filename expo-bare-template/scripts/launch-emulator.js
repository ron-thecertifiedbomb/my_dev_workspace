import { execSync } from "child_process";

const EMULATOR_NAME = "Pixel_9_Pro";
const EMULATOR_CMD = `"C:\\Users\\ronan\\AppData\\Local\\Android\\Sdk\\emulator\\emulator.exe"`;

function launchEmulator() {
  console.log(`Launching emulator: ${EMULATOR_NAME}`);
  try {
    execSync(`${EMULATOR_CMD} -avd "${EMULATOR_NAME}"`, {
      stdio: "ignore",
      detached: true,
    });
    console.log("Emulator launched.");
  } catch (e) {
    console.log("Emulator may already be running or failed to launch.");
    console.error(e.message);
  }
}

launchEmulator();
