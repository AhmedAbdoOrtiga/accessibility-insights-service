// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export function generateHash(...values: string[]): string {
    const hashSeed: string = values.join('|').toLowerCase();
    const sha = require('sha.js');

    return sha('sha256')
        .update(hashSeed)
        .digest('base64')
        .replace(/(\+|\/|=)/g, '')
        .substr(0, 15);
}
