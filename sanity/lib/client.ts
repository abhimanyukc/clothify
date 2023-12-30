// import { createClient } from "next-sanity";
import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skM7sZS0xlhRNsEXHDOflO7KhkJUkQUyAiy20gjYeQceFfgge3O4yXH1MWz5za56MUt5Jdby10C2CUeqjv7Gbu3Tg5dF62nOMPUa9v7cY3egsp75ATO1P2DiDATPnm7JH8KZ2hCEuTao9ObI86AJgJReXERdE0yOMxbwxbZlDrXWK2wWxYGK",
});
