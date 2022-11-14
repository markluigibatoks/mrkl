import { Assets, BitmapFont, utils } from "pixi.js";
import { sound } from "@pixi/sound";
interface Manifest {
  bundles: {
    name: string;
    assets: [];
  }[];
}

export class AssetManager {
  static bundle: any;

  static async initialize(manifest: Manifest) {
    await Assets.init({ manifest });

    // DANGER!! DO NOT REMOVE
    console.log(sound);
    // DANGER!! DO NOT REMOVE

    const bundles = manifest.bundles.map((x) => x.name);

    const bundle = manifest.bundles[0].name;

    Assets.backgroundLoadBundle(bundle);

    utils.clearTextureCache();

    AssetManager.bundle = await Assets.loadBundle(bundle, () => {});

    AssetManager.preloadBitmapFonts();
  }

  static preloadBitmapFonts() {
    BitmapFont.from(
      "defaultFont",
      {
        fontSize: 24,
        fontFamily: "Roboto Regular",
        fill: utils.string2hex("#ffffff"),
      },
      {
        chars: BitmapFont.ASCII,
      }
    );
  }
}
