import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x977a20fe7c363e0950e93684949FC42b1013cDF9"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "King's Landing",
        description: "This NFT will give you access to LauncherDAO!",
        image: readFileSync("scripts/assets/boss.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
