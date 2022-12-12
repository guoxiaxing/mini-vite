import { Plugin } from "../plugin";
import { esbuildTransformPlugin } from "./esbuild";
import { importAnalysisPlugin } from "./importAnalysis";
import { resolvePlugin } from "./resolve";
import { cssPlugin } from "./css";
import { assetPlugin } from "./assets";
import { clientInjectPlugin } from './clientInject';


export function resolvePlugins(): Plugin[] {
    // 下一部分会逐个补充插件逻辑
    // clientInject插件最好放到最前面的位置，以免后续插件的 load 钩子干扰客户端脚本的加载。
    return [clientInjectPlugin(), resolvePlugin(), esbuildTransformPlugin(), importAnalysisPlugin(), cssPlugin(), assetPlugin()];
  }
  