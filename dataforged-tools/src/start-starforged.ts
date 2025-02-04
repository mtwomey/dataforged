import "source-map-support/register.js";
import { IMG_PATH, JSON_PATHS, MASTER_PNG_PATH } from "@constants/index.js";
import { Gamespace } from "@json_out/index.js";
import type { Starforged } from "@json_out/index.js";
import { buildDataforged } from "@utils/buildDataforged.js";
import { buildImages } from "@utils/buildImages.js";
import { writeJson } from "@utils/io/writeJSON.js";
import _ from "lodash-es";

const data = buildDataforged(Gamespace.Starforged) as Starforged;
export { data };

_.forEach(data, (value, key) => {
  if (typeof value !== "string" && typeof value !== "undefined") {
    let fileName = "";
    switch (key as keyof Starforged) {
      case "Asset Types": {
        fileName = "assets";
        break;
      }
      case "Encounters": {
        fileName = "encounters";
        break;
      }
      case "Oracle Categories": {
        fileName = "oracles";
        break;
      }
      case "Move Categories": {
        fileName = "moves";
        break;
      }
      case "Setting Truths": {
        fileName = "truths";
        break;
      }
      default:
        throw new Error(`Unknown key in game data root object: ${key}`);
    }
    JSON_PATHS.forEach(path => writeJson(path + `/starforged/${fileName}.json`, value));
  }
});

JSON_PATHS.forEach(path => writeJson( path+ "/starforged/dataforged.json", data));

// const outRoot = "../img";
// const outWebP = "../img/raster/webp";

// buildImages(IMG_PATH , outRoot, MASTER_PNG_PATH , outWebP);



