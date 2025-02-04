// import yaml from "js-yaml";
import fs from "fs-extra";
import yaml from "yaml";
// type JsonSerializable = Record<string,unknown> | Record<string,unknown>[];
/**
 * Converts a json object to a YAML file with standardized formatting.
 */
export function jsonToYaml(pathIn, pathOut) {
    const data = yaml.stringify(fs.readJsonSync(pathIn), {
        indent: 2,
        blockQuote: false,
        doubleQuotedMinMultiLineLength: 40,
    });
    fs.writeFileSync(pathOut, data);
}
jsonToYaml("./src/_master-data/Ironsworn/Truths.json", "./src/_master-data/Ironsworn/Truths.yaml");
//# sourceMappingURL=jsonToYaml.js.map