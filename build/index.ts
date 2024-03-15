import esbuild from "esbuild";
import nodeExternalsPlugin from "esbuild-node-externals";
import path from "path";

const init = async() => {
    const build = await esbuild.build({
        entryPoints: [
            path.resolve("./src/index.ts"),
        ],
        outdir: path.resolve("dist")
    })
}

init()