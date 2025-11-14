// @ts-nocheck

declare module "three/examples/jsm/exporters/GLTFExporter" {
    import { Object3D } from "three";

    export class GLTFExporter {
      parse(
        input: Object3D | Object3D[],
        onCompleted: (result: ArrayBuffer | object) => void,
        options?: {
          binary?: boolean;
          trs?: boolean;
          onlyVisible?: boolean;
          truncateDrawRange?: boolean;
          embedImages?: boolean;
        }
      ): void;
    }
  }

declare module "three/addons/loaders/FontLoader" {
  import { Loader } from "three";

  export class FontLoader extends Loader {
    load(
      url: string,
      onLoad?: (font: any) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}

declare module "three/addons/geometries/TextGeometry" {
  import { ExtrudeGeometry } from "three";

  export class TextGeometry extends ExtrudeGeometry {
    constructor(
      text: string,
      parameters?: {
        font?: any;
        size?: number;
        height?: number;
        curveSegments?: number;
        bevelEnabled?: boolean;
        bevelThickness?: number;
        bevelSize?: number;
        bevelOffset?: number;
        bevelSegments?: number;
      }
    );
  }
}