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
  