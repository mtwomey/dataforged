import { replaceInAllStrings } from "./replaceInAllStrings.js";
import _ from "lodash-es";
/**
 * Builds Oracle metadata from a template, replacing template string values where appropriate.
 * @param json - The object to be mutated.
 * @returns The original object with the template info removed.
 */
export function templateOracleInfo(json) {
    // cloning so that the original object isn't mutated
    let jsonClone = _.cloneDeep(json);
    if (jsonClone._templateInfo) {
        jsonClone = _.merge(jsonClone._templateInfo, jsonClone);
        if (jsonClone._templateVars) {
            const templateVars = _.cloneDeep(jsonClone._templateVars);
            _.forEach(templateVars, (replaceValue, key) => {
                const searchValue = "${{" + key + "}}";
                jsonClone = replaceInAllStrings(jsonClone, searchValue, replaceValue);
            });
            delete jsonClone._templateInfo;
        }
    }
    return jsonClone;
}
//# sourceMappingURL=templateOracleInfo.js.map