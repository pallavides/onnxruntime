// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export * from 'onnxruntime-common';
import {registerBackend} from 'onnxruntime-common';
// import { onnxjsBackend } from './backend-onnxjs';
import {wasmBackend} from './backend-wasm';

// if (!BUILD_DEFS.DISABLE_WEBGL) {
//   registerBackend('webgl', onnxjsBackend, -1);
// }
if (!BUILD_DEFS.DISABLE_WASM) {
  registerBackend('wasm', wasmBackend, 0);
}
