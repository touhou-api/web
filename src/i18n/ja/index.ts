import common from "./common.json";
import translation from "./translation.json";

import * as QueryTypes from "~/codegen/queries";

export default {
  translation,
  common,
  query: { code: QueryTypes.LocalizeLanguage.Japanese },
};
