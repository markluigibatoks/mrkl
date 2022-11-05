import { Assets } from "pixi.js";

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

    const bundles = manifest.bundles.map((x) => x.name);

    Assets.backgroundLoadBundle(bundles);

    AssetManager.bundle = await Assets.loadBundle("mainview", () => {});
  }
}
