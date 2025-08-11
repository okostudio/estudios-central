import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "85irm6eq",
    dataset: "production",
    title: "Estudios Central",
    apiVersion: "2025-08-07",
    basePath: "/admin",
    plugins: [
        structureTool()
    ],

    schema: { types: schemas },
})

export default config;