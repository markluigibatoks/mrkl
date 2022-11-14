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
  static manifest: Manifest;

  static async initialize(manifest: Manifest) {
    AssetManager.manifest = manifest;

    await Assets.init({ manifest });

    // DANGER!! DO NOT REMOVE
    console.log(sound);
    // DANGER!! DO NOT REMOVE

    const bundles = manifest.bundles.map((x) => x.name);

    Assets.backgroundLoadBundle(bundles);

    AssetManager.preloadBitmapFonts();
  }

  static async preload(progress: any) {
    utils.clearTextureCache();

    AssetManager.bundle = await Assets.loadBundle(
      AssetManager.manifest.bundles[0].name,
      progress
    );
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
